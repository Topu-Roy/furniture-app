"use client"
import React from 'react'
import { Heading } from '@/components'
import { Button } from '@/components/ui/button'
import { Tag, useShopStore } from '@/zustand/shop/shopStore'
import { cn } from '@/lib/utils'

export default function ProductTag() {
    const productTags: Tag[] = [
        "All",
        "Minimalistic",
        "Modern",
        "Stylish",
        "Elegant",
        "Ambient",
        "Luxurious",
    ]

    const selectedTag = useShopStore().selectedTag;
    return (
        <div className="flex flex-col items-start justify-start w-full gap-4">
            <Heading>Product Tag</Heading>
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
