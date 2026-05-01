'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import CheckoutAddress from '../../components/checkout/CheckoutAddress';
import CheckoutPayment from '../../components/checkout/CheckoutPayment';
import CheckoutReview from '../../components/checkout/CheckoutReview';
import CheckoutSidebar from '../../components/checkout/CheckoutSidebar';

/**
 * Checkout page component orchestrating the checkout flow.
 * 
 * @returns {React.JSX.Element} The rendered Checkout page.
 */
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

            {step === 1 && <CheckoutAddress onNext={() => setStep(2)} />}
            {step === 2 && <CheckoutPayment onNext={() => setStep(3)} onBack={() => setStep(1)} />}
            {step === 3 && <CheckoutReview onNext={() => alert('Order Placed!')} onBack={() => setStep(2)} setStep={setStep} />}
          </div>

          <CheckoutSidebar />
        </div>
      </main>
    </>
  );
}
