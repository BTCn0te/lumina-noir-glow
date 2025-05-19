
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-lumina-base border-t border-muted pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Shop Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/collections/skin-care" className="text-sm hover:text-secondary transition-colors">Skin Care</Link></li>
              <li><Link to="/collections/makeup" className="text-sm hover:text-secondary transition-colors">Makeup</Link></li>
              <li><Link to="/collections/hair" className="text-sm hover:text-secondary transition-colors">Hair</Link></li>
              <li><Link to="/collections/body" className="text-sm hover:text-secondary transition-colors">Body</Link></li>
              <li><Link to="/collections/gifts" className="text-sm hover:text-secondary transition-colors">Gifts</Link></li>
              <li><Link to="/collections/sale" className="text-sm hover:text-secondary transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/account" className="text-sm hover:text-secondary transition-colors">My Account</Link></li>
              <li><Link to="/account/orders" className="text-sm hover:text-secondary transition-colors">Track Order</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-secondary transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-sm hover:text-secondary transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-secondary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Mission Column */}
          <div>
            <h3 className="font-medium text-lg mb-4">Mission</h3>
            <ul className="space-y-2">
              <li><Link to="/mission" className="text-sm hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link to="/mission/clean-standard" className="text-sm hover:text-secondary transition-colors">Clean Standard</Link></li>
              <li><Link to="/mission/dirty-list" className="text-sm hover:text-secondary transition-colors">The Dirty List</Link></li>
              <li><Link to="/mission/bipoc-pledge" className="text-sm hover:text-secondary transition-colors">BIPOC Pledge</Link></li>
              <li><Link to="/impact/pact" className="text-sm hover:text-secondary transition-colors">Pact Recycling</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Join Our Mailing List</h3>
            <p className="text-sm mb-4">Subscribe and get 15% off your first order.</p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="border-lumina-charcoal" 
              />
              <Button className="w-full bg-lumina-cacao hover:bg-lumina-cacao/90">
                Subscribe
              </Button>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Free Shipping Banner */}
        <div className="border-t border-muted py-4 text-center">
          <p className="text-sm font-medium">Free U.S. Shipping on Orders $35+</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-muted pt-6 mt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lumina Noir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
