import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import { locations } from '../data';
import Gallery from '../components/Gallery';
import Map from '../components/Map';

export default function LocationDetail() {
  const { id } = useParams();
  const location = locations.find(loc => loc.id === Number(id));

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={location.imageUrl} 
            alt={location.name}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="mr-2" size={20} />
              {location.address}
            </div>

            <p className="text-gray-600 mb-8">{location.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Schedule</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                {location.schedule.map((time, index) => (
                  <div key={index} className="flex items-center mb-2 last:mb-0">
                    <Clock className="mr-2" size={20} />
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
              <Gallery images={location.gallery} />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <Map coordinates={location.coordinates} address={location.address} />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Head Instructor</h2>
              <p className="text-gray-600">{location.instructor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}