
import React, { useMemo } from 'react';
import { Product } from '../types';

interface Filters {
  price: number;
  sizes: string[];
  colors: string[];
  brands: string[];
  materials: string[];
}

interface SidebarProps {
  products: Product[];
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
  onClearFilters: () => void;
}

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="border-b border-gray-200 py-6">
        <h3 className="-my-3 flow-root">
            <div className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">{title}</span>
            </div>
        </h3>
        <div className="pt-6">{children}</div>
    </div>
);

const Sidebar: React.FC<SidebarProps> = ({ products, filters, onFilterChange, onClearFilters }) => {
    const available = useMemo(() => {
        const sizes = new Set<string>();
        const colors = new Set<string>();
        const brands = new Set<string>();
        const materials = new Set<string>();

        products.forEach(p => {
            p.sizes.forEach(s => sizes.add(s.name));
            p.colors.forEach(c => colors.add(c.name));
            brands.add(p.brand);
            materials.add(p.material);
        });

        return {
            sizes: Array.from(sizes),
            colors: Array.from(colors),
            brands: Array.from(brands),
            materials: Array.from(materials),
        };
    }, [products]);

    const handleCheckboxChange = (filterKey: keyof Omit<Filters, 'price'>, value: string) => {
        const currentValues = filters[filterKey] as string[];
        const newValues = currentValues.includes(value)
            ? currentValues.filter(v => v !== value)
            : [...currentValues, value];
        onFilterChange({ [filterKey]: newValues });
    };

    return (
        <form className="space-y-6 divide-y divide-gray-200">
             <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Filters</h2>
                <button type="button" onClick={onClearFilters} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Clear all
                </button>
            </div>

            <FilterSection title="Price">
                <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>$0</span>
                        <span>${filters.price}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={filters.price}
                        onChange={(e) => onFilterChange({ price: Number(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </FilterSection>

            {['colors', 'sizes', 'brands', 'materials'].map(filterKey => {
                const options = available[filterKey as keyof typeof available];
                if (options.length === 0) return null;
                return (
                    <FilterSection key={filterKey} title={filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}>
                        <div className="space-y-4 max-h-48 overflow-y-auto">
                            {options.map((option) => (
                                <div key={option} className="flex items-center">
                                    <input
                                        id={`filter-${filterKey}-${option}`}
                                        name={`${filterKey}[]`}
                                        defaultValue={option}
                                        type="checkbox"
                                        checked={(filters[filterKey as keyof Omit<Filters, 'price'>]).includes(option)}
                                        onChange={() => handleCheckboxChange(filterKey as keyof Omit<Filters, 'price'>, option)}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`filter-${filterKey}-${option}`} className="ml-3 text-sm text-gray-600">
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </FilterSection>
                );
            })}
        </form>
    );
};

export default Sidebar;
