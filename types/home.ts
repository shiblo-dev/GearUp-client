export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Gear {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  location: string;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  review: string;
}