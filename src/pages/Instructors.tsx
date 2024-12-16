import React from 'react';
import { instructors } from '../data';

export default function Instructors() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={instructor.imageUrl} 
                alt={instructor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{instructor.name}</h2>
                <p className="text-red-600 font-semibold mb-4">{instructor.belt}</p>
                <p className="text-gray-600">{instructor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}