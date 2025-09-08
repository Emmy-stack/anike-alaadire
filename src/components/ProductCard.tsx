import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleWhatsAppPurchase = () => {
    const adminNumber = "2348142679647"; // Nigerian format
    const message = `Hi! I'm interested in purchasing:
Product: ${product.name}
Product ID: ${product.id}
Price: ₦${product.price.toLocaleString()}

Please let me know about availability and payment options.`;

    const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-1">ID: {product.id}</p>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ₦{product.price.toLocaleString()}
          </span>
          <Button
            onClick={handleWhatsAppPurchase}
            className="bg-gradient-primary hover:opacity-90 transition-opacity flex items-center space-x-2"
            size="sm">
            <MessageCircle className="w-4 h-4" />
            <span>Buy Now</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
