
import React from 'react';

interface PaymentStepProps {
  onNext: () => void;
  onBack: () => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ onNext, onBack }) => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">Payment details</h2>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
        <div className="sm:col-span-4">
          <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card number</label>
          <div className="mt-1">
            <input type="text" id="card-number" name="card-number" autoComplete="cc-number" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">Name on card</label>
          <div className="mt-1">
            <input type="text" id="name-on-card" name="name-on-card" autoComplete="cc-name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
          <div className="mt-1">
            <input type="text" name="expiration-date" id="expiration-date" autoComplete="cc-exp" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div>
          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
          <div className="mt-1">
            <input type="text" name="cvc" id="cvc" autoComplete="csc" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
        </div>
      </div>
      
      <div className="mt-10 flex justify-between border-t border-gray-200 pt-6">
        <button onClick={onBack} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            &larr; Back to Shipping
        </button>
        <button onClick={onNext} className="rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform duration-200 hover:scale-105 active:scale-95">
          Continue to Review
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;