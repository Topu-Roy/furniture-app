import React from "react";
import { Heading, Text } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SecondCTA() {
  return (
    <div className="w-full bg-yellow-100 py-10">
      <div className="mx-auto flex w-[80rem] items-center justify-center">
        <div className="m-auto flex w-full flex-row justify-between p-4">
          <div className="flex h-full w-[535px] flex-col items-center justify-start">
            <Image
              src="/images/white-sofa.png"
              height={1380}
              width={1230}
              alt="insideweather"
              className="object-cover"
            />
          </div>
          <div className="my-auto mb-[95px] ml-[61px] flex w-[38%] flex-col items-start justify-center gap-[30px]">
            <div className="flex w-full flex-col items-start justify-start gap-[17px]">
              <Text
                size="lg"
                className="tracking-[-0.50px] !text-blue_gray-900_01"
              >
                Interior Modern
              </Text>
              <Heading size="3xl" className="leading-[60px] tracking-[-0.50px]">
                Arrange your home in such a way with our modern interiors
              </Heading>
            </div>
            <Button
              size="9xl"
              variant="outline"
              className="min-w-[218px] font-medium tracking-[-0.50px] transition-all duration-100 hover:scale-105"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
