
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import OffersPage from './pages/OffersPage';
import CheckoutPage from './pages/CheckoutPage';
import TrackingPage from './pages/TrackingPage';
import ContactPage from './pages/ContactPage';
import AuthModal from './components/AuthModal';
import { Category, Product } from './types';

type View = 
  | { page: 'home' }
  | { page: 'offers' }
  | { page: 'checkout' }
  | { page: 'tracking' }
  | { page: 'contact' }
  | { page: 'category', category: Category }
  | { page: 'product', product: Product, category: Category };

const App: React.FC = () => {
  const [view, setView] = useState<View>({ page: 'home' });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleSelectCategory = (category: Category) => {
    setView({ page: 'category', category });
  };

  const handleSelectProduct = (product: Product, category?: Category) => {
    // Find category if not provided (e.g., from homepage trending)
    const productCategory = category || { id: 0, name: product.category, imageUrl: '' };
    setView({ page: 'product', product, category: productCategory });
  };

  const handleGoHome = () => {
    setView({ page: 'home' });
  };

  const handleGoToOffers = () => {
    setView({ page: 'offers' });
  };

  const handleGoToCheckout = () => {
    setView({ page: 'checkout' });
  };
  
  const handleGoToTracking = () => {
    setView({ page: 'tracking' });
  };

  const handleGoToContact = () => {
    setView({ page: 'contact' });
  };

  const handleBackToCategory = (category: Category) => {
    setView({ page: 'category', category });
  }

  const renderContent = () => {
    switch (view.page) {
      case 'product':
        return <ProductDetailPage product={view.product} category={view.category} onBack={() => handleBackToCategory(view.category)} />;
      case 'category':
        return <CategoryPage category={view.category} onSelectProduct={(product) => handleSelectProduct(product, view.category)} />;
      case 'offers':
        return <OffersPage onSelectProduct={handleSelectProduct} />;
      case 'checkout':
        return <CheckoutPage />;
      case 'tracking':
        return <TrackingPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onSelectCategory={handleSelectCategory} onSelectProduct={handleSelectProduct} onGoToOffers={handleGoToOffers} />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header 
        onGoHome={handleGoHome} 
        onGoToOffers={handleGoToOffers} 
        onGoToCheckout={handleGoToCheckout}
        onSelectCategory={handleSelectCategory}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
      />
      <main>
        {renderContent()}
      </main>
      <Footer onGoToTracking={handleGoToTracking} onGoToContact={handleGoToContact} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default App;