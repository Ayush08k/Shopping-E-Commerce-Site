import React from 'react';
import { Product, Category } from '../types';
import PromoBanners from '../components/PromoBanners';
import ClearanceSection from '../components/ClearanceSection';
import BundleDeals from '../components/BundleDeals';

interface OffersPageProps {
  onSelectProduct: (product: Product, category?: Category) => void;
}

const OffersPage: React.FC<OffersPageProps> = ({ onSelectProduct }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Special Offers & Deals</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Don't miss out on our exclusive promotions, bundles, and clearance items.
        </p>
      </div>

      <PromoBanners />
      <ClearanceSection onSelectProduct={onSelectProduct} />
      <BundleDeals onSelectProduct={onSelectProduct} />
    </div>
  );
};

export default OffersPage;
