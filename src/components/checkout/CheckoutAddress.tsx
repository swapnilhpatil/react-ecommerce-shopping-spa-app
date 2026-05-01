import React from 'react';

interface CheckoutAddressProps {
  onNext: () => void;
}

/**
 * CheckoutAddress component for entering shipping information.
 * 
 * @param {CheckoutAddressProps} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
const CheckoutAddress: React.FC<CheckoutAddressProps> = ({ onNext }) => {
  return (
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
        <button className="bg-slate-900 text-white font-bold px-10 py-4 rounded-full tracking-wider text-sm transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20" onClick={onNext}>CONTINUE TO PAYMENT</button>
        <span className="text-sm text-slate-500">You can review the order before finalizing.</span>
      </div>
    </div>
  );
};

export default CheckoutAddress;
