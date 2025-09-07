import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "ADR001",
    name: "Royal Purple Adire Dress",
    price: 25000,
    image: product1,
    category: "Dresses",
    featured: true,
  },
  {
    id: "ADR002", 
    name: "Golden Rose Adire Blouse",
    price: 18000,
    image: product2,
    category: "Tops",
    featured: true,
  },
  {
    id: "ADR003",
    name: "Traditional Adire Wrapper",
    price: 22000,
    image: product3,
    category: "Wrappers",
    featured: true,
  },
  {
    id: "ADR004",
    name: "Elegant Adire Maxi Dress",
    price: 28000,
    image: product4,
    category: "Dresses",
    featured: true,
  },
  {
    id: "ADR005",
    name: "Casual Adire Top",
    price: 15000,
    image: product5,
    category: "Tops",
    featured: true,
  },
  {
    id: "ADR006",
    name: "Premium Adire Kaftan", 
    price: 35000,
    image: product6,
    category: "Kaftans",
    featured: true,
  },
  {
    id: "ADR007",
    name: "Adire Two-Piece Set",
    price: 32000,
    image: product7,
    category: "Sets",
    featured: true,
  },
  {
    id: "ADR008",
    name: "Modern Adire Jumpsuit",
    price: 30000,
    image: product8,
    category: "Jumpsuits",
    featured: true,
  },
  {
    id: "ADR009",
    name: "Classic Adire Skirt",
    price: 16000,
    image: product9,
    category: "Skirts",
    featured: true,
  }
];

export const getFeaturedProducts = () => products.filter(product => product.featured);

export const searchProducts = (query: string) => {
  if (!query.trim()) return products;
  
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.id.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};