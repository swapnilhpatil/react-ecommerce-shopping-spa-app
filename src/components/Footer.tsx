import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-slate-500 text-sm mt-auto">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 pb-12 border-b border-slate-200">
          <div className="max-w-[320px]">
            <span className="font-heading font-extrabold text-xl tracking-wider text-slate-800 uppercase block mb-4">ELITECOMMERCE</span>
            <p className="leading-relaxed mb-6">
              The destination for premium curated lifestyle products. Crafting excellence in every interaction since 2018.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-200 hover:bg-primary hover:text-white transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 rounded-full bg-slate-200 hover:bg-primary hover:text-white transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 rounded-full bg-slate-200 hover:bg-primary hover:text-white transition-colors cursor-pointer"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full lg:w-auto lg:gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-bold text-slate-800 tracking-wider text-xs">SHOP</h4>
              <ul className="flex flex-col gap-3 list-none">
                <li><Link href="/catalog" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                <li><Link href="/catalog?category=electronics" className="hover:text-primary transition-colors">Electronics</Link></li>
                <li><Link href="/catalog?category=fashion" className="hover:text-primary transition-colors">Fashion</Link></li>
                <li><Link href="/catalog?category=home" className="hover:text-primary transition-colors">Home & Living</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-bold text-slate-800 tracking-wider text-xs">SUPPORT</h4>
              <ul className="flex flex-col gap-3 list-none">
                <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-primary transition-colors">Returns & Refunds</Link></li>
                <li><Link href="/track" className="hover:text-primary transition-colors">Track Order</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-bold text-slate-800 tracking-wider text-xs">COMPANY</h4>
              <ul className="flex flex-col gap-3 list-none">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p>&copy; 2026 ELITE COMMERCE. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
