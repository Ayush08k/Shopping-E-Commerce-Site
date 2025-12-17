
import React, { useState } from 'react';
import { Product, Category } from '../types';
import Breadcrumbs from '../components/Breadcrumbs';
import ImageGallery from '../components/ImageGallery';
import UserReviews from '../components/UserReviews';
import Accordion from '../components/Accordion';

interface ProductDetailPageProps {
  product: Product;
  category: Category;
  onBack: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, category, onBack }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors.find(c => c.inStock));
  const [selectedSize, setSelectedSize] = useState(product.sizes.find(s => s.inStock));

  const goHome = () => window.location.reload();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs paths={[
          { name: 'Home', isCurrent: false, action: goHome },
          { name: category.name, isCurrent: false, action: onBack },
          { name: product.name, isCurrent: true, action: () => {} },
      ]} />

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <ImageGallery images={product.images} />

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <div className="flex items-baseline gap-2">
                <p className="text-3xl tracking-tight text-gray-900">${product.price.toFixed(2)}</p>
                {product.originalPrice && (
                    <p className="text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                )}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-3">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-5 w-5 flex-shrink-0 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="sr-only">{product.rating} out of 5 stars</p>
              <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{product.reviews.length} reviews</a>
            </div>
          </div>
          
          <div className="mt-6">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="flex items-center space-x-3 mt-2">
                {product.colors.map((color) => (
                  <button key={color.name} onClick={() => color.inStock && setSelectedColor(color)}
                    className={`relative h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center ${!color.inStock ? 'cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="sr-only">{color.name}</span>
                    {selectedColor?.name === color.name && <span className="absolute h-10 w-10 rounded-full border-2 border-indigo-500" />}
                    {!color.inStock && <span className="absolute h-full w-px bg-gray-400 transform rotate-45" />}
                    {!color.inStock && <span className="absolute h-full w-px bg-gray-400 transform -rotate-45" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mt-2">
                    {product.sizes.map((size) => (
                        <button key={size.name} onClick={() => size.inStock && setSelectedSize(size)}
                            className={`relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none 
                            ${!size.inStock ? 'bg-gray-50 text-gray-200 cursor-not-allowed' : 'bg-white text-gray-900'} 
                            ${selectedSize?.name === size.name ? 'ring-2 ring-indigo-500' : 'border-gray-300'}`}
                        >
                            {size.name}
                            {!size.inStock && <span className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"><svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor"><line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke"></line></svg></span>}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-10 hidden sm:flex flex-col sm:flex-row sm:space-x-4">
                <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform duration-200 hover:scale-105 active:scale-95">
                    Add to cart
                </button>
                <button type="button" className="w-full mt-4 sm:mt-0 bg-indigo-50 border border-indigo-200 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform duration-200 hover:scale-105 active:scale-95">
                    Buy Now
                </button>
            </div>
            
             {/* Sticky buttons for mobile */}
             <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 sm:hidden flex space-x-4 z-20">
                <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 transition-transform duration-200 hover:scale-105 active:scale-95">
                    Add to cart
                </button>
                <button type="button" className="w-full bg-indigo-50 border border-indigo-200 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 transition-transform duration-200 hover:scale-105 active:scale-95">
                    Buy Now
                </button>
            </div>

          </div>
          
            {/* Details Accordion */}
            <section className="mt-12">
                <Accordion title="Description">
                    <p className="text-gray-600">{product.description}</p>
                </Accordion>
                <Accordion title="Material & Care">
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {product.care.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </Accordion>
                <Accordion title="Size & Fit">
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {product.fit.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </Accordion>
            </section>
        </div>
      </div>
        
      {/* Reviews Section */}
      <div id="reviews" className="mt-16 mb-20 sm:mb-0">
        <UserReviews reviews={product.reviews} averageRating={product.rating} />
      </div>
    </div>
  );
};

export default ProductDetailPage;