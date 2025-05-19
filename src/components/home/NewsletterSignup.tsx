
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-10 h-10 text-lumina-cacao mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-medium mb-3">Join Our Community</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter and get 15% off your first order, plus exclusive access to skincare tips, product launches, and more.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1" 
              required 
            />
            <Button className="bg-lumina-cacao hover:bg-lumina-cacao/90 text-white">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
          </p>
        </div>
      </div>
    </section>
  );
}
