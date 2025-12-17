
export interface HeroSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface Category {
  id: number;
  name: 'Men' | 'Women' | 'Children' | 'Shoes';
  imageUrl: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  category: 'Men' | 'Women' | 'Children' | 'Shoes';
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  sizes: { name: string; inStock: boolean }[];
  colors: { name: string; hex: string; inStock: boolean }[];
  brand: string;
  material: string;
  dateAdded: string; // ISO 8601 format
  description: string;
  care: string[];
  fit: string[];
  reviews: Review[];
}

export interface PromoCode {
  id: number;
  code: string;
  description: string;
  expiry: string;
}

export interface Bundle {
  id: number;
  title: string;
  type: 'BOGO' | 'Look';
  productIds: number[];
  bundlePrice?: number;
}

export interface CartItem {
    id: number;
    product: Product;
    quantity: number;
    size: string;
    color: string;
}

export interface ShippingMethod {
    id: string;
    label: string;
    description: string;
    price: number;
}

export type OrderStatusLabel = 'Order Confirmed' | 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';

export interface OrderStatus {
    id: number;
    label: OrderStatusLabel;
    date: string; // ISO 8601 format
    location: string;
    details: string;
    coordinates: { lat: number, lng: number };
}

export interface OrderTrackingInfo {
    orderId: string;
    email: string;
    estimatedDelivery: string;
    statusHistory: OrderStatus[];
    carrier: { name: string, trackingNumber: string, url: string };
}

export interface StoreLocation {
    id: number;
    name: string;
    address: string[];
    phone: string;
    hours: string[];
}
