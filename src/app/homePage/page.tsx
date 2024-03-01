import React from "react";
import {
  Header,
  HeroSection,
  CategoryCTA,
  BrandsWorkedWith,
  SecondCTA,
  NewArrivals,
  OurBenefits,
  ReadBlogSection,
  NewProductSlider,
} from "./exports";
import Footer from "@/components/Footer";

export default function HomepagePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandsWorkedWith />
      <CategoryCTA />
      <NewProductSlider />
      <SecondCTA />
      <NewArrivals />
      <OurBenefits />
      <ReadBlogSection />
      <div className="bg-gray-50 pt-20">
        <Footer />
      </div>
    </>
  );
}
