'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] h-[80vh] flex items-center bg-slate-900 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/60 z-0"></div>
      <div className="container relative z-10 w-full flex items-center h-full">
        <div className="max-w-[700px]">
          <div className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-[0.1em] px-3.5 py-1.5 rounded-full mb-6">
            SEASONAL CLEARANCE
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] font-extrabold text-white mb-6">
            Elevate Your Lifestyle <br />
            With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Elite Collections</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-10 max-w-[500px]">
            Experience the pinnacle of luxury commerce. Up to 40% off on selected electronics and designer fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-base transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl shadow-white/20">
              Shop Now
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
