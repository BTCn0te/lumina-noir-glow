
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "hyperpigmentation",
    name: "Hyperpigmentation",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    path: "/collections/hyperpigmentation",
  },
  {
    id: "acne",
    name: "Acne",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    path: "/collections/acne",
  },
  {
    id: "glow",
    name: "Glow",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    path: "/collections/glow",
  },
  {
    id: "texture",
    name: "Texture",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    path: "/collections/texture",
  },
];

export function CategoryTiles() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-10">Shop by Concern</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.path}
              className="group relative hover-scale rounded-sm overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-medium text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
