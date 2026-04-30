'use client';

import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Sustainability() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Header />

      <section className="bg-emerald-900 py-24 text-center">
        <div className="container max-w-[800px]">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Our Commitment</h1>
          <p className="text-emerald-100 text-lg md:text-xl leading-relaxed max-w-[700px] mx-auto">
            Sustainability isn&apos;t just a trend for us; it&apos;s the core of how we design, source, and deliver every product. We believe in crafting a future that is as beautiful as our designs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-[900px]">
          <div className="flex flex-col gap-16">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-emerald-50 rounded-3xl p-8 text-center flex flex-col items-center justify-center border border-emerald-100/50">
                <div className="font-heading text-4xl font-extrabold text-emerald-600 mb-2">100%</div>
                <div className="text-sm font-bold tracking-wider text-slate-600 uppercase">Recyclable Packaging</div>
              </div>
              <div className="bg-emerald-50 rounded-3xl p-8 text-center flex flex-col items-center justify-center border border-emerald-100/50">
                <div className="font-heading text-4xl font-extrabold text-emerald-600 mb-2">Zero</div>
                <div className="text-sm font-bold tracking-wider text-slate-600 uppercase">Carbon Footprint by 2030</div>
              </div>
              <div className="bg-emerald-50 rounded-3xl p-8 text-center flex flex-col items-center justify-center border border-emerald-100/50">
                <div className="font-heading text-4xl font-extrabold text-emerald-600 mb-2">85%</div>
                <div className="text-sm font-bold tracking-wider text-slate-600 uppercase">Ethically Sourced Materials</div>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6 md:pl-10">
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">Ethical Sourcing</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We carefully select our suppliers and partners, ensuring they adhere to the highest standards of fair labor practices and environmental responsibility. From the cotton fields to the assembly lines, transparency is our guiding principle.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our materials are chosen not just for their premium quality, but for their minimal impact on the planet. We are continuously exploring innovative, sustainable alternatives to traditional materials.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6 md:pl-10">
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">Conscious Design</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every product is designed with longevity in mind. We reject the culture of fast fashion and disposable electronics. Our goal is to create timeless pieces that you will cherish for years, reducing waste and overconsumption.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6 md:pl-10">
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">Giving Back</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                For every purchase made, a portion of the proceeds goes directly to global reforestation initiatives. We are committed to not just minimizing our harm, but actively repairing the environment.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
