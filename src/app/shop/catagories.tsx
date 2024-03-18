'use client'
import React, { useEffect, useState } from 'react'
import { Text } from '@/components'
import { Button } from '@/components/ui/button'
import { Category, useShopStore } from '@/zustand/shop/shopStore';
import { cn, scrollToTop } from '@/lib/utils';
import HeadingAndReset from './headingAndReset';

type ProductCatagoriesType = {
    productName: Category;
    quantity: number;
}[]

export default function Catagories() {

    const { productsBackup } = useShopStore();
    const selectedCategory = useShopStore(state => state.selectedCategory);

    const [productCategories, setProductCategories] = useState<ProductCatagoriesType>([]);

    useEffect(() => {

        const categories: ProductCatagoriesType = [
            {
                // @ts-ignore
                productName: "All",
                quantity: productsBackup.length
            },
            {
                productName: "Chair",
                quantity: productsBackup.filter(item => item.category === 'Chair').length
            },
            {
                productName: "Table",
                quantity: productsBackup.filter(item => item.category === 'Table').length
            },
            {
                productName: "Lamp",
                quantity: productsBackup.filter(item => item.category === 'Lamp').length
            },
            {
                productName: "Drawer",
                quantity: productsBackup.filter(item => item.category === 'Drawer').length
            },
            {
                productName: "Bed",
                quantity: productsBackup.filter(item => item.category === 'Bed').length
            },
            {
                productName: "Bookshelf",
                quantity: productsBackup.filter(item => item.category === 'Bookshelf').length
            },
            {
                productName: "Sofa",
                quantity: productsBackup.filter(item => item.category === 'Sofa').length
            }
        ];

        setProductCategories(categories);
    }, [productsBackup])

    function handleCategory(category: Category) {
        useShopStore.setState({ selectedCategory: category });

        scrollToTop();
    }

    function handleReset() {
        useShopStore.setState({ selectedCategory: 'All' });

        scrollToTop();
    }

    return (
        <div className="flex flex-col items-start justify-start w-full gap-4">
            <HeadingAndReset handleReset={handleReset} title={"Product Categories"} />
            <div className="flex flex-row flex-wrap items-start w-full gap-2">
                {productCategories.map(category => (
                    <Button
                        key={category.productName}
                        asChild
                        onClick={() => handleCategory(category.productName)}
                        variant={'link'}
                        className={cn('cursor-pointer tracking-[-0.50px] px-3 py-1 bg-slate-200/90 rounded-full min-w-[3rem]',
                            {
                                "ring-[2px] ring-black/20": selectedCategory === category.productName
                            }
                        )}
                    >
                        <Text
                            size="s"
                            className={cn("tracking-[-0.50px] !text-gray-700/90",
                                { "!text-black": selectedCategory === category.productName })}
                        >
                            {category.productName} ({category.quantity})
                        </Text>
                    </Button>
                ))}
            </div>
        </div>
    )
}
