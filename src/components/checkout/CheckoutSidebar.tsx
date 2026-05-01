import React from 'react';

/**
 * CheckoutSidebar component displays the order summary during checkout.
 * 
 * @returns {React.JSX.Element} The rendered component.
 */
const CheckoutSidebar: React.FC = () => {
  return (
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
  );
};

export default CheckoutSidebar;
