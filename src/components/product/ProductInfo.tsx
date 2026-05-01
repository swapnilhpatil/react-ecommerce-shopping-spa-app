import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '../../types/product';
import { CartIcon } from '../icons';

interface ProductInfoProps {
  product: Product;
}

/**
 * ProductInfo component displays the details and add-to-cart actions for a product.
 * 
 * @param {ProductInfoProps} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('40mm');

  return (
    <div className="flex flex-col pt-4 order-3">
        <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-slate-100">
        <span className="text-[10px] font-extrabold tracking-[0.15em] text-primary bg-indigo-50 px-3 py-1.5 rounded-full w-fit">{product?.category?.toUpperCase()} COLLECTION</span>
        <h1 className="font-heading text-4xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{product.name}</h1>
        <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
          <div className="flex gap-1 text-[#fbbf24]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            ))}
          </div>
          <span>({product.reviews} Reviews)</span>
          <span className="text-emerald-500 ml-2 font-bold tracking-wide">| &nbsp; {product.stock}</span>
        </div>
      </div>

      <div className="flex items-end gap-3 mb-6">
        <span className="font-heading text-4xl font-extrabold text-primary">${product.price.toFixed(2)}</span>
        <span className="text-xl font-bold text-slate-400 line-through mb-1">${product.oldPrice?.toFixed(2)}</span>
        <span className="bg-red-50 text-red-500 text-xs font-bold px-2 py-1 rounded mb-1.5 ml-2">{product.discount}</span>
      </div>

      <div className="flex items-start gap-4 bg-indigo-50/50 rounded-xl p-4 mb-8 text-sm text-slate-700">
        <div className="text-primary mt-0.5">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 7 6.33 6.33 7 5.5 7z" /></svg>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-slate-900 mb-0.5">Special Offer</span>
          <span>Buy 2 get an extra 10% off with code <strong className="font-bold">ELITE10</strong></span>
        </div>
      </div>

      <div className="mb-8">
        <span className="text-xs font-bold tracking-wider text-slate-800 uppercase block mb-4">FINISH: GRAPHITE BLACK</span>
        <div className="flex gap-4">
          {product.colors?.map((c, i) => (
            <div key={i} className={`w-10 h-10 rounded-full cursor-pointer transition-transform shadow-sm ${i === 0 ? 'ring-2 ring-primary ring-offset-4 ring-offset-white scale-110' : 'hover:scale-110 opacity-70 hover:opacity-100'}`} style={{ backgroundColor: c }}></div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">SIZE</span>
          <Link href="#" className="text-xs font-bold text-primary underline">Size Guide</Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {product.sizes?.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3.5 border rounded-lg font-bold text-sm transition-all ${selectedSize === size ? 'border-primary bg-indigo-50/50 text-primary' : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <button className="bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors hover:bg-primary/90 shadow-md shadow-primary/20">
          <CartIcon size={20} />
          Add to Cart
        </button>
        <button className="bg-slate-900 text-white font-bold py-4 rounded-xl transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20">
          Buy Now
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          Free Express Delivery
        </div>
        <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          2 Year Warranty
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
