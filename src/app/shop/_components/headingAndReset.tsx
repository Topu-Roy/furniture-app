import React from "react";
import { poppins } from "@/styles/font";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GrPowerReset } from "react-icons/gr";

type props = {
  title: string;
  handleReset(): void;
};

export default function HeadingAndReset(props: props) {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-2">
      <h3
        className={cn("text-xl font-bold text-gray-900/80", poppins.className)}
      >
        {props.title}
      </h3>
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
