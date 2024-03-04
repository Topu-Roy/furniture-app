import { Heading, Img } from '@/components'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function promoCTA() {
    return (
        <div className="flex flex-col items-center justify-start w-full gap-[75px]">
            <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full max-w-[1290px]">
                    <div className="flex flex-row justify-center w-full">
                        <div className="h-[450px] w-full relative">
                            <Img
                                src="images/img_rectangle_28.png"
                                alt="image_one"
                                className="justify-center h-[450px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-start w-[37%] h-max gap-[30px] left-[5%] bottom-0 top-0 m-auto absolute">
                                <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                                    <Heading size="md" className="!text-yellow-100 tracking-[-0.50px]">
                                        Best Room Decor Items
                                    </Heading>
                                    <Heading size="3xl" className="!text-white-A700 tracking-[-0.50px] leading-[60px]">
                                        Our goods have the best quality and materials in the world
                                    </Heading>
                                </div>
                                <Button
                                    color="yellow_100"
                                    size="9xl"
                                    className="tracking-[-0.50px] font-poppins font-bold min-w-[170px]"
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
