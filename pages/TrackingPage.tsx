
import React, { useState } from 'react';
import { ORDER_TRACKING_INFO } from '../constants';
import { OrderTrackingInfo } from '../types';
import TrackingTimeline from '../components/TrackingTimeline';
import TrackingMap from '../components/TrackingMap';

const TrackingPage: React.FC = () => {
  const [orderInfo, setOrderInfo] = useState<OrderTrackingInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // In a real app, you'd validate the input against your backend
      setOrderInfo(ORDER_TRACKING_INFO);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!orderInfo ? (
          <div className="max-w-xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Track Your Order</h1>
              <p className="mt-4 text-lg text-gray-500">
                Enter your order details below to see the latest shipping updates.
              </p>
            </div>
            <form onSubmit={handleTrackOrder} className="mt-12">
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="order-id" className="block text-sm font-semibold leading-6 text-gray-900">Order ID</label>
                  <div className="mt-1">
                    <input type="text" name="order-id" id="order-id" required className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="e.g., VV12345" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
                  <div className="mt-1">
                    <input type="email" name="email" id="email" required autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="you@example.com" />
                  </div>
                </div>
              </div>
              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
              <div className="mt-8">
                <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300 transition-transform duration-200 hover:scale-105 active:scale-95">
                  {isLoading ? 'Tracking...' : 'Track Order'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Order #{orderInfo.orderId}</h1>
                <p className="mt-2 text-lg text-gray-600">Estimated Delivery: <span className="font-medium text-indigo-600">{new Date(orderInfo.estimatedDelivery).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <TrackingTimeline statusHistory={orderInfo.statusHistory} carrier={orderInfo.carrier} />
              </div>
              <div className="lg:col-span-1">
                <TrackingMap latestStatus={orderInfo.statusHistory[orderInfo.statusHistory.length - 1]} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingPage;
