import React from "react";
import RenderProductCarousel from "./renderProductCarousel";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";

export default function HomeProductCarousel() {
  return (
    <div className="bg-wh flex flex-col items-center justify-center bg-white py-10 lg:py-16">
      <div className="flex w-full flex-col items-center justify-center gap-5 pb-10">
        <Heading>Our Newest Products</Heading>
        <Text muted={true} className={"mb-1 text-center"}>
          Made of the best materials and with a design that follows the times
        </Text>
      </div>

      <RenderProductCarousel />
    </div>
  );
}
