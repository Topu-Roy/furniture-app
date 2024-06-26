import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CompactIconsRating from "./compactIconsRating";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";
import Link from "next/link";
import Rating from "@/app/products/_components/rating";

export default function Hero() {
  return (
    <>
      <section className="mt-[4rem] md:py-[5rem] md:px-4 md:h-[70dvh] bg-stone-100 py-8 pb-14">
        <div className="mx-auto my-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <div className="flex-1">
            <div className="space-y-4 text-center md:text-left px-4 md:px-0">
              <Heading>
                Provide the best quality ingredients for home products
              </Heading>
              <Text muted className="pb-4">
                We believe your home reflects your story.
                We curate a collection of quality furniture that&apos;s both beautiful and functional,
                helping you create spaces you love. Explore our selection and find pieces that inspire you!
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
            <div className="flex flex-col gap-2 pt-4 justify-center items-center md:justify-start md:items-start">
              <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-[7px]">
                <Text size="max" className="font-bold text-black/70">
                  Happy Customers
                </Text>
                <div className="flex md:w-[45%] flex-row items-center justify-start gap-[5px]">
                  <Rating rate={5} readonly={true} />
                  <Heading className=" text-black/70">5.0</Heading>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <CompactIconsRating />
              </div>
            </div>
          </div>
          <div className="md:flex flex-1 items-center justify-end hidden">
            <Image
              src={"https://utfs.io/f/fdd5b437-8fc0-4e9f-a79b-37032958f196-meirr.jpg"}
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
