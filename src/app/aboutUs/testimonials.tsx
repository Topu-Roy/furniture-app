"use client"
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { type TestimonialsArrayType } from "./testimonialsArray";
import { Heading, Text } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

type props = {
    testimonials: TestimonialsArrayType[]
}

export default function Testimonials(props: props) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const pageNumbers = Array.from({ length: count }, (_, i) => (
        <Button
            variant={i === current - 1 ? 'default' : 'ghost'}
            key={i}
            className={cn("text-sm cursor-pointer rounded-full h-8 w-8")}
            onClick={() => api?.scrollTo(i)}
        >
            {i + 1}
        </Button>
    ));
    return (
        <div className="h-[65dvh] flex justify-center items-center flex-col my-auto mx-auto bg-slate-300/50 py-14">
            <Heading size="2xl" className="text-center">
                Here from our customers
            </Heading>
            <Carousel
                setApi={setApi}
                className='w-[80rem] mx-auto'
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex flex-row justify-between items-center gap-4 my-auto h-full">
                            {props.testimonials.slice(0, 3).map(item => (
                                <div
                                    key={item.name + item.imageURL}
                                    className="bg-stone-300/50 p-4 h-[28dvh] rounded-md border flex flex-col items-start justify-start w-full gap-5 my-10"
                                >

                                    <div className="flex flex-col items-center justify-start w-full gap-4">
                                        <div className="flex flex-col items-center justify-start w-full gap-1">
                                            <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                {item.headline}
                                            </Heading>

                                            <div className="space-y-1">
                                                <div className="flex justify-start items-center">
                                                    <RiDoubleQuotesL size={20} />
                                                </div>
                                                <Text
                                                    size="md"
                                                    className="!text-black-900_87 h-[9dvh] tracking-[0.12px] !font-poppins opacity-0.5"
                                                >
                                                    {item.text}
                                                </Text>
                                                <div className="flex justify-end items-center">
                                                    <RiDoubleQuotesR size={20} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex h-[5dvh] flex-row justify-start items-center w-full gap-4">
                                            <Avatar className="h-14 w-14 rounded-full">
                                                <AvatarImage src={item.imageURL} />
                                                <AvatarFallback>{item.name}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col items-start justify-start w-4/5 gap-1">
                                                <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                    {item.name}
                                                </Heading>
                                                <Text className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
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
                        <div className="flex flex-row justify-between items-center gap-4 my-auto h-full">
                            {props.testimonials.slice(3, 6).map(item => (
                                <div
                                    key={item.name + item.imageURL}
                                    className="bg-stone-300/50 p-4 h-[28dvh] rounded-md border flex flex-col items-start justify-start w-full gap-5 my-10"
                                >

                                    <div className="flex flex-col items-center justify-start w-full gap-4">
                                        <div className="flex flex-col items-center justify-start w-full gap-1">
                                            <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                {item.headline}
                                            </Heading>

                                            <div className="space-y-1">
                                                <div className="flex justify-start items-center">
                                                    <RiDoubleQuotesL size={20} />
                                                </div>
                                                <Text
                                                    size="md"
                                                    className="!text-black-900_87 h-[9dvh] tracking-[0.12px] !font-poppins opacity-0.5"
                                                >
                                                    {item.text}
                                                </Text>
                                                <div className="flex justify-end items-center">
                                                    <RiDoubleQuotesR size={20} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex h-[5dvh] flex-row justify-start items-center w-full gap-4">
                                            <Avatar className="h-14 w-14 rounded-full">
                                                <AvatarImage src={item.imageURL} />
                                                <AvatarFallback>{item.name}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col items-start justify-start w-4/5 gap-1">
                                                <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                    {item.name}
                                                </Heading>
                                                <Text className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
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
                        <div className="flex flex-row justify-between items-center gap-4 my-auto h-full">
                            {props.testimonials.slice(6, 9).map(item => (
                                <div
                                    key={item.name + item.imageURL}
                                    className="bg-stone-300/50 p-4 h-[28dvh] rounded-md border flex flex-col items-start justify-start w-full gap-5 my-10"
                                >

                                    <div className="flex flex-col items-center justify-start w-full gap-4">
                                        <div className="flex flex-col items-center justify-start w-full gap-1">
                                            <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                {item.headline}
                                            </Heading>

                                            <div className="space-y-1">
                                                <div className="flex justify-start items-center">
                                                    <RiDoubleQuotesL size={20} />
                                                </div>
                                                <Text
                                                    size="md"
                                                    className="!text-black-900_87 h-[9dvh] tracking-[0.12px] !font-poppins opacity-0.5"
                                                >
                                                    {item.text}
                                                </Text>
                                                <div className="flex justify-end items-center">
                                                    <RiDoubleQuotesR size={20} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex h-[5dvh] flex-row justify-start items-center w-full gap-[19px]">
                                            <Avatar className="h-14 w-14 rounded-full">
                                                <AvatarImage src={item.imageURL} />
                                                <AvatarFallback>{item.name}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col items-start justify-start w-4/5 gap-1">
                                                <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                    {item.name}
                                                </Heading>
                                                <Text className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
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
            <div className="flex justify-center items-center gap-4">
                {pageNumbers}
            </div>
        </div>
    )
}
