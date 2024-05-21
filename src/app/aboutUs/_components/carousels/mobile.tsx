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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";
import { type TestimonialsArrayType } from "@/assets/testimonialsArray";

type props = {
    testimonials: TestimonialsArrayType[];
};

export default function Mobile(props: props) {
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
        <div>Mobile</div>
    )
}
