import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isAdmin?: boolean;
}

const Header = ({
  searchQuery,
  onSearchChange,
  isAdmin = false,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">OA</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-foreground">
                Omidaan Anike Alaadire
              </h1>
              <p className="text-xs text-muted-foreground hidden md:block">
                Authentic Adire Collections
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            {/* <a href="#" className="text-foreground hover:text-primary transition-colors">Shop</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a> */}
            <a
              href="https://api.whatsapp.com/send/?phone=2348142679647&text=Hi%21+I%27m+interested+in+purchasing.&type=phone_number&app_absent=0"
              className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products or ID..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-muted/50 border-muted focus:border-primary"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {isAdmin && (
              <div className="hidden md:flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <User className="w-4 h-4 mr-1" />
                Admin
              </div>
            )}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search products or ID..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-muted/50 border-muted focus:border-primary"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="py-4 space-y-4">
              <a
                href="#"
                className="block text-foreground hover:text-primary transition-colors">
                Home
              </a>
              {/* <a href="#" className="block text-foreground hover:text-primary transition-colors">Shop</a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">About</a> */}
              <a
                href="https://api.whatsapp.com/send/?phone=2348142679647&text=Hi%21+I%27m+interested+in+purchasing.&type=phone_number&app_absent=0"
                className="block text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              {isAdmin && (
                <div className="flex items-center bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium w-fit">
                  <User className="w-4 h-4 mr-2" />
                  Admin Access
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
