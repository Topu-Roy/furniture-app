"use client"
import React from "react";
import { Text, Heading, Img, Slider } from "../../components";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";


export default function Testimonials() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef<AliceCarousel>(null);
    return (
        <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-[46px] max-w-[1290px]">
            <Heading size="3xl" className="tracking-[0.12px] !font-poppins text-center !font-semibold">
                <span className="text-black-900 font-raleway font-bold">How happy are they with </span>
                <span className="text-black-900 font-raleway font-bold">our service</span>
            </Heading>
            <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                    renderDotsItem={(props: DotsItem) => {
                        return props?.isActive ? (
                            <div className="h-[15px] w-[15px] mr-2.5 bg-blue_gray-900_01" />
                        ) : (
                            <div className="h-[15px] w-[15px] mr-2.5 bg-gray_200" />
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
                            <div className="flex flex-row gap-[21px] mx-auto">
                                <div className="flex flex-row justify-center w-[33%] p-[26px]">
                                    <div className="flex flex-col items-start justify-start w-full gap-5 my-1">
                                        <Img
                                            src="images/img_bxs_quote_alt_left.svg"
                                            alt="bxsquotealt_one"
                                            className="h-[50px] w-[50px]"
                                        />
                                        <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                                            <div className="flex flex-col items-center justify-start w-full gap-1">
                                                <Heading size="md" className="tracking-[0.12px] !font-poppins leading-[35px]">
                                                    For the material and the chair as we expected it&#39;s good
                                                </Heading>
                                                <Text

                                                    className="!text-black-900_87 tracking-[0.12px] !font-poppins opacity-0.5 leading-[35px]"
                                                >
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the industry&#39;s standard dummy text ever.
                                                </Text>
                                            </div>
                                            <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                                                <Img
                                                    src="images/img_unsplash_wnolnjo7ts8_56x56.png"
                                                    alt="unsplash_one"
                                                    className="h-14 w-14 rounded-[50%]"
                                                />
                                                <div className="flex flex-col items-start justify-start w-4/5 pt-0.5 gap-px">
                                                    <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                        Dagruel Manulo
                                                    </Heading>
                                                    <Text className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
                                                        Sydney, Australia
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center w-[33%] p-[26px]">
                                    <div className="flex flex-col items-start justify-start w-full gap-5 my-1">
                                        <Img
                                            src="images/img_bxs_quote_alt_left.svg"
                                            alt="bxsquotealt_one"
                                            className="h-[50px] w-[50px]"
                                        />
                                        <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                                            <div className="flex flex-col items-center justify-start w-full gap-1">
                                                <Heading size="md" className="tracking-[0.12px] !font-poppins leading-[35px]">
                                                    For the material and the chair as we expected it&#39;s good
                                                </Heading>
                                                <Text

                                                    className="!text-black-900_87 tracking-[0.12px] !font-poppins opacity-0.5 leading-[35px]"
                                                >
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the industry&#39;s standard dummy text ever.
                                                </Text>
                                            </div>
                                            <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                                                <Img
                                                    src="images/img_unsplash_wnolnjo7ts8_1.png"
                                                    alt="unsplash_one"
                                                    className="h-14 w-14 rounded-[50%]"
                                                />
                                                <div className="flex flex-col items-start justify-start w-4/5 gap-1">
                                                    <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                        Zambi Owel
                                                    </Heading>
                                                    <Text className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
                                                        Sydney, Australia
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center w-[33%] p-[26px]">
                                    <div className="flex flex-col items-start justify-start w-full gap-5 my-1">
                                        <Img
                                            src="images/img_bxs_quote_alt_left.svg"
                                            alt="bxsquotealt_one"
                                            className="h-[50px] w-[50px]"
                                        />
                                        <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                                            <div className="flex flex-col items-center justify-start w-full gap-1">
                                                <Heading size="md" className="tracking-[0.12px] !font-poppins leading-[35px]">
                                                    For the material and the chair as we expected it&#39;s good
                                                </Heading>
                                                <Text

                                                    className="!text-black-900_87 tracking-[0.12px] !font-poppins opacity-0.5 leading-[35px]"
                                                >
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the industry&#39;s standard dummy text ever.
                                                </Text>
                                            </div>
                                            <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                                                <Img
                                                    src="images/img_unsplash_wnolnjo7ts8_2.png"
                                                    alt="unsplash_one"
                                                    className="h-14 w-14 rounded-[50%]"
                                                />
                                                <div className="flex flex-col items-start justify-start w-4/5 gap-1">
                                                    <Heading size="md" className="tracking-[0.12px] !font-poppins">
                                                        Mario
                                                    </Heading>
                                                    <Text className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
                                                        Sydney, Australia
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                />
            </div>
        </div>
    )
}
