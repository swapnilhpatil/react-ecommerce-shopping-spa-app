'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [selectedSize, setSelectedSize] = useState('40mm');
  const [activeTab, setActiveTab] = useState('Description');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Dummy product data
  const product = {
    id: id,
    name: 'Elite Chrono V2: Sapphire Edition',
    category: 'Wearables',
    price: 499.00,
    oldPrice: 599.00,
    discount: '-15%',
    rating: 5,
    reviews: 128,
    stock: 'In Stock',
    description: 'The Elite Chrono V2 isn\'t just a smartwatch—it\'s a statement of technical mastery. Crafted from aerospace-grade titanium and featuring a scratch-resistant sapphire crystal display, it stands up to the most demanding environments.',
    colors: ['#1e1b4b', '#94a3b8', '#c7d2fe'],
    sizes: ['40mm', '44mm', '48mm'],
    mainImage: '/images/watch_detail.png',
    thumbnails: [
      '/images/watch_detail.png',
      '/images/watch.png',
      '/images/hero_bg.png', // Placeholder for other angles
      '/images/watch_lifestyle.png'
    ],
    features: [
      'Up to 14 days battery life on a single charge',
      'Precision heart rate and blood oxygen monitoring',
      'Water resistant up to 100 meters (10 ATM)',
      'Global GPS tracking and offline mapping'
    ]
  };

  const relatedProducts = [
    { name: 'Minimalist Pro', price: 189, image: '/images/watch.png', cat: 'ELITE CLASSICS' },
    { name: 'Sonic Max Pro', price: 329, image: '/images/sonic_max.png', cat: 'AUDIO LABS' },
    { name: 'Elite Ring X', price: 299, image: '/images/ring_x.png', cat: 'WEARABLES' },
    { name: 'Duo Charge Stand', price: 89, image: '/images/charge_stand.png', cat: 'POWER' },
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />
      
      <div className="container py-8">
        <div className="text-xs font-bold tracking-wider text-slate-500 uppercase flex items-center gap-2 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Shop</Link> <span className="text-slate-300">&gt;</span> <Link href="/catalog" className="hover:text-primary transition-colors">{product.category}</Link> <span className="text-slate-300">&gt;</span> <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[100px_minmax(400px,600px)_1fr] gap-6 lg:gap-10 mb-16">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible order-2 lg:order-1 pb-4 lg:pb-0 hide-scrollbar">
            {product.thumbnails.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImageIndex(i)}
                className={`w-[80px] h-[80px] lg:w-full lg:h-[100px] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all shrink-0 bg-white ${i === selectedImageIndex ? 'border-primary shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden flex items-center justify-center order-1 lg:order-2 aspect-square lg:aspect-auto">
            <img src={product.thumbnails[selectedImageIndex]} alt={product.name} className="w-full h-full object-cover" />
            <button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-sm transition-colors hover:text-red-500 hover:shadow-md">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-4 order-3">
            <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-slate-200">
              <span className="text-[10px] font-extrabold tracking-[0.15em] text-primary bg-indigo-50 px-3 py-1.5 rounded-full w-fit">{product.category.toUpperCase()} COLLECTION</span>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">{product.name}</h1>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                <div className="flex gap-1 text-[#fbbf24]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <span>({product.reviews} Reviews)</span>
                <span className="text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded tracking-wider uppercase text-[10px] ml-2">{product.stock}</span>
              </div>
            </div>

            <div className="flex items-end gap-4 mb-6">
              <span className="font-heading text-4xl font-extrabold text-slate-900">${product.price.toFixed(2)}</span>
              <span className="text-xl font-bold text-slate-400 line-through mb-1">${product.oldPrice.toFixed(2)}</span>
              <span className="bg-[#ef4444] text-white text-xs font-bold px-2 py-1 rounded-md mb-1.5 tracking-wider">{product.discount}</span>
            </div>

            <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8 text-sm text-indigo-900">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
              <span><strong>Special Offer:</strong> Buy 2 get an extra 10% off with code <strong className="bg-white px-2 py-0.5 rounded text-primary">ELITE10</strong></span>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-3">Finish: Graphite Black</span>
              <div className="flex gap-4">
                {product.colors.map((c, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full cursor-pointer transition-transform hover:scale-110 shadow-sm ${i === 0 ? 'ring-2 ring-primary ring-offset-4 ring-offset-slate-50' : ''}`} style={{ backgroundColor: c }}></div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">Size</span>
                <Link href="#" className="text-xs font-bold text-primary underline">Size Guide</Link>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded-xl font-bold text-sm transition-all ${selectedSize === size ? 'border-primary bg-primary text-white shadow-md' : 'border-slate-200 bg-white text-slate-700 hover:border-primary/50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button className="bg-white border-2 border-slate-900 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors hover:bg-slate-50">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                Add to Cart
              </button>
              <button className="bg-slate-900 text-white font-bold py-4 rounded-xl transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20">Buy Now</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Free Express Delivery
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                2 Year Warranty
              </div>
            </div>
          </div>
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
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                  <svg width="24" height="24" fill="none" stroke="#10b981" strokeWidth="3" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md">
            <img src="/images/watch_lifestyle.png" alt="Lifestyle" className="w-full h-auto block" />
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-slate-200 pt-16 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 mb-2">You may also like</h2>
              <p className="text-slate-500 font-medium">Selected items that complement your style</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-colors hover:border-primary hover:text-primary">&larr;</button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-colors hover:border-primary hover:text-primary">&rarr;</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p, i) => (
              <div key={i} className="flex flex-col gap-4 group cursor-pointer">
                <div className="bg-white rounded-2xl p-6 aspect-square flex items-center justify-center border border-slate-200 transition-all group-hover:border-primary group-hover:shadow-md">
                  <img src={p.image} alt={p.name} className="max-w-[80%] max-h-[80%] object-contain transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">{p.cat}</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 mb-2 group-hover:text-primary transition-colors">{p.name}</h4>
                  <span className="text-base font-extrabold text-primary">${p.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
