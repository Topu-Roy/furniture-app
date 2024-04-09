import React from "react";
import { Heading, Text } from "@/components";
import { Button } from "@/components/ui/button";
import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mt-[5rem] w-full py-8 md:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="my-[5px] flex w-full max-w-[1290px] flex-col-reverse items-center justify-between px-2 md:flex-row">
          <div className="flex w-full flex-col items-start justify-start gap-[30px] md:w-[48%]">
            <div className="flex w-full flex-col items-start justify-start gap-2 md:justify-start">
              <Text
                size="lg"
                className={`${poppins.className} mt-4 tracking-[-0.50px] text-black/60 md:text-start`}
              >
                Interior Needs...
              </Text>
              <Text
                size="max"
                className={`${poppins.className} hidden text-start tracking-normal text-gray-900/80 md:block`} //* For bigger screens
              >
                Various new collections of furniture to decorate the corner of
                your house.
              </Text>
              <Heading
                size="2xl"
                className={`${poppins.className} tracking-normal text-gray-900/80 md:hidden`} //* For smaller screens
              >
                Various new collections of furniture to decorate the corner of
                your house.
              </Heading>
            </div>
            <Link href={"/shop"}>
              <Button
                size="9xl"
                className="border-2 border-solid font-medium tracking-[-0.50px]"
              >
                Shop Now
              </Button>
            </Link>
          </div>
          <div className="relative h-[90dvw] w-[95dvw] rounded-lg md:h-[23rem] md:w-[25rem] xl:h-[30rem] xl:w-[35rem]">
            <Image
              height={1000}
              width={1000}
              src="/hero/Lamp - Black - Vintage Desk Lamp (1).jpg"
              alt=""
              className="absolute left-0 top-0 w-[60%] rounded-lg bg-slate-600 object-cover"
            />
            <Image
              height={1000}
              width={1000}
              src="/hero/Bed - Brown - Four Poster Canopy Bed (2).jpg"
              alt=""
              className="absolute bottom-0 right-0 w-[60%] rounded-lg object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
