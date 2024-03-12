'use client'
import React from 'react'
import { Heading, Text } from '@/components'
import { Button } from '@/components/ui/button'
import { Category, useShopStore } from '@/zustand/shop/shopStore';
import { cn } from '@/lib/utils';

export default function Catagories() {

    type ProductCatagoriesType = {
        productName: Category;
        quantity: number;
    }[]

    const productCatagories: ProductCatagoriesType = [
        {
            productName: "All",
            quantity: 0
        },
        {
            productName: "Chair",
            quantity: 8
        },
        {
            productName: "Table",
            quantity: 12
        },
        {
            productName: "Lamp",
            quantity: 8
        },
        {
            productName: "Drawer",
            quantity: 7
        },
        {
            productName: "Bed",
            quantity: 10
        },
        {
            productName: "Bookshelf",
            quantity: 6
        },
        {
            productName: "Sofa",
            quantity: 4
        }
    ]

    const selectedCategory = useShopStore(state => state.selectedCategory);

    let totalQuantity = 0;
    productCatagories.forEach(category => totalQuantity += category.quantity);
    productCatagories[0].quantity = totalQuantity;

    function handleCategory(category: Category) {
        useShopStore.setState({ selectedCategory: category })
    }

    return (
        <div className="flex flex-col items-start justify-start w-full gap-4">
            <Heading>Product Categories</Heading>
            <div className="flex flex-row flex-wrap items-start w-full gap-2">
                {productCatagories.map(category => (
                    <Button
                        asChild
                        onClick={() => handleCategory(category.productName)}
                        variant={'link'}
                        className={cn('cursor-pointer tracking-[-0.50px] px-3 py-1 bg-slate-200/90 rounded-full text-gray-700/90',
                            {
                                "ring-[2px] ring-black/20": selectedCategory === category.productName
                            }
                        )}
                    >
                        <Text size="s" className="tracking-[-0.50px] text-gray-700/90">
                            {category.productName} ({category.quantity})
                        </Text>
                    </Button>
                ))}
            </div>
        </div>
    )
}
