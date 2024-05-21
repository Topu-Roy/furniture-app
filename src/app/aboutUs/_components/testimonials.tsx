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
import { type TestimonialsArrayType } from "../../../assets/testimonialsArray";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

type Props = {
  testimonials: TestimonialsArrayType[];
};

const TestimonialCard = ({ item }: { item: TestimonialsArrayType }) => (
  <div className="my-10 flex h-[30dvh] w-[97%] mx-auto flex-col items-start justify-start gap-5 rounded-md border bg-stone-300/50 p-4">
    <div className="flex w-full flex-col items-center justify-start gap-4">
      <div className="flex w-full flex-col items-center justify-start gap-1">
        <Text size="xl" className="font-semibold">
          {item.headline}
        </Text>
        <div className="space-y-1">
          <div className="flex items-center justify-start">
            <RiDoubleQuotesL size={20} />
          </div>
          <Text size="md" className="opacity-0.5 h-[9dvh]">
            {item.text}
          </Text>
          <div className="flex items-center justify-end">
            <RiDoubleQuotesR size={20} />
          </div>
        </div>
      </div>
      <div className="flex mt-3 h-[5dvh] w-full flex-row items-center justify-start gap-4">
        <Avatar className="h-14 w-14 rounded-full">
          <AvatarImage src={item.imageURL} />
          <AvatarFallback>{item.name}</AvatarFallback>
        </Avatar>
        <div className="flex w-4/5 flex-col items-start justify-start gap-1">
          <Text size="md" className="font-medium">
            {item.name}
          </Text>
          <Text muted size="s">
            {item.location}
          </Text>
        </div>
      </div>
    </div>
  </div>
);

const createPageNumbers = (count: number, current: number, api: CarouselApi | undefined) => {
  return Array.from({ length: count }, (_, i) => (
    <Button
      variant={i === current - 1 ? "default" : "ghost"}
      key={i}
      className={cn("h-8 w-8 cursor-pointer rounded-full text-sm")}
      onClick={() => api?.scrollTo(i)}
    >
      {i + 1}
    </Button>
  ));
};

const Testimonials = ({ testimonials }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // Mobile screens
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet screens
      } else {
        setItemsPerSlide(3); // Wide screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!api) return;

    const numberOfPages = Math.ceil(testimonials.length / itemsPerSlide);
    setCount(numberOfPages);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, itemsPerSlide, testimonials.length]);

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    groupedTestimonials.push(testimonials.slice(i, i + itemsPerSlide));
  }

  const handlePageChange = (pageIndex: number) => {
    api?.scrollTo(pageIndex);
  };

  return (
    <div className="mx-auto my-auto flex h-[65dvh] flex-col items-center justify-center bg-slate-300/50 py-14">
      <Heading className="text-center">Hear from our customers</Heading>
      <Carousel
        setApi={setApi}
        className="mx-auto w-[75%] lg:w-[80rem]"
        plugins={[Autoplay({ delay: 10000 })]}
      >
        <CarouselContent>
          {groupedTestimonials.map((group, index) => (
            <CarouselItem key={index}>
              <div className="my-auto flex h-full flex-row items-center justify-between gap-4">
                {group.map((item) => (
                  <TestimonialCard key={item.name + item.imageURL} item={item} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePageChange(current - 2)} />
          </PaginationItem>
          {Array.from({ length: count }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={i === current - 1}
                onClick={() => handlePageChange(i)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {count > 5 && <PaginationEllipsis />}
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(current)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="flex items-center justify-center gap-4">
        {createPageNumbers(count, current, api)}
      </div>
    </div>
  );
};

export default Testimonials;
