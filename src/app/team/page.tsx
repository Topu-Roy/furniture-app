import React from "react";
import { teamMembers } from "../../assets/teamMembersArray";
import RenderTeamMembers from "./_components/RenderTeamMembers";
import TeamHeading from "./_components/teamHeading";

export default function TeamPage() {
  return (
    <div className="mt-[5rem] bg-stone-200 pt-2 md:pt-4 lg:pt-6">
      <TeamHeading />
      <RenderTeamMembers teamMembers={teamMembers} />
    </div>
  );
}
