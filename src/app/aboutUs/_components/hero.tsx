import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CompactIconsRating from "./compactIconsRating";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="mt-[5rem] h-[70dvh] bg-stone-200">
        <div className="mx-auto my-auto flex w-full max-w-7xl items-center justify-between gap-4 py-8">
          <div className="flex-1">
            <div className="space-y-2 pb-8">
              <Heading>
                Provide the best quality ingredients for home products
              </Heading>
              <Text muted>
                Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst
                posuere, lectus dis vehicula augue elementum quam risus.
                Placerat dictum lobortis lacinia volutpat morbi cum justo
                commodo est aliquam, facilisi consequat ligula vivamus faucibus
              </Text>
              <Link href={"/shop"}>
                <Button
                  size="6xl"
                  className="font-semibold transition-all duration-100 hover:scale-105"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <Text size="max" className="font-bold text-black/70">
                  Happy Customers
                </Text>
                <div className="flex w-[45%] flex-row items-center justify-start gap-[5px]">
                  <Image
                    src={"/images/img_ant_design_star_filled.svg"}
                    alt="image_one"
                    className="h-[30px] w-[30px]"
                    height={30}
                    width={30}
                  />
                  <Heading className=" text-black/70">5.0</Heading>
                </div>
              </div>
              <div className="flex w-[37%] flex-row justify-center">
                <CompactIconsRating />
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Image
              src={"/products/Lamp - Black - Vintage Desk Lamp (1).jpg"}
              alt="Topu Roy"
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
