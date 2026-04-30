'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen pt-24 pb-20">
        <div className="container max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {/* Steps indicator */}
          <div className="flex items-center justify-between bg-white rounded-full p-2 mb-4 border border-slate-200">
            <div className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all ${step >= 1 ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-white text-slate-900' : 'bg-slate-100 text-slate-400'}`}>1</span> Address
            </div>
            <div className={`flex-1 h-0.5 mx-2 transition-colors ${step >= 2 ? 'bg-slate-900' : 'bg-slate-100'}`}></div>
            <div className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all ${step >= 2 ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-white text-slate-900' : 'bg-slate-100 text-slate-400'}`}>2</span> Payment
            </div>
            <div className={`flex-1 h-0.5 mx-2 transition-colors ${step >= 3 ? 'bg-slate-900' : 'bg-slate-100'}`}></div>
            <div className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all ${step >= 3 ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-white text-slate-900' : 'bg-slate-100 text-slate-400'}`}>3</span> Review
            </div>
          </div>

          {step === 1 && (
            <div className="animate-[slideDown_0.3s_ease-out]">
              {/* Shipping Address Card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm mb-6">
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-6">Shipping Address</h2>
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Full Name</label>
                  <input type="text" placeholder="e.g. Alexander Hamilton" className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary" />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Street Address</label>
                  <input type="text" placeholder="123 Elite Way, Apt 4B" className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">City</label>
                    <input type="text" placeholder="New York" className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">State</label>
                    <select className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary bg-white appearance-none"><option>NY</option></select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Zip Code</label>
                    <input type="text" placeholder="10001" className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="saveAddr" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary accent-primary" />
                  <label htmlFor="saveAddr" className="text-sm font-medium text-slate-600 cursor-pointer select-none">Save this address for future purchases</label>
                </div>
              </div>

              {/* Shipping Method Card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm mb-8">
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-6">Shipping Method</h2>
                
                <label className="flex justify-between items-center p-6 border-2 border-primary bg-primary/5 rounded-2xl cursor-pointer mb-4">
                  <div className="flex items-center gap-4">
                    <input type="radio" name="shipping" defaultChecked className="w-5 h-5 accent-primary cursor-pointer" />
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 mb-1">Standard Delivery</span>
                      <span className="text-sm text-slate-500 font-medium">3-5 Business Days</span>
                    </div>
                  </div>
                  <span className="font-extrabold text-primary">FREE</span>
                </label>
                
                <label className="flex justify-between items-center p-6 border-2 border-slate-100 rounded-2xl cursor-pointer transition-colors hover:border-slate-300">
                  <div className="flex items-center gap-4">
                    <input type="radio" name="shipping" className="w-5 h-5 accent-primary cursor-pointer" />
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 mb-1 flex items-center gap-2">Express Shipping <span className="text-[10px] bg-primary text-white px-1.5 py-0.5 rounded tracking-wider font-bold">POPULAR</span></span>
                      <span className="text-sm text-slate-500 font-medium">1-2 Business Days</span>
                    </div>
                  </div>
                  <span className="font-extrabold text-slate-900">$14.99</span>
                </label>
              </div>

              <div className="flex flex-col items-end gap-3 border-t border-slate-200 pt-8">
                <button className="bg-slate-900 text-white font-bold px-10 py-4 rounded-full tracking-wider text-sm transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20" onClick={() => setStep(2)}>CONTINUE TO PAYMENT</button>
                <span className="text-sm text-slate-500">You can review the order before finalizing.</span>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-[slideDown_0.3s_ease-out]">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm mb-8">
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-6">Payment Method</h2>
                
                <label className="flex justify-between items-center p-6 border-2 border-primary bg-primary/5 rounded-2xl cursor-pointer mb-6">
                  <div className="flex items-center gap-4">
                    <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-primary cursor-pointer" />
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900">Credit / Debit Card</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-6 rounded bg-[#1a1f71] flex items-center justify-center relative overflow-hidden"><div className="w-4 h-4 rounded-full border-2 border-white/50 absolute -left-1"></div><div className="w-4 h-4 rounded-full border-2 border-white/50 absolute -right-1"></div></div>
                    <div className="w-10 h-6 rounded bg-[#eb001b] flex items-center justify-center relative overflow-hidden"><div className="w-5 h-5 rounded-full bg-[#f79e1b] absolute -right-1 mix-blend-screen opacity-80"></div></div>
                  </div>
                </label>
                
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
                  <div className="flex flex-col gap-2 mb-5">
                    <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary" />
                  </div>
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">CVV</label>
                      <input type="text" placeholder="123" className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">Name on Card</label>
                    <input type="text" placeholder="Alexander Hamilton" className="p-4 border border-slate-200 rounded-xl text-base outline-none transition-colors focus:border-primary" />
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">Billing Address</h3>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="sameAddr" defaultChecked className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary accent-primary cursor-pointer" />
                  <label htmlFor="sameAddr" className="text-sm font-medium text-slate-600 cursor-pointer select-none">Same as shipping address</label>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-slate-200 pt-8">
                <button className="text-slate-500 font-bold text-sm tracking-wider hover:text-slate-900 transition-colors" onClick={() => setStep(1)}>BACK</button>
                <button className="bg-slate-900 text-white font-bold px-10 py-4 rounded-full tracking-wider text-sm transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20" onClick={() => setStep(3)}>REVIEW ORDER</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-[slideDown_0.3s_ease-out]">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm mb-8">
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-8">Review Your Order</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-heading text-lg font-bold text-slate-900">Shipping Address</h3>
                    <button className="text-primary font-bold text-sm hover:underline" onClick={() => setStep(1)}>Edit</button>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Alexander Hamilton<br/>
                    123 Elite Way, Apt 4B<br/>
                    New York, NY 10001
                  </p>
                </div>

                <div className="h-px bg-slate-100 w-full my-8"></div>

                <div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-heading text-lg font-bold text-slate-900">Payment Method</h3>
                    <button className="text-primary font-bold text-sm hover:underline" onClick={() => setStep(2)}>Edit</button>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Credit Card ending in 4242<br/>
                    Billing address same as shipping
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-slate-200 pt-8">
                <button className="text-slate-500 font-bold text-sm tracking-wider hover:text-slate-900 transition-colors" onClick={() => setStep(2)}>BACK</button>
                <button className="bg-primary text-white font-bold px-10 py-4 rounded-full tracking-wider text-sm transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30" onClick={() => alert('Order Placed!')}>PLACE ORDER</button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="sticky top-24 hidden lg:block">
          <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm overflow-hidden mb-6">
            <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="font-heading text-xl font-bold text-slate-900">Your Order</h2>
              <span className="text-[11px] font-bold tracking-wider text-slate-500 bg-white px-2 py-1 rounded">2 ITEMS</span>
            </div>
            
            <div className="p-8 pb-0">
              {/* Item 1 */}
              <div className="flex gap-4 border-b border-slate-100 pb-6 mb-6">
                <div className="w-20 h-20 bg-slate-50 rounded-xl flex items-center justify-center p-2 shrink-0">
                  <img src="/images/sneaker.png" alt="Sneaker" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                   <h4 className="font-bold text-slate-900 text-sm">Air Max Elite Edition</h4>
                   <p className="text-xs text-slate-500">NIKE • 10.5 • Red</p>
                   <div className="flex justify-between items-center mt-2">
                     <span className="text-xs font-bold text-slate-400">Qty 1</span>
                     <span className="font-bold text-slate-900">$189.00</span>
                   </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex gap-4 border-b border-slate-100 pb-6 mb-6">
                <div className="w-20 h-20 bg-slate-50 rounded-xl flex items-center justify-center p-2 shrink-0">
                  <img src="/images/mens.png" alt="Bag" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                   <h4 className="font-bold text-slate-900 text-sm">Modular Commuter Pack</h4>
                   <p className="text-xs text-slate-500">TECH GEAR • Black</p>
                   <div className="flex justify-between items-center mt-2">
                     <span className="text-xs font-bold text-slate-400">Qty 1</span>
                     <span className="font-bold text-slate-900">$125.00</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-6 flex flex-col gap-3 text-sm border-b border-slate-100">
              <div className="flex justify-between text-slate-500 font-medium"><span>Subtotal</span><span className="text-slate-900">$314.00</span></div>
              <div className="flex justify-between text-slate-500 font-medium"><span>Shipping</span><span className="text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded text-xs">Calculated next step</span></div>
              <div className="flex justify-between text-slate-500 font-medium"><span>Estimated Tax</span><span className="text-slate-900">$27.87</span></div>
            </div>

            <div className="px-8 py-6 bg-slate-50 flex justify-between items-end border-b border-slate-100">
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">TOTAL TO PAY</span>
              <span className="font-heading text-3xl font-extrabold text-slate-900 leading-none">$341.87</span>
            </div>

            <div className="p-8">
              <label className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-3">HAVE A PROMO CODE?</label>
              <div className="flex gap-2">
                 <input type="text" placeholder="Enter code" className="flex-1 p-3 border border-slate-200 rounded-lg text-sm outline-none transition-colors focus:border-primary" />
                 <button className="bg-slate-200 text-slate-700 font-bold text-xs tracking-wider px-5 rounded-lg hover:bg-slate-300 transition-colors">APPLY</button>
              </div>
            </div>
            
            <div className="bg-slate-900 text-white flex justify-center items-center gap-4 py-4 text-[10px] font-bold tracking-[0.15em] border-t border-slate-800">
              <span>SECURE</span> <span className="w-1 h-1 bg-white/30 rounded-full"></span> <span>AUTHENTIC</span> <span className="w-1 h-1 bg-white/30 rounded-full"></span> <span>GUARANTEED</span>
            </div>
          </div>
          
          <div className="flex justify-between px-2 text-[10px] font-bold tracking-wider text-slate-400">
            <span>LIVE SUPPORT AVAILABLE</span>
            <span>30-DAY POLICY</span>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
