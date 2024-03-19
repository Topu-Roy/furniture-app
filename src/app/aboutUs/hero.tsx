import { Heading, Img, Text } from '@/components'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Hero() {
    return (
        <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-between items-center w-full max-w-[1290px]">
                <div className="flex flex-col items-center justify-start w-[49%] gap-14">
                    <div className="flex flex-col items-start justify-start w-full gap-[25px]">
                        <div className="flex flex-col items-center justify-start gap-[25px]">
                            <Heading size="3xl" className="tracking-[-0.50px]">
                                Provide the best quality ingredients for home products
                            </Heading>
                            <Text size="md" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue
                                elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est
                                aliquam, facilisi consequat ligula vivamus faucibus
                            </Text>
                        </div>
                        <Button
                            color="black_900"
                            size="lg"
                            variant="outline"
                            className="tracking-[-0.50px] font-semibold min-w-[172px]"
                        >
                            Meet our Team
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                        <div className="flex flex-col items-start justify-start w-[38%] gap-[7px]">
                            <div className="flex flex-row justify-start items-center w-[58%] gap-2.5">
                                <Heading size="md" className="tracking-[0.12px] !font-bold">
                                    Ratings
                                </Heading>
                                <div className="flex flex-row justify-start items-center w-[45%] gap-[5px]">
                                    <Img
                                        src="images/img_ant_design_star_filled.svg"
                                        alt="image_one"
                                        className="h-[30px] w-[30px]"
                                    />
                                    <Heading size="md" className="tracking-[0.12px] !font-bold">
                                        5.0
                                    </Heading>
                                </div>
                            </div>
                            <Text size="xs" className="!text-black-900_7f tracking-[-0.50px]">
                                Trusted by many people from all over the world
                            </Text>
                        </div>
                        <div className="flex flex-row justify-center w-[37%]">
                            <div className="flex flex-row justify-center w-full">
                                <Img
                                    src="images/img_unsplash_wnolnjo7ts8.png"
                                    alt="unsplash_one"
                                    className="h-[50px] w-[50px] rounded-[50%]"
                                />
                                <Img
                                    src="images/img_unsplash_rtvgs4vgkgm.png"
                                    alt="unsplash_three"
                                    className="h-[50px] w-[50px] ml-[-5px] rounded-[50%]"
                                />
                                <Img
                                    src="images/img_unsplash_d1upkifd04a.png"
                                    alt="unsplash_five"
                                    className="h-[50px] w-[50px] ml-[-5px] rounded-[50%]"
                                />
                                <Img
                                    src="images/img_unsplash_plsf6obtgms.png"
                                    alt="unsplash_seven"
                                    className="h-[50px] w-[50px] ml-[-5px] rounded-[50%]"
                                />
                                <div className="flex flex-col items-center justify-start h-[50px] w-[50px] ml-[-5px]">
                                    <Heading
                                        size="xs"

                                        className="flex justify-center items-center h-[50px] w-[50px] !text-yellow-100 tracking-[-0.50px] bg-blue_gray-900_01 text-center rounded-[50%]"
                                    >
                                        3K+
                                    </Heading>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Img
                    src="images/img_rectangle_1492.png"
                    alt="image_two"
                    className="w-[41%] rounded-tr-[50%] rounded-bl-[50%] rounded-tl-[50%] object-cover"
                />
            </div>
        </div>
    )
}
