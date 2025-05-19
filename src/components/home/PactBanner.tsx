
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RecycleIcon } from "lucide-react";

export function PactBanner() {
  return (
    <section className="py-12 bg-lumina-cacao text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <RecycleIcon className="w-8 h-8 text-lumina-turmeric" />
              <h2 className="text-2xl md:text-3xl font-medium">The Lumina PACT</h2>
            </div>
            <p className="text-white/80 mb-6">
              Join our Packaging And Conservation Together program. Return your empty Lumina Noir packaging to be properly recycled and receive rewards for your efforts.
            </p>
            <Button 
              className="bg-lumina-turmeric hover:bg-lumina-turmeric/90 text-white"
              asChild
            >
              <Link to="/impact/pact">Learn About Our Recycling Program</Link>
            </Button>
          </div>
          
          <div className="md:w-1/2 md:flex justify-end">
            <div className="relative w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Recycling program" 
                className="w-full rounded-sm"
              />
              <div className="absolute top-4 right-4 bg-lumina-turmeric text-white text-xs font-medium px-3 py-1 rounded-full">
                Earn Points
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
