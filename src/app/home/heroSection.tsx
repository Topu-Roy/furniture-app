import React from "react";
import { Text } from "@/components";
import { Button } from "@/components/ui/button";
import { poppins } from "@/styles/font";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full bg-orange-50 py-10">
      <div className="mx-auto w-[80rem]">
        <div className="my-[5px] flex w-full max-w-[1290px] flex-row items-center justify-between">
          <div className="flex w-[48%] flex-col items-start justify-start gap-[30px]">
            <div className="flex w-full flex-col items-start justify-start gap-[26px]">
              <Text size="xl" className="!text-black-900 tracking-[-0.50px]">
                Interior Needs...
              </Text>
              <Text
                size="max"
                className={`!text-black-900 tracking-normal ${poppins.className}`}
              >
                Various new collections of furniture to decorate the corner of
                your house.
              </Text>
            </div>
            <Button
              size="9xl"
              className="min-w-[218px] border-2 border-solid  font-medium tracking-[-0.50px]"
            >
              Shop Now
            </Button>
          </div>
          <Image
            height={1000}
            width={1000}
            src="/images/img_nathan_oakley_o.png"
            alt="nathanoakleyo"
            className="w-[48%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
