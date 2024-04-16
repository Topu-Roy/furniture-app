import React from "react";
import Hero from "./_components/hero";
import WorkedWith from "./_components/workedWith";
import OurTeam from "./_components/ourTeam";
import Testimonials from "./_components/testimonials";
import { teamMembers } from "./teamMembersArray";
import { testimonialsArray } from "./testimonialsArray";
import SecondCTA from "../home/_components/secondCTA";

export default function AboutusPage() {
  return (
    <>
      <Hero />
      <WorkedWith />
      <OurTeam teamMembers={teamMembers} />
      <SecondCTA />
      <Testimonials testimonials={testimonialsArray} />
    </>
  );
}
