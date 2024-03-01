import { Heading, Text } from '@/components'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function SecondCTA() {
    return (
        <div className="w-full bg-yellow-100 py-10">
            <div className="flex justify-center items-center w-[80rem] mx-auto">
                <div className="flex flex-row justify-between w-full p-4 m-auto">
                    <div className="flex flex-col items-center justify-start h-full w-[535px]">
                        <Image src="/images/white-sofa.png" height={1380} width={1230} alt="insideweather" className="object-cover" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[38%] mb-[95px] ml-[61px] gap-[30px]">
                        <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                            <Text size="lg" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                                Interior Modern
                            </Text>
                            <Heading size="3xl" className="tracking-[-0.50px] leading-[60px]">
                                Arrange your home in such a way with our modern interiors
                            </Heading>
                        </div>
                        <Button size="9xl" variant="outline" className="tracking-[-0.50px] font-medium min-w-[218px]">
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
