import React from "react";
import { Heading, Text } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CompactIconsRating from "./compactIconsRating";

export default function Hero() {
  return (
    <>
      <section className="mt-[5rem] h-[70dvh] bg-stone-200">
        <div className="mx-auto my-auto flex w-full max-w-7xl items-center justify-between gap-4 py-8">
          <div className="flex-1">
            <div className="space-y-2 pb-8">
              <Heading size="3xl" className="tracking-[-0.50px]">
                Provide the best quality ingredients for home products
              </Heading>
              <Text
                size="md"
                className="leading-[35px] tracking-[-0.50px] !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst
                posuere, lectus dis vehicula augue elementum quam risus.
                Placerat dictum lobortis lacinia volutpat morbi cum justo
                commodo est aliquam, facilisi consequat ligula vivamus faucibus
              </Text>
              <Button
                size="6xl"
                variant="outline"
                className="bg-gray-800 font-semibold tracking-[-0.50px] text-white transition-all duration-100 hover:scale-105 hover:bg-gray-950 hover:text-white"
              >
                Meet our Team
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex w-[38%] flex-col items-start justify-start gap-[7px]">
                <div className="flex w-[58%] flex-row items-center justify-start gap-2.5">
                  <Heading
                    size="md"
                    className="!font-semibold tracking-[0.12px] text-black/70"
                  >
                    Ratings
                  </Heading>
                  <div className="flex w-[45%] flex-row items-center justify-start gap-[5px]">
                    <Image
                      src={"/images/img_ant_design_star_filled.svg"}
                      alt="image_one"
                      className="h-[30px] w-[30px]"
                      height={30}
                      width={30}
                    />
                    <Heading
                      size="md"
                      className="!font-semibold tracking-[0.12px]  text-black/70"
                    >
                      5.0
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex w-[37%] flex-row justify-center">
                <CompactIconsRating />
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Image
              src={"/images/img_rectangle_1492.png"}
              alt="our team hero"
              width={1050}
              height={1400}
              className="w-[70%] rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
