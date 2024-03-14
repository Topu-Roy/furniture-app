import React from 'react'
import { Img } from '@/components'
import { Button } from '@/components/ui/button'
import ProductHeader from './productHeader'
import { products } from './productArray'

export default function Products() {


    return (
        <div className="flex flex-col items-center justify-start w-3/4 gap-[49px]">

            <ProductHeader />

            {/* <div className="justify-center w-full gap-5 grid-cols-3 grid min-h-[auto]">
                <Product
                    image="images/img_image_10.png"
                    status="new"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <Product
                    image="images/img_image_7.png"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <Product
                    image="images/img_image_8.png"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <Product
                    image="images/img_image_10.png"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <Product
                    image="images/img_image_11.png"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <Product
                    image="images/img_image_12.png"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <Product
                    image="images/img_image_9.png"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <Product
                    image="images/img_image_13.png"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <Product
                    image="images/img_image_7.png"
                    className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
            </div> */}
            <div className="flex flex-row justify-start items-center w-full pl-[371px] pr-14 gap-2.5">
                <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[15px] w-[15px]" />
                <div className="flex flex-row w-[24%] gap-2.5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-full">
                        <Button size="lg" className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px]">
                            1
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[35px] w-full">
                        <Button
                            color="gray_100"
                            size="lg"
                            className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px]"
                        >
                            2
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[35px] w-full">
                        <Button
                            color="gray_100"
                            size="lg"
                            className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px]"
                        >
                            3
                        </Button>
                    </div>
                </div>
                <Button color="gray_100" size="lg" className="w-[35px] rounded-[17px]">
                    <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                </Button>
                <Img src="images/img_akar_icons_chevron_left.svg" alt="akaricons_one" className="h-[15px] w-[15px]" />
            </div>
        </div>
    )
}
