'use client'
import React, { ReactElement, useEffect, useState } from 'react'
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
    let allCount = 0;
    let chairCount = 0;
    let tableCount = 0;
    let lampCount = 0;
    let drawerCount = 0;
    let bedCount = 0;
    let bookshelfCount = 0;
    let sofaCount = 0;

    useEffect(() => {
        allCount = productsBackup.length;
        chairCount = productsBackup.filter(item => item.category === 'Chair').length;
        tableCount = productsBackup.filter(item => item.category === 'Table').length;
        lampCount = productsBackup.filter(item => item.category === 'Lamp').length;
        drawerCount = productsBackup.filter(item => item.category === 'Drawer').length;
        bedCount = productsBackup.filter(item => item.category === 'Bed').length;
        bookshelfCount = productsBackup.filter(item => item.category === 'Bookshelf').length;
        sofaCount = productsBackup.filter(item => item.category === 'Sofa').length;

        const categories: ProductCatagoriesType = [
            {
                // @ts-ignore
                productName: "All",
                quantity: allCount
            },
            {
                productName: "Chair",
                quantity: chairCount
            },
            {
                productName: "Table",
                quantity: tableCount
            },
            {
                productName: "Lamp",
                quantity: lampCount
            },
            {
                productName: "Drawer",
                quantity: drawerCount
            },
            {
                productName: "Bed",
                quantity: bedCount
            },
            {
                productName: "Bookshelf",
                quantity: bookshelfCount
            },
            {
                productName: "Sofa",
                quantity: sofaCount
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
