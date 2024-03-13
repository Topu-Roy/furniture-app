import React from 'react'
import { Img } from '@/components'
import Product, { ProductType } from '@/components/product/productCard'
import { Button } from '@/components/ui/button'
import ProductHeader from './productHeader'

export default function Products() {

    const products: ProductType[] = [
        {
            productTitle: "Elegant Dining Chair",
            image: "images/dining_chair.jpg",
            price: 149,
            status: "popular",
            category: "Chair",
            tag: "Stylish",
            color: "black",
        },
        {
            productTitle: "Modern Coffee Table",
            image: "images/coffee_table.jpg",
            price: 399,
            status: "new",
            category: "Table",
            tag: "Minimalistic",
            color: "white",
        },
        {
            productTitle: "Vintage Desk Lamp",
            image: "images/desk_lamp.jpg",
            price: 59,
            status: "out of stock",
            category: "Lamp",
            tag: "Ambient",
            color: "red",
        },
        {
            productTitle: "Drawer Organizer Set",
            image: "images/drawer_organizer.jpg",
            price: 29,
            status: "popular",
            category: "Drawer",
            tag: "Modern",
            color: "orange",
        },
        {
            productTitle: "King Size Bed Frame",
            image: "images/bed_frame.jpg",
            price: 599,
            status: "popular",
            category: "Bed",
            tag: "Luxurious",
            color: "purple",
        },
        {
            productTitle: "Classic Bookshelf",
            image: "images/bookshelf.jpg",
            price: 249,
            status: "new",
            category: "Bookshelf",
            tag: "Stylish",
            color: "blue",
        },
        {
            productTitle: "Modern Sectional Sofa",
            image: "images/sofa.jpg",
            price: 899,
            status: "popular",
            category: "Sofa",
            tag: "Elegant",
            color: "green",
        },
    ];

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
