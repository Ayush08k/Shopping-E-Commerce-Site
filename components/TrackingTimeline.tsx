
import React from 'react';
import { OrderStatus, OrderTrackingInfo } from '../types';
import CheckIcon from './icons/CheckIcon';
import BoxIcon from './icons/BoxIcon';
import TruckIcon from './icons/TruckIcon';
import HomeIcon from './icons/HomeIcon';
import ClipboardCheckIcon from './icons/ClipboardCheckIcon';

interface TrackingTimelineProps {
  statusHistory: OrderStatus[];
  carrier: OrderTrackingInfo['carrier'];
}

const statusMap = {
    'Order Confirmed': { icon: ClipboardCheckIcon, color: 'bg-green-500' },
    'Processing': { icon: BoxIcon, color: 'bg-blue-500' },
    'Shipped': { icon: TruckIcon, color: 'bg-indigo-500' },
    'Out for Delivery': { icon: TruckIcon, color: 'bg-yellow-500' },
    'Delivered': { icon: HomeIcon, color: 'bg-green-600' },
};

const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ statusHistory, carrier }) => {
  const allPossibleStatuses: (typeof statusHistory[0]['label'])[] = ['Order Confirmed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
  const completedStatuses = new Set(statusHistory.map(s => s.label));
  const latestStatusIndex = statusHistory.length - 1;

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {allPossibleStatuses.map((label, eventIdx) => {
          const event = statusHistory.find(s => s.label === label);
          const isCompleted = completedStatuses.has(label);
          const isCurrent = eventIdx === latestStatusIndex;

          const IconComponent = statusMap[label].icon;

          return (
            <li key={label}>
              <div className="relative pb-8">
                {eventIdx !== allPossibleStatuses.length - 1 ? (
                  <span className={`absolute left-4 top-4 -ml-px h-full w-0.5 ${isCompleted ? 'bg-indigo-600' : 'bg-gray-200'}`} aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3 items-start">
                  <div>
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${isCompleted ? statusMap[label].color : 'bg-gray-300'}`}>
                      <IconComponent className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className={`min-w-0 flex-1 pt-1.5 ${!isCompleted && 'opacity-50'}`}>
                    <p className="font-medium text-gray-900">{label}</p>
                    {event && (
                        <>
                            <p className="mt-1 text-sm text-gray-500">{event.details}</p>
                            <p className="text-sm text-gray-500">{event.location}</p>
                            <div className="mt-1 text-xs text-gray-400">
                                {new Date(event.date).toLocaleString()}
                            </div>
                        </>
                    )}
                    {label === 'Shipped' && event && (
                        <div className="mt-2 text-sm">
                            <span>{carrier.name}: </span>
                            <a href={carrier.url} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                                {carrier.trackingNumber}
                            </a>
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrackingTimeline;
