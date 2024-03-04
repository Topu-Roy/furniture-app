"use client"
import React from 'react'
import { Heading, Img } from '@/components'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ColorSelector() {
    const colors = ['black', 'white', 'red', 'orange', 'green', 'purple', 'blue', 'cyan']
    const [selectedColor, setSelectedColor] = React.useState()
    return (
        <div className="flex flex-col items-start justify-start w-full gap-[21px]">
            <Heading>Filter By Color</Heading>
            {colors.map((color) => (
                <Button className={cn("rounded-full h-6 w-6", {
                    "bg-black": color === "black",
                    "bg-white": color === "white"
                })} />
            ))}
        </div>
    )
}

{/* <Img src="images/img_frame_48095956.svg" alt="image_two" className="h-10" />
<Img src="images/img_frame_48095957.svg" alt="image_three" className="h-10" /> */}