export interface ProductVariant {
  id: string;
  name: string;
  image: string;
  detailImages?: string[];
  stock: number;
  price: string;
  swatch: string;
  buyUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  details: string;
  dimensions?: string;
  totalMade?: number;
  stock?: number;
  buyUrl?: string;
  variants?: ProductVariant[];
  rating?: number;
  reviewCount?: number;
  badge?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
