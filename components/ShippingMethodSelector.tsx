
import React from 'react';
import { SHIPPING_METHODS } from '../constants';
import { ShippingMethod } from '../types';
import CheckIcon from './icons/CheckIcon';

interface ShippingMethodSelectorProps {
  selectedMethod: ShippingMethod;
  onSelectMethod: (method: ShippingMethod) => void;
}

const ShippingMethodSelector: React.FC<ShippingMethodSelectorProps> = ({ selectedMethod, onSelectMethod }) => {
  return (
    <div className="mt-10 border-t border-gray-200 pt-10">
      <h2 className="text-lg font-medium text-gray-900">Shipping method</h2>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        {SHIPPING_METHODS.map((method) => (
          <div
            key={method.id}
            onClick={() => onSelectMethod(method)}
            className={`relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ${
              selectedMethod.id === method.id ? 'border-transparent ring-2 ring-indigo-500' : 'border-gray-300'
            }`}
          >
            <div className="flex flex-1">
              <div className="flex flex-col">
                <span className="block text-sm font-medium text-gray-900">{method.label}</span>
                <span className="mt-1 flex items-center text-sm text-gray-500">{method.description}</span>
                <span className="mt-6 text-sm font-medium text-gray-900">${method.price.toFixed(2)}</span>
              </div>
            </div>
            {selectedMethod.id === method.id && (
              <CheckIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingMethodSelector;
