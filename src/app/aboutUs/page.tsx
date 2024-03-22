import React from "react";
import Hero from "./hero";
import WorkedWith from "./workedWith";
import OurTeam from "./ourTeam";
import SecondCTA from "./secondCTA";
import Testimonials from "./testimonials";
import { teamMembers } from "./teamMembersArray";
import { testimonialsArray } from "./testimonialsArray";

export default function AboutusPage() {
  return (
    <>
      <Hero />
      <WorkedWith />
      <OurTeam teamMembers={teamMembers} />
      <SecondCTA />
      <Testimonials testimonials={testimonialsArray} />
      {/* <Footer className="flex w-full flex-col items-center justify-center" /> */}
    </>
  );
}
