import React from 'react';
import Link from 'next/link';

const TrendingProducts = () => {
  return (
    <section className="py-24 bg-surface-variant">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Trending Products</h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center cursor-pointer transition-colors hover:border-primary hover:text-primary" aria-label="Previous">&larr;</button>
            <button className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center cursor-pointer transition-colors hover:border-primary hover:text-primary" aria-label="Next">&rarr;</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,600px)] gap-6">
          {/* Featured Large Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
            <div className="relative flex-1 bg-slate-100 flex items-center justify-center p-8 md:p-12 min-h-[300px]">
              <img src="/images/headphones.png" alt="Aura Wireless Pro" className="w-full max-w-[400px] h-auto object-contain drop-shadow-xl" />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-sm transition-colors hover:bg-slate-100">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-sm transition-colors hover:bg-slate-100">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </button>
              </div>
            </div>
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-wider text-primary uppercase mb-2">PREMIUM AUDIO</span>
              <Link href="/product/featured" className="no-underline">
                <h3 className="font-heading text-3xl font-extrabold text-slate-900 mb-4 leading-tight hover:text-primary transition-colors">Aura Wireless Pro</h3>
              </Link>
              <p className="text-slate-500 leading-relaxed mb-8 text-base">
                Experience studio-grade sound with industry-leading adaptive noise cancellation and a refined 40-hour battery architecture.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-3xl font-extrabold tracking-tight text-slate-900">$349.00</span>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-full font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
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
              badge="IN STOCK" 
            />
            <ProductCard 
              id="t2"
              name="Velocity Run Sneaker" 
              price={120} 
              image="/images/sneaker.png" 
            />
            <ProductCard 
              id="t3"
              name="Midnight Amber Candle" 
              price={45} 
              image="/images/candle.png" 
            />
            <ProductCard 
              id="t4"
              name="PureAir Home S2" 
              price={299} 
              image="/images/purifier.png" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ id, name, price, image, badge }: { id: string, name: string, price: number, image: string, badge?: string }) => (
  <div className="bg-white rounded-[20px] border border-slate-200 overflow-hidden flex flex-col transition-shadow hover:shadow-md">
    <div className="relative bg-slate-50 h-[220px] flex items-center justify-center p-6">
      {badge && <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full tracking-wider z-20">{badge}</span>}
      <img src={image} alt={name} className="max-w-full max-h-full object-contain relative z-10" />
      <Link href={`/product/${id}`} className="absolute inset-0 z-20" />
    </div>
    <div className="p-5 flex flex-col flex-1 gap-3">
      <Link href={`/product/${id}`} className="no-underline z-10 relative">
        <h4 className="text-sm font-medium text-slate-800 hover:text-primary transition-colors">{name}</h4>
      </Link>
      <div className="flex justify-between items-center mt-auto z-10 relative">
        <span className="text-base font-bold text-primary">${price.toFixed(2)}</span>
        <button className="w-7 h-7 bg-slate-900 text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 relative z-20">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default TrendingProducts;
