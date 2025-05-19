
import React from "react";
import { ExternalLink } from "lucide-react";

const ugcPosts = [
  {
    id: "ugc-1",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    platform: "TikTok",
    username: "@glowwithme",
    url: "https://tiktok.com/@glowwithme",
  },
  {
    id: "ugc-2",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    platform: "Instagram",
    username: "@beautyrevealed",
    url: "https://instagram.com/@beautyrevealed",
  },
  {
    id: "ugc-3",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    platform: "TikTok",
    username: "@skincareroutine",
    url: "https://tiktok.com/@skincareroutine",
  },
];

export function UGCReel() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-4">See Lumina Noir In Action</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our community shares their real experiences with our products.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ugcPosts.map((post) => (
            <a 
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover-scale aspect-square overflow-hidden rounded-sm"
            >
              <img 
                src={post.image} 
                alt={`${post.username} post`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                <ExternalLink className="mb-2 w-6 h-6" />
                <p className="font-medium">{post.username}</p>
                <p className="text-sm">{post.platform}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
