"use client"
import React from 'react'
import { Heading, Text } from '@/components';
import HomepageCardproduct from '@/components/HomepageCardproduct';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay"
import { Button } from '@/components/ui/button';


export default function newProductCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
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
            key={i}
            className={cn("text-sm bg-gray-200 text-muted-foreground px-2 py-1 cursor-pointer rounded-full h-8 w-8",
                {
                    "bg-black rounded-full": i === current - 1
                }
            )}
            onClick={() => api?.scrollTo(i)}
        >
            {i + 1}
        </Button>
    ));

    return (

        <div className="flex flex-col justify-center items-center pb-10">
            <div className="flex flex-col items-center justify-center w-full gap-[21px] pb-10">
                <Heading size="3xl" className="tracking-[-0.50px] text-center">
                    <Text size='max' className={cn("text-gray-900")}>
                        Our Newest Products
                    </Text>
                </Heading>
                <Text size="md" className={cn("mb-1 !text-gray-500 tracking-[-0.50px] text-center")}>
                    Made of the best materials and with a design that follows the times
                </Text>
            </div>
            <Carousel
                setApi={setApi}
                className='w-[80rem] mx-auto'
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}
            >
                <CarouselContent className='mx-auto'>
                    <CarouselItem>
                        <div className="flex flex-col justify-start w-full gap-4">
                            <div className="flex justify-center items-center gap-4">
                                <HomepageCardproduct
                                    imageOne="images/img_image_3.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-4"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_4.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-4"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_5.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-4"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_6.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-4"
                                />
                            </div>
                            <div className="flex flex-row justify-start w-full gap-4">
                                <HomepageCardproduct
                                    imageOne="images/img_image_400x308.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_1.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_400x308.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_2.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                />
                            </div>

                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex flex-col justify-start w-full gap-4">
                            <div className="flex flex-row justify-start w-full gap-4">
                                <HomepageCardproduct
                                    imageOne="images/img_image_400x308.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_1.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_400x308.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_2.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                />
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <HomepageCardproduct
                                    imageOne="images/img_image_3.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-4"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_4.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-4"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_5.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-4"
                                />
                                <HomepageCardproduct
                                    imageOne="images/img_image_6.png"
                                    status="New"
                                    className="flex flex-col items-center justify-start w-[24%] gap-4"
                                />
                            </div>

                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center items-center gap-2 py-4">
                    <div className='flex justify-center items-center gap-2 py-2 text-center text-sm text-muted-foreground'>
                        <span>Page:</span>
                        {pageNumbers}
                    </div>
                </div>
            </Carousel>
        </div>
    )
}