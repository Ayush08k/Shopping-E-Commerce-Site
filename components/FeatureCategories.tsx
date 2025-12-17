
import React from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';

interface FeatureCategoriesProps {
  onSelectCategory: (category: Category) => void;
}

const FeatureCategories: React.FC<FeatureCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Shop by Category</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections and find exactly what you're looking for.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CATEGORIES.map((category) => (
            <div 
              key={category.id} 
              className="group relative aspect-w-3 aspect-h-4 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => onSelectCategory(category)}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width="600"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCategories;
