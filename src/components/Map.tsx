import React from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
}

export default function Map({ coordinates, address }: MapProps) {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${coordinates.lat},${coordinates.lng}`;
  
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-100 p-4 flex items-center">
        <MapPin className="mr-2" size={20} />
        <span className="text-gray-700">{address}</span>
      </div>
      <div className="aspect-video">
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}