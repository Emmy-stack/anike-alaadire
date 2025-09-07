import { useState, useMemo } from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import { products, getFeaturedProducts, searchProducts } from "@/data/products";

// Mock admin check - in production, this would come from authentication
const ADMIN_EMAIL = "socialmeda03@gmail.com";
const mockCurrentUser = { email: ADMIN_EMAIL }; // Simulate logged in admin for demo

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const isAdmin = mockCurrentUser?.email === ADMIN_EMAIL;
  
  const filteredProducts = useMemo(() => {
    return searchProducts(searchQuery);
  }, [searchQuery]);
  
  const featuredProducts = getFeaturedProducts();
  const showFeatured = !searchQuery.trim();

  return (
    <div className="min-h-screen bg-background">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isAdmin={isAdmin}
      />
      
      {showFeatured && <HeroSection />}
      
      {showFeatured ? (
        <ProductGrid
          products={featuredProducts}
          title="Featured Collections"
          subtitle="Handpicked pieces that showcase the finest Adire craftsmanship"
        />
      ) : (
        <ProductGrid
          products={filteredProducts}
          title={`Search Results${searchQuery ? ` for "${searchQuery}"` : ""}`}
          subtitle={`Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`}
        />
      )}
      
      <Toaster />
    </div>
  );
};

export default Index;
