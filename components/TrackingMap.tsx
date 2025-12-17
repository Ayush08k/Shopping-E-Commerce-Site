
import React from 'react';
import { OrderStatus } from '../types';
import MapPinIcon from './icons/MapPinIcon';

interface TrackingMapProps {
  latestStatus: OrderStatus;
}

const TrackingMap: React.FC<TrackingMapProps> = ({ latestStatus }) => {
  // In a real app, you would use a library like Google Maps or Leaflet.
  // For this demo, we'll use a static image and overlay a pin.
  // The lat/lng would be used to position the pin accurately.
  
  // This is a simplified positioning logic.
  const getPinPosition = (coords: { lat: number, lng: number }) => {
    // A very rough mapping of US coordinates to percentage-based position.
    const top = (49.38 - coords.lat) / (49.38 - 25.82) * 100; // US lat range
    const left = (coords.lng + 124.47) / (124.47 - 66.95) * 100; // US lng range
    return { top: `${top}%`, left: `${left}%` };
  };

  const pinStyle = getPinPosition(latestStatus.coordinates);

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Current Location</h3>
      <p className="mt-1 text-sm text-gray-500">
        Package is currently in or was last scanned at: <span className="font-bold">{latestStatus.location}</span>
      </p>
      <div className="mt-4 relative w-full h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
        <img 
            src="https://i.imgur.com/s4aG2RF.png" // Static map image of the US
            alt="Map of the United States"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width="1123"
            height="658"
        />
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-full"
          style={pinStyle}
        >
          <MapPinIcon className="w-8 h-8 text-indigo-600 drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default TrackingMap;
