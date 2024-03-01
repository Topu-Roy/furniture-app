import Image from 'next/image'
import React from 'react'
import { Heading, Text } from '@/components'

export default function OurBenefits() {
    return (
        <div className="w-full bg-gray-50">
            <div className="flex flex-row justify-center mx-auto py-20">
                <div className="flex flex-row justify-between w-full max-w-[1290px]">
                    <div className="flex flex-col items-center justify-start w-[47%] gap-[50px]">
                        <Heading size="3xl" className="tracking-[-0.50px] leading-[60px]">
                            We guarantee the safety of your shopping
                        </Heading>
                        <div className="justify-center w-full gap-[50px] grid-cols-2 grid min-h-[auto]">
                            <div className="flex flex-col items-start justify-start w-full gap-10">
                                <Image width={50} height={50} src="/images/img_icon.svg" alt="fast_shipping" className="h-[60px]" />
                                <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                                    <Heading className="tracking-[-0.50px]">
                                        Fast Shipping
                                    </Heading>
                                    <Text className="!text-gray-500 tracking-[-0.50px] leading-[25px]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                                    </Text>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full gap-10">
                                <Image width={50} height={50} src="/images/img_icon_gray_50_01.svg" alt="icon_one" className="h-[60px]" />
                                <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                                    <Heading className="tracking-[-0.50px]">
                                        Safe Delivery
                                    </Heading>
                                    <Text className="!text-gray-500 tracking-[-0.50px] leading-[25px]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                                    </Text>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full gap-10">
                                <Image width={50} height={50} src="/images/img_icon_gray_50_01_60x63.svg" alt="icon_one" className="h-[60px]" />
                                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2">
                                    <Heading className="tracking-[-0.50px]">
                                        365 Days Return
                                    </Heading>
                                    <Text className="!text-gray-500 tracking-[-0.50px] leading-[25px]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                                    </Text>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full gap-10">
                                <Image width={50} height={50} src="/images/img_icon_60x63.svg" alt="icon_one" className="h-[60px]" />
                                <div className="flex flex-col items-start justify-start w-full gap-2.5">
                                    <Heading className="tracking-[-0.50px]">
                                        24 hours CS
                                    </Heading>
                                    <Text className="!text-gray-500 tracking-[-0.50px] leading-[25px]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image height={1000} width={1000} src="/images/img_rectangle_16.png" alt="image_one" className="w-[47%] object-cover" />
                </div>
            </div>
        </div>
    )
}
