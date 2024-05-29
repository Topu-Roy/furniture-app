import React from "react";
import { getAllProducts } from "@/actions/productAction";
import HeroSection from "./_components/home/_components/heroSection";
import BrandsWorkedWith from "./_components/home/_components/brandsWorkedWith";
import CategoryCTA from "./_components/home/_components/categoryCTA";
import HomeProductCarousel from "./_components/home/_components/homeProductCarousel";
import SecondCTA from "./_components/home/_components/secondCTA";
import NewArrivals from "./_components/home/_components/newArrivals";
import OurBenefits from "./_components/home/_components/ourBenefits";
import ReadBlogSection from "./_components/home/_components/readBlogSection";

export default async function HomepagePage() {
  const products = await getAllProducts();

  if (!products) {
    console.error(products);
    return (
      <div className="">
        Products not found.
      </div>
    )
  }

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