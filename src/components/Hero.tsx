'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="container mt-4 mb-16">
      <div className="relative min-h-[500px] md:min-h-[600px] h-[70vh] flex items-center bg-slate-900 bg-[url('/images/hero_bg.png')] bg-cover bg-center rounded-[2rem] overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-0"></div>
        <div className="relative z-10 w-full flex items-center h-full px-8 md:px-16">
          <div className="max-w-[700px]">
            <div className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-[0.1em] px-4 py-2 rounded-full mb-6">
              SEASONAL CLEARANCE
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] font-extrabold tracking-tight mb-6">
              <span className="text-white">Elevate Your Lifestyle</span> <br />
              <span className="text-white">With </span><span className="text-[#818cf8]">Elite Collections</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-10 max-w-[500px]">
              Experience the pinnacle of luxury commerce. Up to 40% off on selected electronics and designer fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-base transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30">
                Shop Now
              </button>
              <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
