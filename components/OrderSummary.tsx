
import React, { useState, useMemo } from 'react';
import { CART_ITEMS } from '../constants';
import { ShippingMethod } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface OrderSummaryProps {
  shippingMethod: ShippingMethod;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ shippingMethod }) => {
  const [isOpen, setIsOpen] = useState(false);

  const subtotal = useMemo(() => {
    return CART_ITEMS.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, []);

  const taxes = subtotal * 0.08; // 8% tax rate
  const total = subtotal + taxes + shippingMethod.price;

  return (
    <section aria-labelledby="summary-heading" className="lg:col-span-5 mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8">
      <div className="lg:hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
          <button onClick={() => setIsOpen(!isOpen)} className="font-medium text-indigo-600 hover:text-indigo-500">
            {isOpen ? 'Hide full summary' : 'Show full summary'}
             <ChevronDownIcon className={`inline-block h-5 w-5 ml-1 transform transition-transform ${isOpen ? '-rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <h2 id="summary-heading" className="hidden lg:block text-lg font-medium text-gray-900">Order summary</h2>
        
        <ul role="list" className="mt-6 divide-y divide-gray-200">
          {CART_ITEMS.map((item) => (
            <li key={item.id} className="flex py-6">
              <div className="flex-shrink-0">
                <img src={item.product.images[0]} alt={item.product.name} className="h-24 w-24 rounded-md object-cover object-center" loading="lazy" decoding="async" width="96" height="96" />
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.product.name}</h3>
                    <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{item.color}, {item.size}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">Qty {item.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <form className="mt-6">
          <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700">Promo code</label>
          <div className="flex space-x-4 mt-1">
            <input type="text" id="promo-code" name="promo-code" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            <button type="submit" className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300">Apply</button>
          </div>
        </form>

        <dl className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-600">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="flex items-center text-sm text-gray-600">
              <span>Shipping estimate</span>
            </dt>
            <dd className="text-sm font-medium text-gray-900">${shippingMethod.price.toFixed(2)}</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="text-sm text-gray-600">Tax estimate</dt>
            <dd className="text-sm font-medium text-gray-900">${taxes.toFixed(2)}</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="text-base font-medium text-gray-900">Order total</dt>
            <dd className="text-base font-medium text-gray-900">${total.toFixed(2)}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default OrderSummary;
