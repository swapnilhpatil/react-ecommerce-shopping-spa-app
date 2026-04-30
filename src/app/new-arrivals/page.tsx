'use client';

import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

const newProducts = [
  { id: 'n1', name: 'Eclipse Smart Glasses', price: 199, image: '/images/cat_sunglasses.png', category: 'WEARABLES' },
  { id: 'n2', name: 'Aero Boost Sneakers', price: 145, image: '/images/sneaker.png', category: 'FOOTWEAR' },
  { id: 'n3', name: 'Sonic Max Headphones', price: 299, image: '/images/headphones.png', category: 'AUDIO' },
  { id: 'n4', name: 'Titanium Chronograph', price: 349, image: '/images/watch.png', category: 'ACCESSORIES' },
  { id: 'n5', name: 'Vita Hydration Serum', price: 48, image: '/images/cat_skincare.png', category: 'BEAUTY' },
  { id: 'n6', name: 'Pro Charge Station', price: 89, image: '/images/charge_stand.png', category: 'TECH' },
  { id: 'n7', name: 'Zenith Smart Ring', price: 249, image: '/images/ring_x.png', category: 'WEARABLES' },
  { id: 'n8', name: 'Acoustic Pods Pro', price: 159, image: '/images/headphones.png', category: 'AUDIO' },
];

export default function NewArrivals() {
  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      <Header />
      
      <section className="bg-primary py-24 text-center">
        <div className="container max-w-[800px]">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">New Arrivals</h1>
          <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-[600px] mx-auto">
            Discover the latest additions to our curated collection. Fresh styles, cutting-edge tech, and premium essentials just landed.
          </p>
        </div>
      </section>

      <section className="pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
