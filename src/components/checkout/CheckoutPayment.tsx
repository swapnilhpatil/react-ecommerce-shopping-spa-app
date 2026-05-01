import React from 'react';

interface CheckoutPaymentProps {
  onNext: () => void;
  onBack: () => void;
}

/**
 * CheckoutPayment component for entering payment information.
 * 
 * @param {CheckoutPaymentProps} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
const CheckoutPayment: React.FC<CheckoutPaymentProps> = ({ onNext, onBack }) => {
  return (
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
        <button className="text-slate-500 font-bold text-sm tracking-wider hover:text-slate-900 transition-colors" onClick={onBack}>BACK</button>
        <button className="bg-slate-900 text-white font-bold px-10 py-4 rounded-full tracking-wider text-sm transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20" onClick={onNext}>REVIEW ORDER</button>
      </div>
    </div>
  );
};

export default CheckoutPayment;
