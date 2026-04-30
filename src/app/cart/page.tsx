'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [items, setItems] = useState([
    { id: '1', name: 'Stratos Performance V2', category: 'ELITE FOOTWEAR', price: 189.00, quantity: 1, image: '/images/mens.png' },
    { id: '2', name: 'Lumina Watch Series 4', category: 'TECH WEARABLES', price: 349.00, quantity: 1, image: '/images/watch.png' },
    { id: '3', name: 'Zenith Noise Cancelling Headphones', category: 'AUDIO PRO', price: 299.00, quantity: 1, image: '/images/headphones.png' },
  ]);

  const fbtItems = [
    { id: 'f1', name: 'Heavy-Duty Charging Cable', category: 'ACCESSORIES', price: 24.99, image: '/images/charge_stand.png' },
    { id: 'f2', name: 'Pro Screen Cleaning Kit', category: 'CARE', price: 15.00, image: '/images/cat_skincare.png' },
    { id: 'f3', name: 'Travel Storage Case', category: 'PROTECTION', price: 45.00, image: '/images/womens.png' },
    { id: 'f4', name: 'Wireless Charging Pad Pro', category: 'POWER', price: 59.99, image: '/images/purifier.png' },
  ];

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.075; // 7.5% approx to match $62.78 for $837
  const total = subtotal + tax;

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Header />
      
      <div className="container max-w-[1200px] py-12 md:py-20">
        <div className="mb-12 border-b border-slate-200 pb-6">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">Your Shopping Bag</h1>
          <p className="text-slate-500 text-lg font-medium">There are {items.length} items in your cart.</p>
        </div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
            {/* Cart Items List */}
            <div className="flex flex-col gap-6">
              {items.map(item => (
                <div key={item.id} className="bg-white rounded-3xl p-4 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-slate-100 shadow-sm relative group transition-shadow hover:shadow-md">
                  <div className="w-full sm:w-[160px] h-[160px] bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
                    <img src={item.image} alt={item.name} className="max-w-[80%] max-h-[80%] object-contain" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between h-full py-2 w-full text-center sm:text-left">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase block mb-1">{item.category}</span>
                      <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">{item.name}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border border-slate-200 rounded-full bg-white h-11 px-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-9 h-9 flex items-center justify-center text-slate-500 rounded-full hover:bg-slate-100 transition-colors">-</button>
                        <span className="w-10 text-center font-bold text-sm text-slate-900">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-9 h-9 flex items-center justify-center text-slate-500 rounded-full hover:bg-slate-100 transition-colors">+</button>
                      </div>
                      <span className="text-2xl font-extrabold text-slate-900">${item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <button onClick={() => removeItem(item.id)} className="absolute top-6 right-6 text-slate-300 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors" aria-label="Remove item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6 sticky top-28">
              {/* Coupon Code */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-5">COUPON CODE</h3>
                <div className="flex gap-2 relative">
                  <input type="text" placeholder="Enter code" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-primary focus:bg-white" />
                  <button className="bg-slate-900 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors hover:bg-primary">Apply</button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white">
                <h3 className="text-xs font-extrabold text-white/70 uppercase tracking-wider mb-6">Order Summary</h3>
                
                <div className="flex justify-between items-center mb-4 text-sm font-medium text-slate-300">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4 text-sm font-medium text-slate-300">
                  <span>Estimated Shipping</span>
                  <span className="text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded text-xs uppercase tracking-wider">Free</span>
                </div>
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-6 text-sm font-medium text-slate-300">
                  <span>Tax</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-bold text-slate-300">Total</span>
                  <span className="font-heading text-4xl font-extrabold text-white leading-none">${total.toFixed(2)}</span>
                </div>
                
                <Link href="/checkout" className="block w-full">
                  <button className="w-full bg-primary text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                    Proceed to Checkout <span>&rarr;</span>
                  </button>
                </Link>

                <div className="flex justify-center items-center gap-2 mt-6 text-xs font-bold text-slate-400 tracking-wider">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  SECURE SSL ENCRYPTION
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 flex flex-col items-center justify-center text-center shadow-sm max-w-[600px] mx-auto border border-slate-100 my-10">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
            <Link href="/catalog">
              <button className="bg-primary text-white font-bold px-8 py-4 rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        {/* Frequently Bought Together */}
        <div className="mt-24 bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 border-b border-slate-100 pb-6">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Frequently Bought Together</h2>
              <p className="text-slate-500 font-medium">Enhance your experience with these popular additions.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-colors hover:border-primary hover:text-primary hover:bg-slate-50" aria-label="Previous">&larr;</button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-colors hover:border-primary hover:text-primary hover:bg-slate-50" aria-label="Next">&rarr;</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fbtItems.map(item => (
              <div key={item.id} className="bg-slate-50 rounded-2xl p-4 flex flex-col border border-slate-100 transition-transform hover:-translate-y-1 hover:shadow-md group">
                <div className="relative h-[160px] bg-white rounded-xl mb-4 flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="max-w-[70%] max-h-[70%] object-contain" />
                  <button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 transition-colors bg-slate-50/50 backdrop-blur w-8 h-8 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  </button>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-1">{item.category}</div>
                  <h4 className="font-bold text-sm text-slate-900 leading-tight mb-4">{item.name}</h4>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-200">
                    <span className="font-extrabold text-primary">${item.price.toFixed(2)}</span>
                    <button className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center transition-transform hover:scale-110">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    </button>
                  </div>
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
