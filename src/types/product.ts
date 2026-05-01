/**
 * Represents a product in the catalog.
 */
export interface Product {
  id: string | number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category?: string;
  cat?: string; // Some mock data uses 'cat'
  rating?: number;
  reviews?: number;
  sale?: boolean;
  featured?: boolean;
  description?: string;
  colors?: string[];
  sizes?: string[];
  mainImage?: string;
  thumbnails?: string[];
  features?: string[];
  stock?: string;
  discount?: string;
  quantity?: number;
}

/**
 * Props for the ProductCard component.
 */
export interface ProductCardProps {
  /** The unique identifier of the product */
  id: string | number;
  /** The name of the product */
  name: string;
  /** The current price of the product */
  price: number;
  /** The image URL of the product */
  image: string;
  /** The category of the product (optional for backward compatibility) */
  category?: string;
  /** Badge text to display on the card (optional) */
  badge?: string;
}
