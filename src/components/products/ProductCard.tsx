
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus } from "lucide-react";

interface ProductCardProps {
  id: string;
  handle: string;
  brand: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  isBIPOCOwned?: boolean;
  mainImage: string;
  hoverImage?: string;
  isNew?: boolean;
}

export function ProductCard({
  id,
  handle,
  brand,
  name,
  price,
  compareAtPrice,
  rating,
  isBIPOCOwned = false,
  mainImage,
  hoverImage,
  isNew = false,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const formattedCompareAtPrice = compareAtPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(compareAtPrice)
    : null;

  return (
    <div 
      className="group relative hover-scale rounded-sm overflow-hidden transition-all duration-150 border border-transparent hover:border-lumina-turmeric"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Link */}
      <Link to={`/products/${handle}`} className="block aspect-square overflow-hidden">
        <img
          src={isHovered && hoverImage ? hoverImage : mainImage}
          alt={name}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Quick Add Button (visible on hover) */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button 
          size="icon" 
          variant="secondary"
          className="rounded-full bg-lumina-turmeric text-white h-10 w-10"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      {/* BIPOC-owned Badge */}
      {isBIPOCOwned && (
        <Badge className="absolute top-2 left-2 bg-lumina-cacao text-white hover:bg-lumina-cacao/90">
          BIPOC-owned
        </Badge>
      )}

      {/* New Badge */}
      {isNew && (
        <Badge className="absolute top-2 right-2 bg-lumina-turmeric text-white hover:bg-lumina-turmeric/90">
          New
        </Badge>
      )}

      {/* Product Info */}
      <div className="p-3 text-left">
        <div className="text-xs uppercase font-medium text-muted-foreground">{brand}</div>
        <Link to={`/products/${handle}`} className="block">
          <h3 className="font-medium mt-1 line-clamp-2">{name}</h3>
        </Link>
        
        {/* Price */}
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium">{formattedPrice}</span>
            {formattedCompareAtPrice && (
              <span className="text-muted-foreground line-through text-sm">
                {formattedCompareAtPrice}
              </span>
            )}
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center">
            <Star className="w-3.5 h-3.5 fill-lumina-turmeric text-lumina-turmeric" />
            <span className="text-xs ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
