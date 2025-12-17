
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCategories from '../components/FeatureCategories';
import TrendingProducts from '../components/TrendingProducts';
import FlashSaleBanner from '../components/FlashSaleBanner';
import { Category, Product } from '../types';

interface HomePageProps {
  onSelectCategory: (category: Category) => void;
  onSelectProduct: (product: Product) => void;
  onGoToOffers: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCategory, onSelectProduct, onGoToOffers }) => {
  return (
    <>
      <HeroSection />
      <FeatureCategories onSelectCategory={onSelectCategory} />
      <TrendingProducts onSelectProduct={onSelectProduct} />
      <FlashSaleBanner onGoToOffers={onGoToOffers} />
    </>
  );
};

export default HomePage;
