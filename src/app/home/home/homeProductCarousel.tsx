import React from "react";
import RenderProductCarousel from "./renderProductCarousel";
import { Heading, Text } from "@/components";
import { cn } from "@/lib/utils";

export default function HomeProductCarousel() {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="flex w-full flex-col items-center justify-center gap-[21px] pb-10">
        <Heading size="3xl" className="text-center tracking-[-0.50px]">
          <Text size="max" className={cn("text-gray-900")}>
            Our Newest Products
          </Text>
        </Heading>
        <Text
          size="md"
          className={cn("mb-1 text-center tracking-[-0.50px] !text-gray-500")}
        >
          Made of the best materials and with a design that follows the times
        </Text>
      </div>

      <RenderProductCarousel />
    </div>
  );
}
