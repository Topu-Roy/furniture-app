"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components";

type props = {
    teamMembers: {
        id: number;
        role: string;
        name: string;
        imageUrl: string;
    }[]
}

export default function OurTeam(props: props) {
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
        <div className="py-14 space-y-8 h-[80dvh] flex justify-center items-center flex-col">
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
                className="max-w-7xl w-full mx-auto"
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="w-full flex justify-center items-center gap-4">
                            {props.teamMembers.slice(0, 3).map(member => (
                                <div className="border rounded-xl p-4 space-y-4 shadow">
                                    <div className="w-full">
                                        <Image
                                            className="aspect-square w-full rounded-xl"
                                            src={member.imageUrl}
                                            height={1024}
                                            width={1024}
                                            alt={member.name + " " + member.role}
                                        />
                                    </div>

                                    <div className="flex justify-start items-center gap-2">
                                        <span className="font-bold tracking-wide text-xl text-black/85">{member.name}</span>
                                        <span className="font-medium text-black/70">({member.role})</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full flex justify-center items-center">
                            {props.teamMembers.slice(3, 6).map(member => (
                                <div className="border rounded-xl p-4 space-y-4 shadow">
                                    <div className="w-full">
                                        <Image
                                            className="aspect-square w-full rounded-xl"
                                            src={member.imageUrl}
                                            height={1024}
                                            width={1024}
                                            alt={member.name + " " + member.role}
                                        />
                                    </div>

                                    <div className="flex justify-start items-center gap-2">
                                        <span className="font-bold tracking-wide text-xl text-black/85">{member.name}</span>
                                        <span className="font-medium text-black/70">({member.role})</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full flex justify-center items-center">
                            {props.teamMembers.slice(6, 9).map(member => (
                                <div className="border rounded-xl p-4 space-y-4 shadow">
                                    <div className="w-full">
                                        <Image
                                            className="aspect-square w-full rounded-xl"
                                            src={member.imageUrl}
                                            height={1024}
                                            width={1024}
                                            alt={member.name + " " + member.role}
                                        />
                                    </div>

                                    <div className="flex justify-start items-center gap-2">
                                        <span className="font-bold tracking-wide text-xl text-black/85">{member.name}</span>
                                        <span className="font-medium text-black/70">({member.role})</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="w-full flex justify-center items-center gap-4">
                {pageNumbers}
            </div>
        </div>
    )
}
