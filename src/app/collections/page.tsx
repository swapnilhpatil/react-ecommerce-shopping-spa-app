'use client';

import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryCard from "../../components/CategoryCard";

const collections = [
  { title: 'Audio Tech', image: '/images/headphones.png', link: '/catalog?category=audio' },
  { title: 'Premium Timepieces', image: '/images/watch.png', link: '/catalog?category=watches' },
  { title: 'Urban Footwear', image: '/images/sneaker.png', link: '/catalog?category=shoes' },
  { title: 'Organic Skincare', image: '/images/cat_skincare.png', link: '/catalog?category=skincare' },
  { title: 'Visionary Eyewear', image: '/images/cat_sunglasses.png', link: '/catalog?category=eyewear' },
  { title: 'Modern Wearables', image: '/images/ring_x.png', link: '/catalog?category=wearables' },
];

export default function Collections() {
  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      <Header />
      
      <section className="bg-slate-900 py-24 text-center">
        <div className="container max-w-[800px]">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Curated Collections</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-[600px] mx-auto">
            Explore our thoughtfully assembled collections. From high-fidelity audio to timeless accessories, find exactly what you&apos;re looking for.
          </p>
        </div>
      </section>

      <section className="pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map(col => (
              <CategoryCard
                key={col.title}
                title={col.title}
                image={col.image}
                link={col.link}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
