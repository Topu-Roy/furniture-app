import React from "react";
import Hero from "./_components/hero";
import Testimonials from "./_components/testimonials";
import { teamMembers } from "../../assets/teamMembersArray";
import { testimonialsArray } from "../../assets/testimonialsArray";
import Team from "./_components/renderTeam";
import BrandsWorkedWith from "../_components/home/_components/brandsWorkedWith";
import SecondCTA from "../_components/home/_components/secondCTA";

export const dynamic = "force-static";

export default function AboutusPage() {
  return (
    <>
      <Hero />
      <BrandsWorkedWith />
      <Team teamMembers={teamMembers} className="bg-stone-100" />
      <SecondCTA />
      <Testimonials testimonials={testimonialsArray} />
    </>
  );
}
