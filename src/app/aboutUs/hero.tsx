import React from 'react'
import { Heading, Text } from '@/components'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import CompactIconsRating from './compactIconsRating'

export default function Hero() {
    return (
        <>
            <section className="bg-stone-200 mt-[5rem]">
                <div className="flex justify-between items-center w-full max-w-7xl mx-auto gap-4 py-8">
                    <div className="flex-1">
                        <div className="space-y-2 pb-8">
                            <Heading size="3xl" className="tracking-[-0.50px]">
                                Provide the best quality ingredients for home products
                            </Heading>
                            <Text size="md" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue
                                elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est
                                aliquam, facilisi consequat ligula vivamus faucibus
                            </Text>
                            <Button
                                color="black_900"
                                size="lg"
                                variant="outline"
                                className="tracking-[-0.50px] font-semibold min-w-[172px]"
                            >
                                Meet our Team
                            </Button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col items-start justify-start w-[38%] gap-[7px]">
                                <div className="flex flex-row justify-start items-center w-[58%] gap-2.5">
                                    <Heading size="md" className="tracking-[0.12px] !font-semibold text-black/70">
                                        Ratings
                                    </Heading>
                                    <div className="flex flex-row justify-start items-center w-[45%] gap-[5px]">
                                        <Image
                                            src={"/images/img_ant_design_star_filled.svg"}
                                            alt="image_one"
                                            className="h-[30px] w-[30px]"
                                            height={30}
                                            width={30}
                                        />
                                        <Heading size="md" className="tracking-[0.12px] !font-semibold  text-black/70">
                                            5.0
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center w-[37%]">
                                <CompactIconsRating />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center">
                        <Image
                            src={"/images/img_rectangle_1492.png"}
                            alt='our team hero'
                            width={1050}
                            height={1400}
                            className="w-[70%] rounded-tr-[50%] rounded-bl-[50%] rounded-tl-[50%] object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
