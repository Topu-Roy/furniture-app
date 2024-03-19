"use client"
import React, { useEffect, useState } from 'react'
import { Heading } from '@/components'
import { type ProductType } from '@/zustand/shop/shopStore'
import Product from '@/components/product/productCard'

type props = {
    products: ProductType[]
}

export default function NewArrivals(props: props) {
    const [newProductsOne, setNewProductsOne] = useState<ProductType[]>([])
    const [newProductsTwo, setNewProductsTwo] = useState<ProductType[]>([])

    useEffect(() => {
        const newProducts = props.products.filter(item => item.status === 'new');

        setNewProductsOne(newProducts.slice(0, 4))
        setNewProductsTwo(newProducts.slice(5, 9))
    }, [props.products])

    return (
        <div className="w-full flex justify-center items-center py-20">
            <div className="flex flex-row justify-center w-[80rem]">
                <div className="flex flex-col items-center justify-start w-full gap-[67px] max-w-[1290px]">
                    <Heading size="2xl" className="!text-blue_gray-900_01 tracking-[-0.50px] text-center">
                        New Arrival
                    </Heading>
                    <div className="flex flex-col w-full gap-[47px]">
                        <div className="flex flex-row justify-start w-full gap-[19px]">
                            {newProductsOne.map(item => (
                                <Product
                                    category={item.category}
                                    color={item.color}
                                    image={item.image}
                                    price={item.price}
                                    productTitle={item.productTitle}
                                    tag={item.tag}
                                    className={item.className}
                                    key={item.productTitle + item.tag}
                                    status={item.status}
                                />
                            ))}
                        </div>
                        <div className="flex flex-row w-full gap-[19px]">
                            {newProductsTwo.map(item => (
                                <Product
                                    category={item.category}
                                    color={item.color}
                                    image={item.image}
                                    price={item.price}
                                    productTitle={item.productTitle}
                                    tag={item.tag}
                                    className={item.className}
                                    key={item.productTitle + item.tag}
                                    status={item.status}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
