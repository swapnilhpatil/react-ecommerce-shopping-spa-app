import React from 'react';

interface CheckoutReviewProps {
  onNext: () => void;
  onBack: () => void;
  setStep: (step: number) => void;
}

/**
 * CheckoutReview component for reviewing the order before final placement.
 * 
 * @param {CheckoutReviewProps} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
const CheckoutReview: React.FC<CheckoutReviewProps> = ({ onNext, onBack, setStep }) => {
  return (
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
        <button className="text-slate-500 font-bold text-sm tracking-wider hover:text-slate-900 transition-colors" onClick={onBack}>BACK</button>
        <button className="bg-primary text-white font-bold px-10 py-4 rounded-full tracking-wider text-sm transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30" onClick={onNext}>PLACE ORDER</button>
      </div>
    </div>
  );
};

export default CheckoutReview;
