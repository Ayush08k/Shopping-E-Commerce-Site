
import React, { useState, useEffect, useRef } from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import XIcon from './icons/XIcon';
import { Category, Product } from '../types';
import { CATEGORIES, PRODUCTS } from '../constants';

interface HeaderProps {
  onGoHome: () => void;
  onGoToOffers: () => void;
  onGoToCheckout: () => void;
  onSelectCategory: (category: Category) => void;
  onOpenAuthModal: () => void;
  onSelectProduct: (product: Product) => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome, onGoToOffers, onGoToCheckout, onSelectCategory, onOpenAuthModal, onSelectProduct }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
        const lowercasedQuery = searchQuery.toLowerCase();
        const results = PRODUCTS.filter(product =>
          product.name.toLowerCase().includes(lowercasedQuery) ||
          product.category.toLowerCase().includes(lowercasedQuery)
        );
        setSearchResults(results);
    } else {
        setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
            setIsSearchOpen(false);
        }
    };
    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsSearchOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
  
  const handleProductSelect = (product: Product) => {
    onSelectProduct(product);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  const handleCategoryClick = (categoryName: Category['name']) => {
    const category = CATEGORIES.find(c => c.name === categoryName);
    if (category) {
      onSelectCategory(category);
    }
  };

  const navLinks = [
    { name: 'Home', action: onGoHome },
    { name: 'Men', action: () => handleCategoryClick('Men') },
    { name: 'Women', action: () => handleCategoryClick('Women') },
    { name: 'Children', action: () => handleCategoryClick('Children') },
    { name: 'Shoes', action: () => handleCategoryClick('Shoes') },
    { name: 'Offers', action: onGoToOffers },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={onGoHome} className="text-3xl font-bold text-gray-900 tracking-wider">VOGUEVERSE</button>
          </div>
          
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map(link => (
              <button 
                key={link.name}
                onClick={link.action}
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-lg">
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div ref={searchContainerRef} className="relative">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        value={searchQuery}
                        onFocus={() => setIsSearchOpen(true)}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-32 md:w-48 lg:w-64 pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
                {isSearchOpen && searchQuery && (
                    <div className="absolute top-full mt-2 w-full lg:w-96 max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10 right-0">
                        {searchResults.length > 0 ? (
                            <ul>
                                {searchResults.map(product => (
                                    <li key={product.id}>
                                        <button onClick={() => handleProductSelect(product)} className="w-full text-left flex items-center p-3 hover:bg-gray-100 transition-colors duration-150">
                                            <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded-md mr-4 flex-shrink-0" loading="lazy" decoding="async" width="48" height="48" />
                                            <div>
                                                <p className="font-medium text-gray-800 text-sm">{product.name}</p>
                                                <p className="text-xs text-gray-500">{product.category}</p>
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-4 text-center text-gray-500 text-sm">
                                No products found.
                            </div>
                        )}
                    </div>
                )}
            </div>

            <button onClick={onOpenAuthModal} className="text-gray-500 hover:text-indigo-600">
              <UserIcon className="h-6 w-6" />
            </button>
            <button onClick={onGoToCheckout} className="relative text-gray-500 hover:text-indigo-600">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-indigo-600">
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <button
                key={link.name} 
                onClick={() => {
                  link.action();
                  setIsMenuOpen(false);
                }}
                className="block text-left w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// SVG Icon components
const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);
const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);
const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
