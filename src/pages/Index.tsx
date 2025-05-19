
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CleanBeauty } from "@/components/home/CleanBeauty";
import { UGCReel } from "@/components/home/UGCReel";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { PactBanner } from "@/components/home/PactBanner";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategoryTiles />
      <FeaturedProducts />
      <CleanBeauty />
      <UGCReel />
      <BlogTeaser />
      <PactBanner />
      <NewsletterSignup />
    </Layout>
  );
};

export default Index;
