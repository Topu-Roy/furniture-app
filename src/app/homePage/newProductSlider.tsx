"use client"
import React from 'react'
import { Heading, Slider, Text } from '@/components';
import HomepageCardproduct from '@/components/HomepageCardproduct';
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";


export default function NewProductSlider() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef<AliceCarousel>(null);
    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex flex-row justify-center w-full py-10">
                <div className="flex flex-col items-center justify-start w-full gap-[45px] max-w-[1290px]">
                    <div className="flex flex-col items-center justify-center w-full gap-[21px]">
                        <Heading size="3xl" className="tracking-[-0.50px] text-center">
                            <span className="text-black-900">Our </span>
                            <span className="text-black-900">Newest</span>
                            <span className="text-black-900">Product</span>
                        </Heading>
                        <Text size="md" className="mb-1 !text-gray-500 tracking-[-0.50px] text-center">
                            Made of the best materials and with a design that follows the times
                        </Text>
                    </div>
                    <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                        renderDotsItem={(props: DotsItem) => {
                            return props?.isActive ? (
                                <div className="h-[15px] w-[15px] mr-[15px] bg-blue_gray-900_01" />
                            ) : (
                                <div className="h-[15px] w-[15px] mr-[15px] bg-gray_200" />
                            );
                        }}
                        activeIndex={sliderState}
                        onSlideChanged={(e: EventObject) => {
                            setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        className="w-full"
                        items={[...Array(3)].map(() => (
                            <React.Fragment key={Math.random()}>
                                <div className="flex flex-col gap-[47px] mx-auto">
                                    <div className="flex flex-row justify-start w-full gap-[19px]">
                                        <HomepageCardproduct
                                            imageOne="images/img_image_400x308.png"
                                            status="New"
                                            className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                        />
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
                                            imageOne="images/img_image_2.png"
                                            status="New"
                                            className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                        />
                                    </div>
                                    <div className="flex flex-row justify-start w-full gap-[19px]">
                                        <HomepageCardproduct
                                            imageOne="images/img_image_3.png"
                                            status="New"
                                            className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                        />
                                        <HomepageCardproduct
                                            imageOne="images/img_image_4.png"
                                            status="New"
                                            className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                        />
                                        <HomepageCardproduct
                                            imageOne="images/img_image_5.png"
                                            status="New"
                                            className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                        />
                                        <HomepageCardproduct
                                            imageOne="images/img_image_6.png"
                                            status="New"
                                            className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    />
                </div>
            </div>
        </div>
    )
}
