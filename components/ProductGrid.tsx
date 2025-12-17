
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import FilterIcon from './icons/FilterIcon';

interface ProductGridProps {
  products: Product[];
  sortOrder: string;
  setSortOrder: (order: string) => void;
  onOpenFilters: () => void;
  onSelectProduct: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, sortOrder, setSortOrder, onOpenFilters, onSelectProduct }) => {
  return (
    <div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products</h1>
            <div className="flex items-center">
                <select
                    id="sort"
                    name="sort"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="newest">Newest</option>
                    <option value="rating">Best Rating</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
                <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={onOpenFilters}
                >
                    <span className="sr-only">Filters</span>
                    <FilterIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </div>

        <section className="pt-6">
            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24">
                    <h3 className="text-2xl font-semibold text-gray-900">No products found</h3>
                    <p className="mt-2 text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                </div>
            )}
        </section>
    </div>
  );
};

export default ProductGrid;
