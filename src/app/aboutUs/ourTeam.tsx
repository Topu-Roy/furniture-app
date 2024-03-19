"use client"
import React from 'react'
import { Heading, Slider, Text } from '@/components';
import TeamCardteam from '@/components/TeamCardteam';
import AliceCarousel, { DotsItem, EventObject } from 'react-alice-carousel';

export default function OurTeam() {
    const [sliderState1, setSliderState1] = React.useState(0);
    const sliderRef1 = React.useRef<AliceCarousel>(null);
    return (
        <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[51px] max-w-[1290px]">
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <Heading size="3xl" className="tracking-[-0.50px] text-center">
                        Meet Our Team
                    </Heading>
                    <Text size="lg" className="mb-1 !text-gray-500 tracking-[-0.50px] text-center">
                        We write various things related to furniture, from tips and what things I need to pay attention to
                        when choosing furniture
                    </Text>
                </div>
                <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 3 } }}
                    renderDotsItem={(props: DotsItem) => {
                        return props?.isActive ? (
                            <div className="h-[15px] w-[15px] mr-[15px] bg-blue_gray-900_01" />
                        ) : (
                            <div className="h-[15px] w-[15px] mr-[15px] bg-gray_200" />
                        );
                    }}
                    activeIndex={sliderState1}
                    onSlideChanged={(e: EventObject) => {
                        setSliderState1(e?.item);
                    }}
                    ref={sliderRef1}
                    className="w-full"
                    items={[...Array(9)].map(() => (
                        <React.Fragment key={Math.random()}>
                            <div className="flex flex-col items-center justify-start mx-2.5">
                                <TeamCardteam
                                    image="images/img_rectangle_1487_1.png"
                                    makejhane="Mia Lobey"
                                    financemanager="Accountant"
                                    className="flex flex-col items-center justify-start w-full gap-[30px]"
                                />
                            </div>
                        </React.Fragment>
                    ))}
                />
            </div>
        </div>
    )
}
