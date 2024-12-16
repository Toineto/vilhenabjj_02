import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { locations } from '../data';

export default function Locations() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Locations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={location.imageUrl} 
                alt={location.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="mr-2" size={20} />
                  {location.address}
                </div>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <Link
                  to={`/locations/${location.id}`}
                  className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}