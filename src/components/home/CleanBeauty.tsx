
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ban, Shield, Leaf } from "lucide-react";

export function CleanBeauty() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-4">Why Clean Beauty Matters</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          We exclude over 2,700 ingredients from our products that are linked to health concerns.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
              <Ban className="w-8 h-8 text-lumina-cacao" />
            </div>
            <h3 className="text-xl font-medium mb-2">The Dirty List</h3>
            <p className="text-muted-foreground mb-4">
              We ban over 2,700 ingredients including parabens, phthalates, and formaldehyde that can harm melanin-rich skin.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-lumina-cacao" />
            </div>
            <h3 className="text-xl font-medium mb-2">Clinical Testing</h3>
            <p className="text-muted-foreground mb-4">
              All products are tested on diverse skin tones to ensure safe, effective results for everyone.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-lumina-cacao" />
            </div>
            <h3 className="text-xl font-medium mb-2">Sustainable Packaging</h3>
            <p className="text-muted-foreground mb-4">
              Our Pact program makes it easy to recycle your empties and earn rewards while you do it.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            className="border-lumina-cacao text-lumina-cacao hover:bg-lumina-cacao hover:text-white"
            asChild
          >
            <Link to="/mission/clean-standard">See Our Clean Standard</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
