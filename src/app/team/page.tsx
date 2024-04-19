import { Heading } from "../_components/heading";
import { Text } from "../_components/text";
import { teamMembers } from "../aboutUs/teamMembersArray";
import RenderTeamMembers from "./RenderTeamMembers";

export default function TeamPage() {
  return (
    <div className="mt-[5rem] bg-stone-200 pt-2 md:pt-4 lg:pt-6">
      <Heading className="text-center">Meet Our Team</Heading>
      <Text size="lg" muted className="px-2 text-center md:px-0">
        We write various things related to furniture, from tips and what things{" "}
        <br className="hidden md:block" />I need to pay attention to when
        choosing furniture
      </Text>

      <RenderTeamMembers teamMembers={teamMembers} />
    </div>
  );
}
