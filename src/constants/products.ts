import { Product } from '../types/product';

/**
 * Array of mock products used in the catalog.
 */
export const MOCK_CATALOG_PRODUCTS: Product[] = [
  { id: 1, name: 'Elite Sound Over-Ear', price: 299, image: '/images/headphones.png', cat: 'AUDIO TECH', rating: 5, reviews: 128 },
  { id: 2, name: 'Minimalist Quartz Watch', price: 149, oldPrice: 199, image: '/images/watch.png', cat: 'TIMEPIECE', rating: 4, reviews: 84, sale: true },
  { id: 3, name: 'Pro-Runner Speedster', price: 120, image: '/images/sneaker.png', cat: 'VELOCITY', rating: 5, reviews: 312 },
  { id: 4, name: 'Natural Renewal Facial...', price: 65, image: '/images/cat_skincare.png', cat: 'ORGANICA', rating: 4, reviews: 52 },
  { id: 'featured', name: 'Featured', price: 0, image: '', category: '', featured: true },
  { id: 5, name: 'Retro Aviator', price: 89, image: '/images/cat_sunglasses.png', cat: 'VISIONARY', rating: 5, reviews: 210 },
  { id: 6, name: 'Instant Film Retro', price: 159, image: '/images/charge_stand.png', cat: 'ANALOG CO', rating: 4, reviews: 19 },
  { id: 7, name: 'Aura Wireless Pro', price: 249, image: '/images/headphones.png', cat: 'AUDIO TECH', rating: 5, reviews: 45 },
  { id: 8, name: 'Elite Ring X', price: 299, image: '/images/ring_x.png', cat: 'WEARABLES', rating: 5, reviews: 12 },
];

/**
 * Array of mock favorite products.
 */
export const MOCK_FAVORITES: Product[] = [
  { id: '1', name: 'Elite Sound Over-Ear', price: 299, image: '/images/headphones.png', category: 'AUDIO TECH' },
  { id: '2', name: 'Pro-Runner Speedster', price: 120, image: '/images/sneaker.png', category: 'VELOCITY' },
  { id: '3', name: 'Minimalist Quartz Watch', price: 149, image: '/images/watch.png', category: 'TIMEPIECE' },
];

/**
 * Mock detailed product information for the product detail page.
 */
export const MOCK_PRODUCT_DETAIL: Product = {
  id: 'mock',
  name: 'Elite Chrono V2: Sapphire Edition',
  category: 'Wearables',
  price: 499.00,
  oldPrice: 599.00,
  discount: '-15%',
  rating: 5,
  reviews: 128,
  stock: 'In Stock',
  description: "The Elite Chrono V2 isn't just a smartwatch—it's a statement of technical mastery. Crafted from aerospace-grade titanium and featuring a scratch-resistant sapphire crystal display, it stands up to the most demanding environments.",
  colors: ['#1e1b4b', '#94a3b8', '#c7d2fe'],
  sizes: ['40mm', '44mm', '48mm'],
  mainImage: '/images/watch_detail.png',
  thumbnails: [
    '/images/watch_detail.png',
    '/images/watch.png',
    '/images/hero_bg.png',
    '/images/watch_lifestyle.png'
  ],
  features: [
    'Up to 14 days battery life on a single charge',
    'Precision heart rate and blood oxygen monitoring',
    'Water resistant up to 100 meters (10 ATM)',
    'Global GPS tracking and offline mapping'
  ],
  image: '/images/watch_detail.png'
};

/**
 * Mock related products for the product detail page.
 */
export const MOCK_RELATED_PRODUCTS: Product[] = [
  { id: 'r1', name: 'Minimalist Pro', price: 189, image: '/images/watch.png', cat: 'ELITE CLASSICS', category: 'ELITE CLASSICS' },
  { id: 'r2', name: 'Sonic Max Pro', price: 329, image: '/images/sonic_max.png', cat: 'AUDIO LABS', category: 'AUDIO LABS' },
  { id: 'r3', name: 'Elite Ring X', price: 299, image: '/images/ring_x.png', cat: 'WEARABLES', category: 'WEARABLES' },
  { id: 'r4', name: 'Duo Charge Stand', price: 89, image: '/images/charge_stand.png', cat: 'POWER', category: 'POWER' },
];

export const MOCK_CART_ITEMS: Product[] = [
  { id: '1', name: 'Stratos Performance V2', category: 'ELITE FOOTWEAR', price: 189.00, quantity: 1, image: '/images/mens.png' } as Product,
  { id: '2', name: 'Lumina Watch Series 4', category: 'TECH WEARABLES', price: 349.00, quantity: 1, image: '/images/watch.png' } as Product,
  { id: '3', name: 'Zenith Noise Cancelling Headphones', category: 'AUDIO PRO', price: 299.00, quantity: 1, image: '/images/headphones.png' } as Product,
];

export const MOCK_FBT_ITEMS: Product[] = [
  { id: 'f1', name: 'Heavy-Duty Charging Cable', category: 'ACCESSORIES', price: 24.99, image: '/images/charge_stand.png' },
  { id: 'f2', name: 'Pro Screen Cleaning Kit', category: 'CARE', price: 15.00, image: '/images/cat_skincare.png' },
  { id: 'f3', name: 'Travel Storage Case', category: 'PROTECTION', price: 45.00, image: '/images/womens.png' },
  { id: 'f4', name: 'Wireless Charging Pad Pro', category: 'POWER', price: 59.99, image: '/images/purifier.png' },
];
