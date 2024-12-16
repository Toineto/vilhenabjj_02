export interface Instructor {
  id: number;
  name: string;
  belt: string;
  imageUrl: string;
  description: string;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
  description: string;
  schedule: string[];
  instructor: string;
  gallery: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface News {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  content: string;
}