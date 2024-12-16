import React from 'react';
import { Calendar } from 'lucide-react';
import { news } from '../data';

export default function News() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="mr-2" size={16} />
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}