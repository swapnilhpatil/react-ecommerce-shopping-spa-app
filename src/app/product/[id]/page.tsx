'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProductGallery from "../../../components/product/ProductGallery";
import ProductInfo from "../../../components/product/ProductInfo";
import RelatedProducts from "../../../components/product/RelatedProducts";
import { MOCK_PRODUCT_DETAIL, MOCK_RELATED_PRODUCTS } from '../../../constants/products';
import { CheckIcon } from '../../../components/icons';

/**
 * ProductDetail page component.
 * 
 * @param {object} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState('Description');
  
  // Use mock data for now, ideally fetch based on id
  const product = { ...MOCK_PRODUCT_DETAIL, id };
  const relatedProducts = MOCK_RELATED_PRODUCTS;

  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />
      
      <div className="container py-8">
        <div className="text-xs font-bold tracking-wider text-slate-500 uppercase flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Shop</Link> <span className="text-slate-300">&gt;</span> <Link href="/catalog" className="hover:text-primary transition-colors">{product.category}</Link> <span className="text-slate-300">&gt;</span> <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[100px_minmax(400px,600px)_1fr] gap-6 lg:gap-10 mb-16">
          <ProductGallery thumbnails={product.thumbnails || []} name={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Tabs */}
        <div className="flex flex-nowrap overflow-x-auto gap-8 border-b border-slate-200 mb-12 hide-scrollbar">
          {['Description', 'Reviews (128)', 'Shipping & Returns'].map(tab => (
            <div 
              key={tab} 
              className={`pb-4 cursor-pointer font-bold text-sm tracking-wider uppercase whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>}
            </div>
          ))}
        </div>

        {/* Engineering Excellence Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">Engineering Excellence</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{product.description}</p>
            <ul className="flex flex-col gap-4 mt-4">
              {product.features?.map((f, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                  <CheckIcon size={24} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md">
            <img src="/images/watch_lifestyle.png" alt="Lifestyle" className="w-full h-auto block" />
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </div>

      <Footer />
    </main>
  );
}
