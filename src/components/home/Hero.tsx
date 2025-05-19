
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="h-[70vh] min-h-[600px] relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
            alt="Beautiful woman with glowing skin" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="container relative h-full flex flex-col justify-end pb-20">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Formulated for Melanin-Rich Skin
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Clean beauty solutions targeting hyperpigmentation and celebrating diverse skin tones.
            </p>
            <Button 
              size="lg" 
              className="bg-lumina-turmeric hover:bg-lumina-turmeric/90 text-white"
              asChild
            >
              <Link to="/collections/new-in">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
