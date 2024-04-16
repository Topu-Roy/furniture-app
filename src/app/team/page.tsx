import { Heading } from "../_components/heading";
import { Text } from "../_components/text";
import { teamMembers } from "../aboutUs/teamMembersArray";
import RenderTeamMembers from "./RenderTeamMembers";

export default function TeamPage() {
  return (
    <div className="mt-[5rem] bg-stone-200 pt-10">
      <Heading className="text-center tracking-[-0.50px]">
        Meet Our Team
      </Heading>
      <Text
        size="lg"
        className="text-center leading-[35px] tracking-[-0.50px] !text-gray-500"
      >
        We write various things related to furniture, from tips and what things{" "}
        <br />I need to pay attention to when choosing furniture
      </Text>

      <RenderTeamMembers teamMembers={teamMembers} />
    </div>
  );
}
