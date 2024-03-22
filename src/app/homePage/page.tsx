import React from "react";
import {
  HeroSection,
  CategoryCTA,
  BrandsWorkedWith,
  SecondCTA,
  NewArrivals,
  OurBenefits,
  ReadBlogSection,
  NewProductCarousel,
} from "./exports";
import { products } from "../../assets/productArray";

export default function HomepagePage() {
  return (
    <>
      <HeroSection />
      <BrandsWorkedWith />
      <CategoryCTA />
      <NewProductCarousel products={products} />
      <SecondCTA />
      <NewArrivals products={products} />
      <OurBenefits />
      <ReadBlogSection />
    </>
  );
}
