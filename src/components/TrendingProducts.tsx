import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { HeartIcon, ShareIcon, CartIcon } from './icons';

/**
 * TrendingProducts component displaying a featured product and a grid of trending items.
 * 
 * @returns {React.JSX.Element} The rendered TrendingProducts component.
 */
const TrendingProducts: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Trending Products</h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Large Card */}
          <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="relative flex-1 min-h-[350px] overflow-hidden">
              <img src="/images/headphones.png" alt="Aura Wireless Pro" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-md transition-colors hover:bg-slate-100">
                  <HeartIcon size={20} />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-md transition-colors hover:bg-slate-100">
                  <ShareIcon size={20} />
                </button>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center bg-white">
              <span className="text-[10px] font-extrabold tracking-[0.15em] text-primary uppercase mb-3">PREMIUM AUDIO</span>
              <Link href="/product/featured" className="no-underline mb-3">
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 leading-tight hover:text-primary transition-colors">Aura Wireless Pro</h3>
              </Link>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                Experience studio-grade sound with industry-leading adaptive noise cancellation and a refined 40-hour battery architecture.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold tracking-tight text-primary">$349.00</span>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-bold text-sm transition-transform hover:bg-slate-800">
                  <CartIcon size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <ProductCard 
              id="t1"
              name="Core Minimalist Watch" 
              price={189} 
              image="/images/watch.png" 
              category="IN STOCK" 
            />
            <ProductCard 
              id="t2"
              name="Velocity Run Sneaker" 
              price={120} 
              image="/images/sneaker.png" 
              category=""
            />
            <ProductCard 
              id="t3"
              name="Midnight Amber Candle" 
              price={45} 
              image="/images/candle.png" 
              category=""
            />
            <ProductCard 
              id="t4"
              name="PureAir Home S2" 
              price={299} 
              image="/images/purifier.png" 
              category=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
