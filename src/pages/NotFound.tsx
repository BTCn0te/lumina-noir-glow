
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-medium text-lumina-cacao mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          We can't seem to find the page you're looking for. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="bg-lumina-cacao hover:bg-lumina-cacao/90 text-white"
            asChild
          >
            <Link to="/">Return Home</Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-lumina-cacao text-lumina-cacao hover:bg-lumina-cacao hover:text-white"
            asChild
          >
            <Link to="/collections/skin-care">Shop Skincare</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
