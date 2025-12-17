
import React from 'react';

interface ReviewStepProps {
  onBack: () => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ onBack }) => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">Review your order</h2>

      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        <div className="py-4">
            <h3 className="font-medium text-gray-900">Shipping Address</h3>
            <p className="mt-1 text-gray-600">John Doe</p>
            <p className="text-gray-600">123 Main St, Anytown, USA 12345</p>
        </div>
        <div className="py-4">
            <h3 className="font-medium text-gray-900">Shipping Method</h3>
            <p className="mt-1 text-gray-600">Standard Shipping (4-8 days)</p>
        </div>
        <div className="py-4">
            <h3 className="font-medium text-gray-900">Payment Method</h3>
            <p className="mt-1 text-gray-600">Visa ending in 1234</p>
        </div>
      </div>
      
      <div className="mt-10 flex justify-between border-t border-gray-200 pt-6">
        <button onClick={onBack} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            &larr; Back to Payment
        </button>
        <button
          type="submit"
          className="rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ReviewStep;