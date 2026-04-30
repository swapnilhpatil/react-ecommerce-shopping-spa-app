'use client';

import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from 'next/link';

const products = [
  { id: 1, name: 'Elite Sound Over-Ear', price: 299, image: '/images/headphones.png', cat: 'AUDIO TECH', rating: 5, reviews: 128 },
  { id: 2, name: 'Minimalist Quartz Watch', price: 149, oldPrice: 199, image: '/images/watch.png', cat: 'TIMEPIECE', rating: 4, reviews: 84, sale: true },
  { id: 3, name: 'Pro-Runner Speedster', price: 120, image: '/images/sneaker.png', cat: 'VELOCITY', rating: 5, reviews: 312 },
  { id: 4, name: 'Natural Renewal Facial...', price: 65, image: '/images/cat_skincare.png', cat: 'ORGANICA', rating: 4, reviews: 52 },
  { id: 'featured', featured: true },
  { id: 5, name: 'Retro Aviator', price: 89, image: '/images/cat_sunglasses.png', cat: 'VISIONARY', rating: 5, reviews: 210 },
  { id: 6, name: 'Instant Film Retro', price: 159, image: '/images/charge_stand.png', cat: 'ANALOG CO', rating: 4, reviews: 19 },
  { id: 7, name: 'Aura Wireless Pro', price: 249, image: '/images/headphones.png', cat: 'AUDIO TECH', rating: 5, reviews: 45 },
  { id: 8, name: 'Elite Ring X', price: 299, image: '/images/ring_x.png', cat: 'WEARABLES', rating: 5, reviews: 12 },
];

