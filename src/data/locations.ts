import { Location } from '../types';

export const locations: Location[] = [
  {
    id: 1,
    name: "Main Academy",
    address: "123 Fighter Street, Downtown",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
    description: "Our flagship location featuring state-of-the-art facilities and equipment.",
    schedule: [
      "Monday - Friday: 6:00 AM - 9:00 PM",
      "Saturday: 8:00 AM - 2:00 PM",
      "Sunday: Closed"
    ],
    instructor: "Marcus Silva",
    gallery: [
      "https://images.unsplash.com/photo-1577459267055-06b1e01ca900?w=800",
      "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?w=800",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800",
      "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=800"
    ],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: 2,
    name: "East Side Branch",
    address: "456 Martial Arts Ave, East District",
    imageUrl: "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?w=800",
    description: "Convenient location for east side residents with focused training programs.",
    schedule: [
      "Monday - Friday: 7:00 AM - 8:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed"
    ],
    instructor: "Laura Santos",
    gallery: [
      "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?w=800",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800",
      "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=800",
      "https://images.unsplash.com/photo-1577459267055-06b1e01ca900?w=800"
    ],
    coordinates: {
      lat: 40.7505,
      lng: -73.9934
    }
  }
];