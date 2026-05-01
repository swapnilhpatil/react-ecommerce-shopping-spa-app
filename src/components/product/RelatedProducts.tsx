import React from 'react';
import { Product } from '../../types/product';
import { CartIcon, HeartIcon } from '../icons';

interface RelatedProductsProps {
  products: Product[];
}

/**
 * RelatedProducts component displays a list of related items.
 * 
 * @param {RelatedProductsProps} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="border-t border-slate-200 pt-16 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 mb-2">You may also like</h2>
          <p className="text-slate-500 font-medium">Selected items that complement your style</p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-colors hover:border-primary hover:text-primary">
            &larr;
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-colors hover:border-primary hover:text-primary">
            &rarr;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col bg-white border border-slate-100 rounded-3xl p-3 shadow-sm group cursor-pointer transition-transform hover:-translate-y-1">
            <div className="relative rounded-2xl overflow-hidden aspect-square w-full bg-slate-50">
              {i === 0 && (
                <span className="absolute top-3 left-3 bg-white text-primary text-[10px] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">Classic</span>
              )}
              {i === 1 && (
                <span className="absolute top-3 left-3 bg-primary/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm backdrop-blur-sm">New</span>
              )}
              <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-slate-400 shadow-sm transition-colors hover:text-red-500 hover:bg-white z-20 backdrop-blur-sm">
                <HeartIcon size={16} />
              </button>
              <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col gap-1 mt-4 px-2 mb-2">
              <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">{p.category || p.cat}</span>
              <h4 className="text-[15px] font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors line-clamp-1">{p.name}</h4>
              <div className="flex items-center justify-between mt-1">
                <span className="text-base font-bold text-primary">${p.price.toFixed(2)}</span>
                <button className="w-8 h-8 rounded-full bg-indigo-50 text-primary flex items-center justify-center transition-colors hover:bg-primary hover:text-white z-20">
                  <CartIcon size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
