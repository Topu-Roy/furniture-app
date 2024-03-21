"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components";

type props = {
  teamMembers: {
    id: number;
    role: string;
    name: string;
    imageUrl: string;
  }[];
};

export default function OurTeam(props: props) {
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
    <div className="flex h-[80dvh] flex-col items-center justify-center space-y-8 py-14">
      <Heading size="2xl" className="text-center">
        Meet Our Talented Team Members
      </Heading>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        className="mx-auto w-full max-w-7xl"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="flex w-full items-center justify-center gap-4">
              {props.teamMembers.slice(0, 3).map((member) => (
                <div className="space-y-4 rounded-xl border p-4 shadow">
                  <div className="w-full">
                    <Image
                      className="aspect-square w-full rounded-xl"
                      src={member.imageUrl}
                      height={1024}
                      width={1024}
                      alt={member.name + " " + member.role}
                    />
                  </div>

                  <div className="flex items-center justify-start gap-2">
                    <span className="text-xl font-bold tracking-wide text-black/85">
                      {member.name}
                    </span>
                    <span className="font-medium text-black/70">
                      ({member.role})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex w-full items-center justify-center">
              {props.teamMembers.slice(3, 6).map((member) => (
                <div className="space-y-4 rounded-xl border p-4 shadow">
                  <div className="w-full">
                    <Image
                      className="aspect-square w-full rounded-xl"
                      src={member.imageUrl}
                      height={1024}
                      width={1024}
                      alt={member.name + " " + member.role}
                    />
                  </div>

                  <div className="flex items-center justify-start gap-2">
                    <span className="text-xl font-bold tracking-wide text-black/85">
                      {member.name}
                    </span>
                    <span className="font-medium text-black/70">
                      ({member.role})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex w-full items-center justify-center">
              {props.teamMembers.slice(6, 9).map((member) => (
                <div className="space-y-4 rounded-xl border p-4 shadow">
                  <div className="w-full">
                    <Image
                      className="aspect-square w-full rounded-xl"
                      src={member.imageUrl}
                      height={1024}
                      width={1024}
                      alt={member.name + " " + member.role}
                    />
                  </div>

                  <div className="flex items-center justify-start gap-2">
                    <span className="text-xl font-bold tracking-wide text-black/85">
                      {member.name}
                    </span>
                    <span className="font-medium text-black/70">
                      ({member.role})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex w-full items-center justify-center gap-4">
        {pageNumbers}
      </div>
    </div>
  );
}
