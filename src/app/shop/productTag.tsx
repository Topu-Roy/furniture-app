import React from 'react'
import { Heading } from '@/components'
import { Button } from '@/components/ui/button'

export default function ProductTag() {
    const productTags = [
        "Minimalistic",
        "Modern",
        "Stylish",
        "Elegant",
        "Ambient",
        "Luxurious",
    ]
    return (
        <div className="flex flex-col items-start justify-start w-full gap-4">
            <Heading>Product Tag</Heading>
            <div className="flex flex-col items-start justify-start w-full gap-4">
                <div className="flex flex-row justify-start flex-wrap gap-2">
                    <Button
                        size="lg"
                        variant={"link"}
                        className="tracking-[-0.50px] px-3 py-1 bg-slate-200/90 rounded-full text-gray-700/90 ring ring-black/20"
                    >
                        All
                    </Button>
                    {productTags.map(tag => (
                        <Button
                            size="lg"
                            variant={"link"}
                            className="tracking-[-0.50px] px-3 py-1 bg-slate-200/90 rounded-full text-gray-700/90"
                        >
                            {tag}
                        </Button>
                    ))}
                </div>
            </div>
        </div >
    )
}
