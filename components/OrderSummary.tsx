
import React, { useState, useMemo } from 'react';
import { CartItem, ShippingMethod } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import TrashIcon from './icons/TrashIcon';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

interface OrderSummaryProps {
  shippingMethod: ShippingMethod;
  cartItems: CartItem[];
  onRemoveItem: (itemId: number) => void;
  onIncreaseQuantity: (itemId: number) => void;
  onDecreaseQuantity: (itemId: number) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ shippingMethod, cartItems, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cartItems]);

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
        
        {cartItems.length > 0 ? (
            <ul role="list" className="mt-6 divide-y divide-gray-200">
            {cartItems.map((item) => (
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
                        <div className="flex items-center border border-gray-300 rounded">
                            <button type="button" onClick={() => onDecreaseQuantity(item.id)} className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-l-md"><MinusIcon className="h-4 w-4" /></button>
                            <span className="px-3 text-gray-700 text-base font-medium">{item.quantity}</span>
                            <button type="button" onClick={() => onIncreaseQuantity(item.id)} className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-r-md"><PlusIcon className="h-4 w-4" /></button>
                        </div>
                        <button type="button" onClick={() => onRemoveItem(item.id)} className="font-medium text-red-600 hover:text-red-500 p-1">
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                </li>
            ))}
            </ul>
        ) : (
            <p className="text-center text-gray-500 mt-6">Your cart is empty.</p>
        )}


        <form className="mt-6">
          <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700">Promo code</label>
          <div className="flex space-x-4 mt-1">
            <input type="text" id="promo-code" name="promo-code" className="block w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-1.5" />
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
