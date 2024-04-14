import React from "react";
import {
  HeroSection,
  CategoryCTA,
  BrandsWorkedWith,
  SecondCTA,
  NewArrivals,
  OurBenefits,
  ReadBlogSection,
} from "./home/exports";
import { products } from "../../assets/productArray";
import HomeProductCarousel from "./home/homeProductCarousel";

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
