"use client"
import React, { useEffect, useState } from 'react'
import { Heading, Text } from '@/components';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay"
import { Button } from '@/components/ui/button';
import { type ProductType } from '@/zustand/shop/shopStore';
import Product from '@/components/product/productCard';

type props = {
    products: ProductType[]
}

export default function newProductCarousel(props: props) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const [productsListOne, setProductsListOne] = useState<ProductType[]>([])
    const [productsListTwo, setProductsListTwo] = useState<ProductType[]>([])
    const [productsListThree, setProductsListThree] = useState<ProductType[]>([])
    const [productsListFour, setProductsListFour] = useState<ProductType[]>([])

    useEffect(() => {
        setProductsListOne(props.products.slice(20, 24))
        setProductsListTwo(props.products.slice(15, 19))
        setProductsListThree(props.products.slice(8, 12))
        setProductsListFour(props.products.slice(10, 14))
    }, [props.products])

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const pageNumbers = Array.from({ length: count }, (_, i) => (
        <Button
            variant={i === current - 1 ? 'default' : 'ghost'}
            key={i}
            className={cn("text-sm cursor-pointer rounded-full h-8 w-8")}
            onClick={() => api?.scrollTo(i)}
        >
            {i + 1}
        </Button>
    ));

    return (

        <div className="flex flex-col justify-center items-center pb-10">
            <div className="flex flex-col items-center justify-center w-full gap-[21px] pb-10">
                <Heading size="3xl" className="tracking-[-0.50px] text-center">
                    <Text size='max' className={cn("text-gray-900")}>
                        Our Newest Products
                    </Text>
                </Heading>
                <Text size="md" className={cn("mb-1 !text-gray-500 tracking-[-0.50px] text-center")}>
                    Made of the best materials and with a design that follows the times
                </Text>
            </div>
            <Carousel
                setApi={setApi}
                className='w-[80rem] mx-auto'
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}
            >
                <CarouselContent className='mx-auto'>
                    <CarouselItem>
                        <div className="flex flex-col justify-start w-full gap-4">
                            <div className="flex justify-center items-center gap-4">
                                {productsListOne.map((item) => (
                                    <Product
                                        category={item.category}
                                        color={item.color}
                                        image={item.image}
                                        price={item.price}
                                        productTitle={item.productTitle}
                                        tag={item.tag}
                                        key={item.productTitle + item.tag}
                                        status={item.status}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-row justify-start w-full gap-4">
                                {productsListTwo.map((item) => (
                                    <Product
                                        category={item.category}
                                        color={item.color}
                                        image={item.image}
                                        price={item.price}
                                        productTitle={item.productTitle}
                                        tag={item.tag}
                                        key={item.productTitle + item.tag}
                                        status={item.status}
                                    />
                                ))}
                            </div>

                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex flex-col justify-start w-full gap-4">
                            <div className="flex flex-row justify-start w-full gap-4">
                                {productsListThree.map((item) => (
                                    <Product
                                        category={item.category}
                                        color={item.color}
                                        image={item.image}
                                        price={item.price}
                                        productTitle={item.productTitle}
                                        tag={item.tag}
                                        key={item.productTitle + item.tag}
                                        status={item.status}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                {productsListFour.map((item) => (
                                    <Product
                                        category={item.category}
                                        color={item.color}
                                        image={item.image}
                                        price={item.price}
                                        productTitle={item.productTitle}
                                        tag={item.tag}
                                        key={item.productTitle + item.tag}
                                        status={item.status}
                                    />
                                ))}
                            </div>

                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center items-center gap-2 py-4">
                    <div className='flex justify-center items-center gap-2 py-2 text-center text-sm text-muted-foreground'>
                        {pageNumbers}
                    </div>
                </div>
            </Carousel>
        </div>
    )
}