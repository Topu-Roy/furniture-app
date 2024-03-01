import React from 'react'
import { Text } from '@/components'
import { Button } from '@/components/ui/button'
import { kalnia } from '@/styles/font'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className="w-full bg-orange-50 py-10">
            <div className="w-[80rem] mx-auto">
                <div className="flex flex-row justify-between items-center w-full my-[5px] max-w-[1290px]">
                    <div className="flex flex-col items-start justify-start w-[48%] gap-[30px]">
                        <div className="flex flex-col items-start justify-start w-full gap-[26px]">
                            <Text size="xl" className="!text-black-900 tracking-[-0.50px]">
                                Interior Needs...
                            </Text>
                            <Text size="max" className={`!text-black-900 tracking-normal ${kalnia.className}`}>
                                Various new collections of furniture to decorate the corner of your house.
                            </Text>
                        </div>
                        <Button
                            size="9xl"
                            className="text-yellow-100 tracking-[-0.50px] font-medium border-blue_gray-900_01 border-2 border-solid min-w-[218px]"
                        >
                            Shop Now
                        </Button>
                    </div>
                    <Image height={1000} width={1000} src="/images/img_nathan_oakley_o.png" alt="nathanoakleyo" className="w-[48%] object-cover" />
                </div>
            </div>
        </div>
    )
}
