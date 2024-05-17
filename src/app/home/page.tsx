import React from "react";
import BrandsWorkedWith from "./_components/brandsWorkedWith";
import CategoryCTA from "./_components/categoryCTA";
import HeroSection from "./_components/heroSection";
import HomeProductCarousel from "./_components/homeProductCarousel";
import NewArrivals from "./_components/newArrivals";
import OurBenefits from "./_components/ourBenefits";
import ReadBlogSection from "./_components/readBlogSection";
import SecondCTA from "./_components/secondCTA";
import { api } from "@/trpc/server";

export default async function HomepagePage() {
  const products = await api.product.getAllProducts();
  return (
    <div className="bg-stone-200">
      <HeroSection />
      <BrandsWorkedWith />
      <CategoryCTA />
      <HomeProductCarousel products={products} />
      <SecondCTA />
      <NewArrivals products={products} />
      <OurBenefits />
      <ReadBlogSection />
    </div>
  );
}