export default function Catalog() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  return (
    <main className="bg-slate-50 min-h-screen pb-16 flex flex-col">
      <Header />

      <div className="container flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 py-8">
          {/* Sidebar */}
          <aside className="bg-white rounded-3xl p-8 h-fit shadow-sm flex flex-col gap-10 lg:block lg:space-y-10">
            <div className="flex flex-col">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-5">Categories</h3>
              <ul className="flex flex-col gap-4 list-none">
                {['All Products', 'Electronics', 'Fashion', 'Home & Decor'].map((cat, i) => (
                  <li key={cat} className="flex items-center gap-3 text-sm font-medium text-slate-600 cursor-pointer">
                    <input type="checkbox" defaultChecked={i === 0} id={`cat-${i}`} className="w-[18px] h-[18px] rounded border-2 border-slate-300 cursor-pointer" />
                    <label htmlFor={`cat-${i}`} className="cursor-pointer">{cat}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-5">Price Range</h3>
              <div className="flex items-center gap-2 mb-4">
                <input type="text" placeholder="Min" className="w-full p-2.5 border border-slate-200 rounded-lg text-xs outline-none" value={`$${minPrice}`} readOnly />
                <span>-</span>
                <input type="text" placeholder="Max" className="w-full p-2.5 border border-slate-200 rounded-lg text-xs outline-none" value={`$${maxPrice}`} readOnly />
              </div>
              <div className="h-1 bg-slate-200 rounded-full relative mt-8">
                <div className="w-4 h-4 bg-primary border-2 border-white rounded-full absolute top-1/2 -translate-y-1/2 left-[0%] shadow-sm"></div>
                <div className="w-4 h-4 bg-primary border-2 border-white rounded-full absolute top-1/2 -translate-y-1/2 left-[100%] shadow-sm"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-5">Customer Rating</h3>
              <ul className="flex flex-col gap-4 list-none">
                {[4, 3, 2, 1].map(r => (
                  <li key={r} className="flex items-center gap-3 text-sm font-medium text-slate-600 cursor-pointer">
                    <input type="radio" name="rating" id={`rating-${r}`} defaultChecked={r === 4} className="w-[18px] h-[18px] cursor-pointer" />
                    <label htmlFor={`rating-${r}`} className="flex items-center gap-1 cursor-pointer">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" fill={i < r ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" className={i < r ? "text-amber-400" : "text-slate-300"}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      ))}
                      <span className="text-slate-600 text-xs ml-1">& Up</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-primary text-white p-4 rounded-xl font-bold text-sm hover:bg-[#2b1da3] transition-colors mt-6 lg:mt-0">Apply Filters</button>
          </aside>

          {/* Main Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center bg-white border border-slate-200 rounded-xl px-4 py-3 w-full max-w-[400px]">
                <svg className="text-slate-400" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                <input type="text" placeholder="Search products, brands, and more..." className="flex-1 ml-3 border-none outline-none text-sm text-slate-700 bg-transparent" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-500">Sort by:</span>
                <select className="border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold text-slate-800 outline-none bg-white">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                p.featured ? (
                  <div key={`${"featured"}-${i}`} className="sm:col-span-2 lg:col-span-3 bg-slate-900 rounded-[24px] relative overflow-hidden flex items-center min-h-[300px]">
                    <img src="/images/cat_banner.png" alt="" className="absolute right-0 bottom-0 h-full w-auto object-cover opacity-60 mix-blend-luminosity" />
                    <div className="relative z-10 p-10 md:p-12 max-w-[500px]">
                      <span className="text-xs font-bold tracking-[0.1em] text-white/70 mb-4 block">FEATURED COLLECTION</span>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-[1.1] font-heading">Elevate Your Training Experience</h2>
                      <p className="text-slate-300 text-base leading-relaxed mb-8">Designed for those who demand both performance and style in every step.</p>
                      <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm transition-transform hover:-translate-y-1">Explore Now</button>
                    </div>
                  </div>
                ) : (
                  <div key={p.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group">
                    {p.sale && <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full tracking-wider z-20">SALE</span>}
                    <button className="absolute top-4 right-4 bg-white/80 backdrop-blur w-9 h-9 rounded-full flex items-center justify-center text-slate-400 transition-colors hover:text-red-500 hover:bg-white z-20">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    </button>
                    <div className="relative h-[240px] bg-slate-50 flex items-center justify-center p-6">
                      <img src={p.image} alt={p.name as string} className="w-full h-full object-cover relative z-10" />
                      <Link href={`/product/${p.id}`} className="absolute inset-0 z-10" />
                    </div>
                    <div className="p-6 flex flex-col flex-1 gap-2">
                      <span className="text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase">{p.cat}</span>
                      <Link href={`/product/${p.id}`} className="no-underline z-10 relative">
                        <h4 className="text-base font-bold text-slate-900 leading-[1.3] transition-colors hover:text-primary">{p.name}</h4>
                      </Link>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="14" height="14" fill={i < (p?.rating as number) ? "#f59e0b" : "none"} stroke={i < (p?.rating as number) ? "#f59e0b" : "#cbd5e1"} strokeWidth={i < (p?.rating as number) ? "0" : "2"} viewBox="0 0 24 24" className="text-amber-500"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        ))}
                        <span className="text-slate-400 text-[13px] ml-1">({p.reviews})</span>
                      </div>
                      <div className="flex justify-between items-end mt-auto z-10 relative">
                        <div className="flex flex-col">
                          {p.oldPrice && <span className="text-[13px] text-slate-400 line-through font-medium">${p.oldPrice.toFixed(2)}</span>}
                          <span className="text-xl font-extrabold text-primary">${p?.price?.toFixed(2)}</span>
                        </div>
                        <button className="w-10 h-10 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center transition-colors hover:bg-slate-900 hover:text-white relative z-20">
                          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* Loader */}
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-300 animate-[bounce_1.4s_infinite_ease-in-out_both] [animation-delay:-0.32s]"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300 animate-[bounce_1.4s_infinite_ease-in-out_both] [animation-delay:-0.16s]"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300 animate-[bounce_1.4s_infinite_ease-in-out_both]"></div>
              </div>
              <span className="text-sm font-medium text-slate-400">Loading more treasures...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl z-50">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
      </div>

      <Footer />
    </main>
  );
}
