
import React, { useState, useMemo } from 'react';
import { Category, Product } from '../types';
import { PRODUCTS } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import XIcon from '../components/icons/XIcon';

interface CategoryPageProps {
  category: Category;
  onSelectProduct: (product: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onSelectProduct }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    price: 200,
    sizes: [] as string[],
    colors: [] as string[],
    brands: [] as string[],
    materials: [] as string[],
  });
  const [sortOrder, setSortOrder] = useState('newest');

  const categoryProducts = useMemo(() => {
    // In a real app, you might also have sub-categories. For 'Shoes', we show all shoes.
    if (category.name === 'Shoes') {
        return PRODUCTS.filter(p => p.category === 'Shoes' || p.sizes.some(s => s.name.startsWith('US')));
    }
    return PRODUCTS.filter(p => p.category === category.name)
  }, [category.name]);

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...categoryProducts];

    // Apply filters
    products = products.filter(p => p.price <= filters.price);
    if (filters.sizes.length > 0) {
        products = products.filter(p => p.sizes.some(s => filters.sizes.includes(s.name)));
    }
    if (filters.colors.length > 0) {
        products = products.filter(p => p.colors.some(c => filters.colors.includes(c.name)));
    }
    if (filters.brands.length > 0) {
        products = products.filter(p => filters.brands.includes(p.brand));
    }
    if (filters.materials.length > 0) {
        products = products.filter(p => filters.materials.includes(p.material));
    }

    // Apply sorting
    switch (sortOrder) {
        case 'price-asc':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            products.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            products.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
        default:
            products.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
            break;
    }

    return products;
  }, [categoryProducts, filters, sortOrder]);
  
  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
        price: 200,
        sizes: [],
        colors: [],
        brands: [],
        materials: [],
    });
  }

  // A bit of a hack for breadcrumbs since we don't have a router. In a real app, use a routing library.
  const goHome = () => window.location.reload();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs paths={[{ name: 'Home', isCurrent: false, action: goHome }, { name: category.name, isCurrent: true, action: () => {} }]} />
      <div className="relative lg:grid lg:grid-cols-4 lg:gap-x-8">
        <aside className={`fixed inset-0 z-40 lg:relative lg:col-span-1 lg:block bg-white p-6 lg:p-0 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
           <div className="flex items-center justify-between lg:hidden mb-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setSidebarOpen(false)}
                >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <Sidebar 
                products={categoryProducts} 
                filters={filters} 
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
            />
        </aside>

        <main className="lg:col-span-3">
          <ProductGrid 
            products={filteredAndSortedProducts} 
            sortOrder={sortOrder} 
            setSortOrder={setSortOrder}
            onOpenFilters={() => setSidebarOpen(true)}
            onSelectProduct={onSelectProduct}
          />
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
