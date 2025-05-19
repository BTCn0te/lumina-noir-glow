
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Mock data for blog posts
const blogPosts = [
  {
    id: "blog-1",
    title: "Understanding Hyperpigmentation in Melanin-Rich Skin",
    excerpt: "Learn about the causes of hyperpigmentation and the most effective treatments for dark skin tones.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    date: "May 15, 2025",
    slug: "understanding-hyperpigmentation",
  },
  {
    id: "blog-2",
    title: "The Best Ingredients for Acne on Dark Skin",
    excerpt: "Discover which ingredients effectively target acne without causing post-inflammatory hyperpigmentation.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    date: "May 10, 2025",
    slug: "best-ingredients-acne-dark-skin",
  },
  {
    id: "blog-3",
    title: "Founder's Story: The Journey to Creating Lumina Noir",
    excerpt: "Our founder shares her personal skin struggles and how they inspired the creation of Lumina Noir.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    date: "May 5, 2025",
    slug: "founders-story",
  },
];

export function BlogTeaser() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium">Journal</h2>
          <Link to="/journal" className="mt-4 md:mt-0 text-lumina-cacao hover:text-lumina-cacao/80 transition-colors flex items-center">
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-0 shadow-none hover-scale overflow-hidden">
              <Link to={`/journal/${post.slug}`} className="block aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </Link>
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <Link to={`/journal/${post.slug}`}>
                  <h3 className="text-xl font-medium mb-2 line-clamp-2">{post.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="ghost" 
                  className="px-0 text-lumina-cacao hover:text-lumina-cacao/80 hover:bg-transparent"
                  asChild
                >
                  <Link to={`/journal/${post.slug}`}>
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
