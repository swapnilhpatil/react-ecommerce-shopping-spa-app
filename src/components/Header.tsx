'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) setSearchQuery('');
  };

  const isActive = (path: string) => pathname === path || pathname?.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 h-20">
      <div className="container h-full grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <span className="font-heading font-extrabold text-xl tracking-wider text-primary uppercase">ELITECOMMERCE</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className={`${isMenuOpen ? 'absolute top-20 left-0 w-full bg-white p-6 border-b border-slate-200 shadow-lg block' : 'hidden'} lg:flex lg:items-center lg:justify-center ${isSearchOpen ? 'md:hidden' : ''}`}>
          <ul className={`list-none flex ${isMenuOpen ? 'flex-col items-start gap-4' : 'items-center gap-6 xl:gap-10'}`}>
            <li>
              <Link href="/catalog" className={`font-semibold text-sm transition-colors whitespace-nowrap px-4 py-2 rounded-xl ${isActive('/catalog') ? 'bg-indigo-50 text-primary' : 'text-slate-500 hover:text-primary hover:bg-slate-50'}`}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/new-arrivals" className={`font-semibold text-sm transition-colors whitespace-nowrap px-4 py-2 rounded-xl ${isActive('/new-arrivals') ? 'bg-indigo-50 text-primary' : 'text-slate-500 hover:text-primary hover:bg-slate-50'}`}>
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/collections" className={`font-semibold text-sm transition-colors whitespace-nowrap px-4 py-2 rounded-xl ${isActive('/collections') ? 'bg-indigo-50 text-primary' : 'text-slate-500 hover:text-primary hover:bg-slate-50'}`}>
                Collections
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className={`font-semibold text-sm transition-colors whitespace-nowrap px-4 py-2 rounded-xl ${isActive('/sustainability') ? 'bg-indigo-50 text-primary' : 'text-slate-500 hover:text-primary hover:bg-slate-50'}`}>
                Sustainability
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-2">
          <div className="relative">
            <button 
              className={`p-2 rounded-full transition-colors flex items-center justify-center ${isSearchOpen ? 'bg-slate-100 text-primary' : 'text-slate-800 hover:bg-slate-100'}`}
              aria-label="Search" 
              onClick={toggleSearch}
            >
              {isSearchOpen ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              )}
            </button>

            {isSearchOpen && (
              <div className="absolute top-full right-0 mt-3 w-[calc(100vw-40px)] max-w-[320px] bg-white rounded-xl shadow-xl p-3 flex gap-2 border border-slate-200 z-[200] animate-[slideDown_0.2s_ease-out_forwards] origin-top-right">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary bg-slate-50 focus:bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-primary hover:bg-[#3b28cc] text-white border-none rounded-lg px-5 font-bold text-sm cursor-pointer transition-colors shadow-sm hover:shadow-md">
                  Search
                </button>
              </div>
            )}
          </div>

          <div className={`flex items-center gap-2 ${isSearchOpen ? 'hidden md:flex' : ''}`}>
            <Link href="/favorites" className={`p-2 rounded-full transition-colors flex items-center justify-center ${isActive('/favorites') ? 'bg-slate-100 text-primary' : 'text-slate-800 hover:bg-slate-100'}`} aria-label="Favorites">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </Link>
            <Link href="/cart" className={`relative p-2 rounded-full transition-colors flex items-center justify-center ${isActive('/cart') ? 'bg-slate-100 text-primary' : 'text-slate-800 hover:bg-slate-100'}`}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white font-extrabold">2</span>
            </Link>
            <Link href="/profile" className={`flex items-center gap-3 px-4 py-2 bg-white rounded-full border transition-colors whitespace-nowrap ml-2 ${isActive('/profile') ? 'border-primary bg-indigo-50' : 'border-slate-200 hover:border-primary hover:bg-slate-50'}`}>
              <div className="w-7 h-7 bg-slate-800 text-white rounded-full flex items-center justify-center">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              </div>
              <span className="text-[13px] font-bold text-slate-800 hidden md:inline">Account</span>
            </Link>
          </div>

          <button className="lg:hidden text-slate-800 p-2 ml-1 rounded-full hover:bg-slate-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
