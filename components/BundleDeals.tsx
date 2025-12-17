
import React from 'react';
import { BUNDLES, PRODUCTS } from '../constants';
import { Product, Category } from '../types';

interface BundleDealsProps {
  onSelectProduct: (product: Product, category?: Category) => void;
}

const BundleDeals: React.FC<BundleDealsProps> = ({ onSelectProduct }) => {
    const hydratedBundles = BUNDLES.map(bundle => {
        const products = bundle.productIds.map(id => PRODUCTS.find(p => p.id === id)).filter((p): p is Product => !!p);
        const originalTotal = products.reduce((acc, p) => acc + (p.originalPrice || p.price), 0);
        return { ...bundle, products, originalTotal };
    });

    return (
        <section className="py-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Bundle & Save</h2>
            <div className="space-y-12">
                {hydratedBundles.map(bundle => (
                    <div key={bundle.id} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900">{bundle.title}</h3>
                        
                        {bundle.type === 'Look' && (
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {bundle.products.map(product => (
                                    <div key={product.id} className="cursor-pointer group" onClick={() => onSelectProduct(product)}>
                                        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border">
                                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:opacity-75" loading="lazy" decoding="async" width="800" height="800" />
                                        </div>
                                        <h4 className="mt-2 text-sm font-medium text-gray-700 truncate">{product.name}</h4>
                                        <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                                    </div>
                                ))}
                                </div>
                                <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                                    <p className="text-lg font-medium text-gray-600">Bundle Price</p>
                                    <p className="text-4xl font-extrabold text-indigo-600 my-2">${bundle.bundlePrice?.toFixed(2)}</p>
                                    <p className="text-md text-gray-500 line-through">Total: ${bundle.originalTotal.toFixed(2)}</p>
                                    <button className="mt-6 w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors">
                                        Add Bundle to Cart
                                    </button>
                                </div>
                            </div>
                        )}

                        {bundle.type === 'BOGO' && bundle.products[0] && (
                            <div className="mt-4 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0 w-48 h-48">
                                    <img src={bundle.products[0].images[0]} alt={bundle.products[0].name} className="w-full h-full object-cover rounded-lg" loading="lazy" decoding="async" width="192" height="192" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">{bundle.products[0].name}</p>
                                    <p className="text-red-600 font-bold text-3xl mt-2">Buy One, Get One FREE!</p>
                                    <p className="mt-2 text-gray-600">Add two of this item to your cart and the discount will be applied automatically at checkout.</p>
                                    <button onClick={() => onSelectProduct(bundle.products[0])} className="mt-4 bg-indigo-600 text-white font-bold py-2 px-5 rounded-md hover:bg-indigo-700 transition-colors">
                                        View Product
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BundleDeals;
