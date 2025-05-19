
import React from "react";
import { ProductCard } from "../products/ProductCard";

// Mock data for featured products
const featuredProducts = [
  {
    id: "prod-1",
    handle: "vitamin-c-serum",
    brand: "Luminous Skin",
    name: "Vitamin C Brightening Serum",
    price: 48.00,
    rating: 4.8,
    isBIPOCOwned: true,
    mainImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    hoverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: "prod-2",
    handle: "turmeric-mask",
    brand: "Glow Culture",
    name: "Turmeric & Honey Purifying Mask",
    price: 32.00,
    rating: 4.7,
    mainImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    hoverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    isNew: true,
  },
  {
    id: "prod-3",
    handle: "niacinamide-toner",
    brand: "Noir Beauty",
    name: "Niacinamide Balancing Toner",
    price: 26.00,
    rating: 4.9,
    isBIPOCOwned: true,
    mainImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    hoverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: "prod-4",
    handle: "bakuchiol-retinol-alternative",
    brand: "Lumina Botanicals",
    name: "Bakuchiol Retinol Alternative Night Serum",
    price: 58.00,
    compareAtPrice: 68.00,
    rating: 4.6,
    mainImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    hoverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-10">Bestsellers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
