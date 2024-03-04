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
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function HomepagePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BrandsWorkedWith />
      <CategoryCTA />
      <NewProductCarousel />
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
