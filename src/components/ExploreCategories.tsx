import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Electronics', icon: '💻' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Home & Garden', icon: '🏠' },
  { name: 'Flash Sales', icon: '⚡' },
  { name: 'New Arrivals', icon: '🆕' },
];

const ExploreCategories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-[600px]">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Explore Categories</h2>
            <p className="text-slate-500 text-lg leading-relaxed">Discover curated selections for every part of your life.</p>
          </div>
          <Link href="/catalog" className="text-primary font-bold text-base hover:underline transition-all">View All &rarr;</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center gap-5 p-8 rounded-[20px] bg-slate-50 cursor-pointer border border-transparent transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary">
                <span className="text-3xl grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-200">{cat.icon}</span>
              </div>
              <span className="font-heading font-bold text-slate-800 text-base text-center transition-colors duration-300 group-hover:text-primary">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
