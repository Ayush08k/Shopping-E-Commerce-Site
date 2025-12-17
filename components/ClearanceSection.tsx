
import React, { useMemo } from 'react';
import { Product, Category } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface ClearanceSectionProps {
  onSelectProduct: (product: Product, category?: Category) => void;
}

const ClearanceSection: React.FC<ClearanceSectionProps> = ({ onSelectProduct }) => {
    const clearanceItems = useMemo(() => {
        return PRODUCTS.filter(p => 
            p.originalPrice && ((p.originalPrice - p.price) / p.originalPrice) > 0.5
        );
    }, []);

    if (clearanceItems.length === 0) {
        return null;
    }

    return (
        <section className="py-16">
            <div className="text-left mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Clearance Rack</h2>
                <p className="mt-2 text-lg text-gray-600">
                    Huge savings! These items are over 50% off.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {clearanceItems.map((product) => (
                    <ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />
                ))}
            </div>
        </section>
    );
};

export default ClearanceSection;
