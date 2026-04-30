import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => {
  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden group">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/30 p-8 flex flex-col justify-end">
        <h3 className="text-white font-heading font-bold tracking-wider text-2xl mb-4 uppercase">{title}</h3>
        <Link href={link} className="inline-block bg-white text-slate-900 font-semibold text-sm px-6 py-3 rounded-full self-start transition-colors duration-200 hover:bg-slate-100">
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
