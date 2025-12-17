
import React from 'react';
import { ShippingMethod } from '../types';
import ShippingMethodSelector from './ShippingMethodSelector';

interface ShippingStepProps {
  onNext: () => void;
  selectedMethod: ShippingMethod;
  onSelectMethod: (method: ShippingMethod) => void;
}

const ShippingStep: React.FC<ShippingStepProps> = ({ onNext, selectedMethod, onSelectMethod }) => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        {/* Form fields... */}
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
          <div className="mt-1">
            <input type="email" id="email" name="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
          </div>
        </div>
        
        <div>
          <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div className="mt-1">
            <input type="text" id="first-name" name="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div className="mt-1">
            <input type="text" id="last-name" name="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">Address</label>
            <div className="mt-1">
                <input type="text" name="address" id="address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
        </div>
        
        {/* ... More address fields (city, state, zip, country) */}

      </div>

      <div className="mt-4 flex items-center">
        <input id="save-info" name="save-info" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
        <label htmlFor="save-info" className="ml-2 block text-sm text-gray-900">Save this information for next time</label>
      </div>
      
      <div className="mt-4 border-t border-gray-200 pt-4">
         <h2 className="text-lg font-medium text-gray-900">Billing information</h2>
         <div className="mt-4 flex items-center">
            <input id="same-as-shipping" name="same-as-shipping" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label htmlFor="same-as-shipping" className="ml-2 block text-sm text-gray-900">Same as shipping address</label>
         </div>
      </div>
      
      <ShippingMethodSelector selectedMethod={selectedMethod} onSelectMethod={onSelectMethod} />

      <div className="mt-10 border-t border-gray-200 pt-6">
        <button onClick={onNext} className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform duration-200 hover:scale-105 active:scale-95">
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default ShippingStep;
