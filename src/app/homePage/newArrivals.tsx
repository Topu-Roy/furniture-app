import React from 'react'
import { Heading } from '@/components'
import HomepageCardproduct from '@/components/product/productCard'

export default function NewArrivals() {
    return (
        <div className="w-full flex justify-center items-center py-20">
            <div className="flex flex-row justify-center w-[80rem]">
                <div className="flex flex-col items-center justify-start w-full gap-[67px] max-w-[1290px]">
                    <Heading size="2xl" className="!text-blue_gray-900_01 tracking-[-0.50px] text-center">
                        New Arrival
                    </Heading>
                    <div className="flex flex-col w-full gap-[47px]">
                        <div className="flex flex-row justify-start w-full gap-[19px]">
                            <HomepageCardproduct
                                imageOne="images/img_image_8.png"
                                status="New"
                                className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                            />
                            <HomepageCardproduct
                                imageOne="images/img_image_7.png"
                                status="New"
                                className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                            />
                            <HomepageCardproduct
                                imageOne="images/img_image_8.png"
                                status="New"
                                className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                            />
                            <HomepageCardproduct
                                imageOne="images/img_image_9.png"
                                status="New"
                                className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                            />
                        </div>
                        <div className="flex flex-row w-full gap-[19px]">
                            <HomepageCardproduct
                                imageOne="images/img_image_10.png"
                                status="New"
                                className="flex flex-col items-center justify-start w-full gap-[15px]"
                            />
                            <HomepageCardproduct
                                imageOne="images/img_image_11.png"
                                status="New"
                                className="flex flex-col items-center justify-start w-full gap-[15px]"
                            />
                            <HomepageCardproduct
                                imageOne="images/img_image_12.png"
                                status="New"
                                className="flex flex-col items-center justify-start w-full gap-[15px]"
                            />
                            <HomepageCardproduct
                                imageOne="images/img_image_13.png"
                                status="New"
                                className="flex flex-col items-center justify-start w-full gap-[15px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
