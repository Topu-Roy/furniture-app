"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Tag, useShopStore } from '@/zustand/shop/shopStore'
import { cn } from '@/lib/utils'
import HeadingAndReset from './headingAndReset'

export default function ProductTag() {
    const { selectedTag } = useShopStore();
    const productTags: Tag[] = [
        "All",
        "Minimalistic",
        "Modern",
        "Stylish",
        "Elegant",
        "Ambient",
        "Luxurious",
    ]

    function handleReset() {
        useShopStore.setState({ selectedTag: 'All' });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="flex flex-col items-start justify-start w-full gap-4">
            <HeadingAndReset title='Filter By Tag' handleReset={handleReset} />
            <div className="flex flex-col items-start justify-start w-full gap-4">
                <div className="flex flex-row justify-start flex-wrap gap-2">
                    {productTags.map(tag => (
                        <Button
                            onClick={() => useShopStore.setState({ selectedTag: tag })}
                            size="lg"
                            variant={"link"}
                            className={cn("cursor-pointer tracking-[-0.50px] px-3 py-1 bg-slate-200/90 rounded-full text-gray-700/90 min-w-[3rem]",
                                {
                                    "ring-[2px] ring-black/20 text-black": tag === selectedTag
                                })}
                            key={tag}
                        >
                            {tag}
                        </Button>
                    ))}
                </div>
            </div>
        </div >
    )
}
