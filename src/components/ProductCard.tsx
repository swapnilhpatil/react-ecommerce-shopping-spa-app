import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
  return (
    <div className="flex flex-col gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 group">
      <div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <Link href={`/product/${id}`} className="absolute inset-0 z-10" />
        <button className="absolute bottom-4 left-4 right-4 bg-white text-slate-800 p-3 rounded-lg font-semibold text-sm opacity-0 translate-y-2.5 transition-all duration-300 ease-in-out shadow-md group-hover:opacity-100 group-hover:translate-y-0 z-20">
          Quick Add
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{category}</span>
        <Link href={`/product/${id}`} className="no-underline">
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        </Link>
        <p className="font-bold text-primary text-lg">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
