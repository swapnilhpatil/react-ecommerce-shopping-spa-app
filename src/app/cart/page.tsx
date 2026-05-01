'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_CART_ITEMS, MOCK_FBT_ITEMS } from '../../constants/products';
import { Product } from '../../types/product';
import { TrashIcon, LockIcon, PlusIcon, CloseIcon, HeartIcon, CartIcon } from '../../components/icons';

/**
 * Cart page for viewing and managing items before checkout.
 * 
 * @returns {React.JSX.Element} The rendered Cart page.
 */
export default function Cart() {
  const [items, setItems] = useState<Product[]>(MOCK_CART_ITEMS);
  const fbtItems = MOCK_FBT_ITEMS;

  const updateQuantity = (id: string | number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) } : item
    ));
  };

  const removeItem = (id: string | number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const tax = subtotal * 0.075; // 7.5% approx to match $62.78 for $837
  const total = subtotal + tax;

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Header />
      
      <div className="container max-w-[1200px] py-12 md:py-20">
        <div className="mb-8">
          <h1 className="text-lg font-semibold text-slate-700 mb-1">Your Shopping Bag</h1>
          <p className="text-slate-500 text-sm">There are {items.length} items in your cart.</p>
        </div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
            {/* Cart Items List */}
            <div className="flex flex-col gap-4">
              {items.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-4 border border-slate-100 shadow-sm relative group">
                  <div className="w-[100px] h-[100px] bg-[#0a0a0a] rounded-xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="pr-8">
                      <span className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase block mb-1">{item.category}</span>
                      <h3 className="font-semibold text-[14px] text-slate-700 line-clamp-1">{item.name}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center rounded-lg bg-indigo-50/80 px-1 py-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-primary font-medium hover:bg-white rounded-md transition-colors">-</button>
                        <span className="font-bold text-primary text-xs w-6 text-center">{item.quantity || 1}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-primary font-medium hover:bg-white rounded-md transition-colors">+</button>
                      </div>
                      <span className="text-sm font-bold text-primary">${item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <button onClick={() => removeItem(item.id as string)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors" aria-label="Remove item">
                    <TrashIcon size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6 sticky top-28">
              {/* Coupon Code */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">COUPON CODE</h3>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter code" className="flex-1 bg-indigo-50/50 border-none rounded-xl px-4 py-3 text-sm font-medium outline-none text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 transition-all" />
                  <button className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors hover:bg-primary/90">Apply</button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-6">Order Summary</h3>
                
                <div className="flex justify-between items-center mb-4 text-sm font-medium text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-slate-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4 text-sm font-medium text-slate-500">
                  <span>Estimated Shipping</span>
                  <span className="text-emerald-500 font-bold">Free</span>
                </div>
                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-6 text-sm font-medium text-slate-500">
                  <span>Tax</span>
                  <span className="text-slate-800">${tax.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-end mb-6">
                  <span className="text-sm font-medium text-slate-500">Total</span>
                  <span className="text-sm font-bold text-primary">${total.toFixed(2)}</span>
                </div>
                
                <Link href="/checkout" className="block w-full">
                  <button className="w-full bg-primary text-white font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 hover:shadow-md">
                    Proceed to Checkout <span>&rarr;</span>
                  </button>
                </Link>

                <div className="flex justify-center items-center gap-2 mt-4 text-[11px] font-medium text-slate-400">
                  <LockIcon size={12} />
                  Secure SSL Encryption
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
        <div className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-1">Frequently Bought Together</h2>
              <p className="text-slate-500 text-sm">Enhance your experience with these popular additions.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-colors hover:border-primary hover:text-primary bg-white shadow-sm" aria-label="Previous">
                &larr;
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-colors hover:border-primary hover:text-primary bg-white shadow-sm" aria-label="Next">
                &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fbtItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md group">
                <div className="relative h-[200px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <button className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors bg-white shadow-md w-8 h-8 rounded-full flex items-center justify-center z-20">
                    <HeartIcon size={16} />
                  </button>
                </div>
                <div className="p-5 flex flex-col flex-1 bg-white">
                  <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-1">{item.category}</div>
                  <h4 className="font-semibold text-[14px] text-slate-700 leading-tight mb-4 line-clamp-1">{item.name}</h4>
                  <div className="flex justify-between items-end mt-auto">
                    <span className="font-bold text-sm text-primary">${item.price.toFixed(2)}</span>
                    <button className="w-8 h-8 bg-indigo-50 text-primary rounded-lg flex items-center justify-center transition-colors hover:bg-primary hover:text-white">
                      <CartIcon size={14} />
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
