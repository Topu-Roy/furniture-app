import React from "react";
import { products } from "../../assets/productArray";
import HomeProductCarousel from "./home/homeProductCarousel";
import HeroSection from "./home/heroSection";
import BrandsWorkedWith from "./home/brandsWorkedWith";
import CategoryCTA from "./home/categoryCTA";
import NewArrivals from "./home/newArrivals";
import OurBenefits from "./home/ourBenefits";
import ReadBlogSection from "./home/readBlogSection";
import SecondCTA from "./home/secondCTA";

export default function HomepagePage() {
  return (
    <div className="bg-stone-200">
      <HeroSection />
      <BrandsWorkedWith />
      <CategoryCTA />
      <HomeProductCarousel />
      <SecondCTA />
      <NewArrivals products={products} />
      <OurBenefits />
      <ReadBlogSection />
    </div>
  );
}
