import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Hero from "./hero";
import WorkedWith from "./workedWith";
import OurTeam from "./ourTeam";
import SecondCTA from "./secondCTA";
import Testimonials from "./testimonials";

export default function AboutusPage() {


  return (
    <>
      <NavBar />
      <Hero />
      <WorkedWith />
      <OurTeam />
      <SecondCTA />
      <Testimonials />
      <Footer className="flex flex-col items-center justify-center w-full" />
    </>
  );
}
