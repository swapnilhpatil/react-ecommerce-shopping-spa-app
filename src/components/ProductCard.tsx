import React from 'react';
import Link from 'next/link';
import { ProductCardProps } from '../types/product';

/**
 * ProductCard component for displaying a product in a grid or list.
 * 
 * @param {ProductCardProps} props - The properties for the ProductCard component.
 * @returns {React.JSX.Element} The rendered product card component.
 */
const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category, badge }) => {
  return (
    <div className="flex flex-col bg-white border border-slate-100 rounded-3xl shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 group overflow-hidden">
      <div className="relative aspect-square bg-slate-50 w-full overflow-hidden">
        {category === 'IN STOCK' && (
          <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider z-20">IN STOCK</span>
        )}
        <img src={image} alt={name} className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
        <Link href={`/product/${id}`} className="absolute inset-0 z-10" />
      </div>
      <div className="flex flex-col p-5">
        <Link href={`/product/${id}`} className="no-underline z-10 relative mb-4">
          <h3 className="text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors line-clamp-1">{name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-auto">
          <p className="font-bold text-primary text-base">${price?.toFixed(2)}</p>
          <button className="w-8 h-8 rounded-full bg-indigo-50 text-primary flex items-center justify-center font-medium transition-colors hover:bg-primary hover:text-white z-20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

