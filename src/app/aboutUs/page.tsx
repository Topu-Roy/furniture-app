import React from "react";
import Hero from "./_components/hero";
import OurTeam from "./_components/ourTeam";
import Testimonials from "./_components/testimonials";
import { teamMembers } from "../../assets/teamMembersArray";
import { testimonialsArray } from "../../assets/testimonialsArray";
import SecondCTA from "../home/_components/secondCTA";
import BrandsWorkedWith from "../home/_components/brandsWorkedWith";

export default function AboutusPage() {
  return (
    <>
      <Hero />
      <BrandsWorkedWith />
      <OurTeam teamMembers={teamMembers} />
      <SecondCTA />
      <Testimonials testimonials={testimonialsArray} />
    </>
  );
}
