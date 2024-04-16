"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

type TeamMember = {
  id: number;
  role: string;
  name: string;
  imageUrl: string;
};

type props = {
  teamMembers: TeamMember[];
};

export default function RenderTeamMembers(props: props) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    setTeamMembers(props.teamMembers);
  }, [props.teamMembers]);

  <FaFacebookF />;
  <IoLogoWhatsapp />;
  <FaGithub />;

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 pb-20 pt-10">
      {teamMembers.map((member) => (
        <div className="w-full space-y-4 rounded-xl border p-4 shadow">
          <div className="group relative z-10 max-w-sm overflow-hidden rounded-xl">
            <Image
              className="aspect-square w-full transition-all duration-300 group-hover:scale-105"
              src={member.imageUrl}
              height={1024}
              width={1024}
              alt={member.name + " " + member.role}
            />

            <div className="pointer-events-none absolute bottom-0 left-0 z-[19] h-[40%] w-full translate-y-[150%] select-none bg-gradient-to-t from-white/50 to-transparent ring-0 transition-all duration-300 group-hover:translate-y-0" />
            <div className="absolute bottom-[3%] left-0 z-20 flex w-full translate-y-[150%] flex-row items-center justify-around gap-2 ring-0 transition-all duration-300 group-hover:translate-y-0">
              <div className="flex flex-row items-center justify-between gap-3">
                <Button className="flex items-center justify-center rounded-full p-2 transition-all duration-200">
                  <FaFacebookF
                    size={25}
                    className="text-blue-600 hover:scale-105"
                  />
                </Button>
                <Button className="flex items-center justify-center rounded-full p-2 transition-all duration-200">
                  <IoLogoWhatsapp
                    size={25}
                    className="text-green-600 hover:scale-105"
                  />
                </Button>
                <Button className="flex items-center justify-center rounded-full p-2 transition-all duration-200">
                  <FaGithub size={25} className="text-black hover:scale-105" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2">
            <span className="text-xl font-bold tracking-wide text-black/85">
              {member.name}
            </span>
            <span className="font-medium text-black/70">({member.role})</span>
          </div>
        </div>
      ))}
    </div>
  );
}
