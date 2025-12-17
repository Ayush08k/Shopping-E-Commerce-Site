
import React, { useState } from 'react';
import { Product } from '../types';
import EyeIcon from './icons/EyeIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import HeartIcon from './icons/HeartIcon';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const { name, category, price, originalPrice, images, rating } = product;
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer" onClick={() => onSelectProduct(product)}>
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-110"
          loading="lazy"
          decoding="async"
          width="800"
          height="800"
        />
        {originalPrice && (
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">SALE</div>
        )}
        <button 
          onClick={(e) => {
              e.stopPropagation(); // Prevent card click event
              setIsWishlisted(!isWishlisted)
            }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full text-gray-500 hover:text-red-500 transition-all duration-200 z-10 hover:scale-110 active:scale-100"
          aria-label="Add to wishlist"
        >
          <HeartIcon className={`h-6 w-6 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-500'}`} />
        </button>
      </div>
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
        <button className="bg-white p-3 rounded-full text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100 hover:scale-110 active:scale-100">
          <EyeIcon className="h-6 w-6" />
        </button>
        <button className="bg-white p-3 rounded-full text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200 hover:scale-110 active:scale-100">
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4">
        <h4 className="text-sm text-gray-500">{category}</h4>
        <h3 className="mt-1 text-lg font-semibold text-gray-900 truncate">
          {name}
        </h3>
        <div className="mt-2 flex items-baseline gap-2">
            <p className="text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
            {originalPrice && (
                <p className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</p>
            )}
        </div>
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`h-5 w-5 flex-shrink-0 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="ml-2 text-sm text-gray-500">{rating} stars</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;