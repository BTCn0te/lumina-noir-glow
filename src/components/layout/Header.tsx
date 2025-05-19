
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const mainNavItems = [
  { label: "New In", path: "/collections/new-in" },
  { label: "Skin Care", path: "/collections/skin-care" },
  { label: "Makeup", path: "/collections/makeup" },
  { label: "Hair", path: "/collections/hair" },
  { label: "Body", path: "/collections/body" },
  { label: "Gifts", path: "/collections/gifts" },
  { label: "Journal", path: "/journal" },
  { label: "Sale", path: "/collections/sale" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-lumina-base border-b border-muted py-4 sticky top-0 z-40">
      <div className="container flex items-center justify-between">
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Logo */}
        <div className="flex-1 md:flex-initial flex justify-center md:justify-start">
          <Link to="/" className="font-serif text-2xl font-medium">
            Lumina Noir
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 mx-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/account">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart">
              <div className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-lumina-base z-30 md:hidden animate-fadeIn">
          <nav className="container py-8 flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-lg font-medium py-2 border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Search Modal (Placeholder) */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-fadeIn">
          <div className="container flex flex-col items-center justify-center h-full">
            <div className="bg-lumina-base w-full max-w-lg p-6 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Search</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full border border-input px-4 py-2 rounded-sm"
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-1 top-1"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
