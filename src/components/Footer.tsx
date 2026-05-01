import React from 'react';
import Link from 'next/link';

/**
 * Footer component for the application, displaying links and copyright info.
 * 
 * @returns {React.JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-slate-500 text-sm mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-100">
          
          <div className="flex flex-col gap-4 pr-8">
            <span className="font-heading font-extrabold text-xl tracking-wider text-primary uppercase block">ELITE COMMERCE</span>
            <p className="leading-relaxed text-slate-500 font-medium">
              Elevating everyday life through precision engineering and minimalist design since 2012.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-heading font-bold text-slate-900 tracking-wider text-xs uppercase">COMPANY</h4>
            <ul className="flex flex-col gap-4 list-none">
              <li><Link href="/about" className="hover:text-primary font-medium transition-colors">About Us</Link></li>
              <li><Link href="/sustainability" className="hover:text-primary font-medium transition-colors">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-primary font-medium transition-colors">Careers</Link></li>
              <li><Link href="/stores" className="hover:text-primary font-medium transition-colors">Store Locator</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-heading font-bold text-slate-900 tracking-wider text-xs uppercase">SUPPORT</h4>
            <ul className="flex flex-col gap-4 list-none">
              <li><Link href="/contact" className="hover:text-primary font-medium transition-colors">Contact Support</Link></li>
              <li><Link href="/warranty" className="hover:text-primary font-medium transition-colors">Warranty Info</Link></li>
              <li><Link href="/returns" className="hover:text-primary font-medium transition-colors">Returns Policy</Link></li>
              <li><Link href="/faq" className="hover:text-primary font-medium transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-heading font-bold text-slate-900 tracking-wider text-xs uppercase">JOIN OUR NEWSLETTER</h4>
            <p className="leading-relaxed text-slate-500 font-medium mb-1">
              Get early access to drops and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-indigo-50/50 border border-indigo-100/50 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <button type="submit" className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs font-medium text-slate-400">
          <p>&copy; 2026 ELITE COMMERCE. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-600 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
