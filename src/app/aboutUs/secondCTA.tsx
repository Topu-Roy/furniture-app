import { Heading, Img, Text } from '@/components'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function SecondCTA() {
    return (
        <div className="h-[535px] w-full relative">
            <div className="flex flex-col items-center justify-start h-full w-[535px] right-0 bottom-0 top-0 m-auto absolute">
                <Img src="images/img_inside_weather.png" alt="insideweather" className="w-[535px] object-cover" />
            </div>
            <div className="flex flex-row justify-start w-full bottom-0 right-0 left-0 p-[13px] m-auto bg-yellow-100 absolute">
                <div className="flex flex-col items-start justify-start w-[38%] mb-[95px] ml-[61px] gap-[30px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                        <Text size="lg" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                            Interior Modern
                        </Text>
                        <Heading size="3xl" className="tracking-[-0.50px]">
                            Arrange your home in such a way with our modern interiors
                        </Heading>
                    </div>
                    <Button size="9xl" variant="outline" className="tracking-[-0.50px] font-medium min-w-[218px]">
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
    )
}
