"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type TestimonialsArrayType } from "../testimonialsArray";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";

type props = {
  testimonials: TestimonialsArrayType[];
};

export default function Testimonials(props: props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const pageNumbers = Array.from({ length: count }, (_, i) => (
    <Button
      variant={i === current - 1 ? "default" : "ghost"}
      key={i}
      className={cn("h-8 w-8 cursor-pointer rounded-full text-sm")}
      onClick={() => api?.scrollTo(i)}
    >
      {i + 1}
    </Button>
  ));
  return (
    <div className="mx-auto my-auto flex h-[65dvh] flex-col items-center justify-center bg-slate-300/50 py-14">
      <Heading className="text-center">Here from our customers</Heading>
      <Carousel
        setApi={setApi}
        className="mx-auto w-[80rem]"
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="my-auto flex h-full flex-row items-center justify-between gap-4">
              {props.testimonials.slice(0, 3).map((item) => (
                <div
                  key={item.name + item.imageURL}
                  className="my-10 flex h-[28dvh] w-full flex-col items-start justify-start  gap-5 rounded-md border bg-stone-300/50 p-4"
                >
                  <div className="flex w-full flex-col items-center justify-start gap-4">
                    <div className="flex w-full flex-col items-center justify-start gap-1">
                      <Heading className="!font-poppins tracking-[0.12px]">
                        {item.headline}
                      </Heading>

                      <div className="space-y-1">
                        <div className="flex items-center justify-start">
                          <RiDoubleQuotesL size={20} />
                        </div>
                        <Text
                          size="md"
                          className="!text-black-900_87 !font-poppins opacity-0.5 h-[9dvh] tracking-[0.12px]"
                        >
                          {item.text}
                        </Text>
                        <div className="flex items-center justify-end">
                          <RiDoubleQuotesR size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[5dvh] w-full flex-row items-center justify-start gap-4">
                      <Avatar className="h-14 w-14 rounded-full">
                        <AvatarImage src={item.imageURL} />
                        <AvatarFallback>{item.name}</AvatarFallback>
                      </Avatar>
                      <div className="flex w-4/5 flex-col items-start justify-start gap-1">
                        <Heading className="!font-poppins tracking-[0.12px]">
                          {item.name}
                        </Heading>
                        <Text className="!text-black-900_7f_01 !font-poppins tracking-[0.12px]">
                          {item.location}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="my-auto flex h-full flex-row items-center justify-between gap-4">
              {props.testimonials.slice(3, 6).map((item) => (
                <div
                  key={item.name + item.imageURL}
                  className="my-10 flex h-[28dvh] w-full flex-col items-start justify-start gap-5 rounded-md border bg-stone-300/50 p-4"
                >
                  <div className="flex w-full flex-col items-center justify-start gap-4">
                    <div className="flex w-full flex-col items-center justify-start gap-1">
                      <Heading className="!font-poppins tracking-[0.12px]">
                        {item.headline}
                      </Heading>

                      <div className="space-y-1">
                        <div className="flex items-center justify-start">
                          <RiDoubleQuotesL size={20} />
                        </div>
                        <Text
                          size="md"
                          className="!text-black-900_87 !font-poppins opacity-0.5 h-[9dvh] tracking-[0.12px]"
                        >
                          {item.text}
                        </Text>
                        <div className="flex items-center justify-end">
                          <RiDoubleQuotesR size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[5dvh] w-full flex-row items-center justify-start gap-4">
                      <Avatar className="h-14 w-14 rounded-full">
                        <AvatarImage src={item.imageURL} />
                        <AvatarFallback>{item.name}</AvatarFallback>
                      </Avatar>
                      <div className="flex w-4/5 flex-col items-start justify-start gap-1">
                        <Heading className="!font-poppins tracking-[0.12px]">
                          {item.name}
                        </Heading>
                        <Text className="!text-black-900_7f_01 !font-poppins tracking-[0.12px]">
                          {item.location}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="my-auto flex h-full flex-row items-center justify-between gap-4">
              {props.testimonials.slice(6, 9).map((item) => (
                <div
                  key={item.name + item.imageURL}
                  className="my-10 flex h-[28dvh] w-full flex-col items-start justify-start gap-5 rounded-md border bg-stone-300/50 p-4"
                >
                  <div className="flex w-full flex-col items-center justify-start gap-4">
                    <div className="flex w-full flex-col items-center justify-start gap-1">
                      <Heading className="!font-poppins tracking-[0.12px]">
                        {item.headline}
                      </Heading>

                      <div className="space-y-1">
                        <div className="flex items-center justify-start">
                          <RiDoubleQuotesL size={20} />
                        </div>
                        <Text
                          size="md"
                          className="!text-black-900_87 !font-poppins opacity-0.5 h-[9dvh] tracking-[0.12px]"
                        >
                          {item.text}
                        </Text>
                        <div className="flex items-center justify-end">
                          <RiDoubleQuotesR size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[5dvh] w-full flex-row items-center justify-start gap-[19px]">
                      <Avatar className="h-14 w-14 rounded-full">
                        <AvatarImage src={item.imageURL} />
                        <AvatarFallback>{item.name}</AvatarFallback>
                      </Avatar>
                      <div className="flex w-4/5 flex-col items-start justify-start gap-1">
                        <Heading className="!font-poppins tracking-[0.12px]">
                          {item.name}
                        </Heading>
                        <Text className="!text-black-900_7f_01 !font-poppins tracking-[0.12px]">
                          {item.location}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex items-center justify-center gap-4">
        {pageNumbers}
      </div>
    </div>
  );
}
