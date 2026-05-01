'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import { MOCK_FAVORITES } from '../../constants/products';
import { Product } from '../../types/product';

/**
 * Favorites page displaying the user's saved items.
 * 
 * @returns {React.JSX.Element} The rendered Favorites page.
 */
export default function Favorites() {
  const [favorites, setFavorites] = useState<Product[]>(MOCK_FAVORITES);

  return (
    <main className="bg-slate-50 min-h-screen flex flex-col">
      <Header />
      
      <div className="container flex-1 py-12 md:py-20">
        <div className="mb-12 border-b border-slate-200 pb-8 text-center md:text-left">
          <h1 className="font-heading text-4xl font-extrabold text-slate-900 mb-2">Your Favorites</h1>
          <p className="text-slate-500 font-medium">{favorites.length} items saved</p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((product) => (
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
        ) : (
          <div className="bg-white rounded-3xl p-16 flex flex-col items-center justify-center text-center shadow-sm max-w-[600px] mx-auto border border-slate-100">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4">You haven&apos;t saved any favorites yet.</h2>
            <p className="text-slate-500 mb-8 max-w-[400px]">Start browsing our collection and click the heart icon to save items for later.</p>
            <Link href="/catalog" className="bg-primary text-white font-bold px-8 py-4 rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
              Explore Products
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
