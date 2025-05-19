
import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";

// Mock data for products
const mockProducts = [
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
  {
    id: "prod-5",
    handle: "exfoliating-toner",
    brand: "Luminous Skin",
    name: "AHA/BHA Exfoliating Toner",
    price: 34.00,
    rating: 4.7,
    mainImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    hoverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: "prod-6",
    handle: "hyaluronic-serum",
    brand: "Noir Beauty",
    name: "Hyaluronic Acid Hydrating Serum",
    price: 42.00,
    rating: 4.9,
    isBIPOCOwned: true,
    mainImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    hoverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
];

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const collectionMap: { [key: string]: { title: string; description: string } } = {
    "skin-care": {
      title: "Skin Care",
      description: "Effective, clean skincare formulated for melanin-rich skin. Target hyperpigmentation, acne, and texture concerns with our clinically-tested products.",
    },
    "makeup": {
      title: "Makeup",
      description: "Clean makeup in shades that celebrate and enhance melanin-rich skin tones. From foundations to lip colors, find your perfect match.",
    },
    "new-in": {
      title: "New Arrivals",
      description: "The latest additions to our clean beauty collection. Be the first to discover our newest innovations.",
    },
    "sale": {
      title: "Sale",
      description: "Limited-time offers on select Lumina Noir products. Clean beauty for less.",
    },
  };

  const collectionInfo = collectionMap[slug || ""] || {
    title: "Collection",
    description: "Browse our clean beauty products.",
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">{collectionInfo.title}</h1>
          <p className="text-muted-foreground">{collectionInfo.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CollectionPage;
