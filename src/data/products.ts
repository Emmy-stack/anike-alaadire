import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";
import product13 from "@/assets/product-13.jpg";
import product14 from "@/assets/product-14.jpg";
import product15 from "@/assets/product-15.jpg";

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
    name: "Royal Blue Palazzo Trousers",
    price: 25000,
    image: product1,
    category: "Trousers",
    featured: true,
  },
  {
    id: "ADR002", 
    name: "Brown Palazzo Trousers",
    price: 25000,
    image: product2,
    category: "Trousers",
    featured: true,
  },
  {
    id: "ADR003",
    name: "Golden Yellow Palazzo Trousers",
    price: 25000,
    image: product3,
    category: "Trousers",
    featured: true,
  },
  {
    id: "ADR004",
    name: "Royal Purple Palazzo Trousers",
    price: 25000,
    image: product4,
    category: "Trousers",
    featured: true,
  },
  {
    id: "ADR005",
    name: "Green Palazzo Trousers",
    price: 25000,
    image: product5,
    category: "Trousers",
    featured: true,
  },
  {
    id: "ADR006",
    name: "Navy Blue Palazzo Trousers", 
    price: 25000,
    image: product6,
    category: "Trousers",
    featured: true,
  },
  {
    id: "ADR007",
    name: "Modern Adire Top",
    price: 32000,
    image: product7,
    category: "Tops",
    featured: true,
  },
  {
    id: "ADR008",
    name: "Modern Adire Blue Top",
    price: 30000,
    image: product8,
    category: "Tops",
    featured: true,
  },
  {
    id: "ADR009",
    name: "Classic Adire Striped Top",
    price: 16000,
    image: product9,
    category: "Tops",
    featured: true,
  },
  {
    id: "ADR010",
    name: "Modern Adire Heart Shaped Top",
    price: 30000,
    image: product10,
    category: "Tops",
    featured: true,
  },
  {
    id: "ADR011",
    name: "Modern Adire Top with Concentric Circles",
    price: 30000,
    image: product11,
    category: "Tops",
    featured: true,
  },
  {
    id: "ADR012",
    name: "Customized Modern Adire Top",
    price: 30000,
    image: product12,
    category: "Tops",
    featured: true,
  },
  {
    id: "ADR013",
    name: "Modern Adire Gown",
    price: 30000,
    image: product13,
    category: "Gowns",
    featured: true,
  },
  {
    id: "ADR014",
    name: "Modern Adire Skirt",
    price: 30000,
    image: product14,
    category: "Skirts",
    featured: true,
  },
  {
    id: "ADR015",
    name: "Modern Adire Shirt",
    price: 30000,
    image: product15,
    category: "Shirts",
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