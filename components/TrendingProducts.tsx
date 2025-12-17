
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface TrendingProductsProps {
  onSelectProduct: (product: Product) => void;
}

const TrendingProducts: React.FC<TrendingProductsProps> = ({ onSelectProduct }) => {
  // Get top 8 rated products for the trending section
  const trendingProducts = [...PRODUCTS]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Trending Now</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Check out our best-sellers and customer favorites.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <a href="#" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-200 hover:bg-indigo-700 transform hover:scale-105 active:scale-95">
                View All Products
            </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;