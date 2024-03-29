import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import React from "react";
import { GrPowerReset } from "react-icons/gr";

type props = {
  title: string;
  handleReset(): void;
};

export default function HeadingAndReset(props: props) {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-2">
      <Heading>{props.title}</Heading>
      <Button
        variant={"outline"}
        className="rounded-full p-2"
        onClick={props.handleReset}
      >
        <GrPowerReset size={18} className="text-gray-700/90" />
      </Button>
    </div>
  );
}
