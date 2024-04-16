import React from "react";
import Hero from "./hero";
import WorkedWith from "./workedWith";
import OurTeam from "./ourTeam";
import Testimonials from "./testimonials";
import { teamMembers } from "./teamMembersArray";
import { testimonialsArray } from "./testimonialsArray";
import SecondCTA from "../home/home/secondCTA";

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
