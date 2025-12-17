
import React from 'react';
import { STORE_LOCATIONS } from '../constants';
import MapPinIcon from './icons/MapPinIcon';
import PhoneIcon from './icons/PhoneIcon';
import BuildingStorefrontIcon from './icons/BuildingStorefrontIcon';

const StoreLocator: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Find Us in Person</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Visit one of our retail locations for a personal shopping experience.
          </p>
        </div>
        <div className="relative w-full h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
            <img 
                src="https://i.imgur.com/s4aG2RF.png" // Static map image of the US
                alt="Map of the United States with store locations"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="1123"
                height="658"
            />
            {/* Mock pins */}
            <MapPinIcon className="w-10 h-10 text-indigo-600 absolute" style={{ top: '30%', left: '80%' }} />
            <MapPinIcon className="w-10 h-10 text-indigo-600 absolute" style={{ top: '55%', left: '15%' }} />
            <MapPinIcon className="w-10 h-10 text-indigo-600 absolute" style={{ top: '80%', left: '75%' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORE_LOCATIONS.map(location => (
            <div key={location.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <BuildingStorefrontIcon className="w-8 h-8 text-indigo-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                </div>
              <div className="text-gray-600 space-y-2">
                <p>{location.address.join(', ')}</p>
                <p className="flex items-center"><PhoneIcon className="w-4 h-4 mr-2" />{location.phone}</p>
                <div className="pt-2">
                    <p className="font-semibold text-gray-800">Hours:</p>
                    {location.hours.map(h => <p key={h}>{h}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
