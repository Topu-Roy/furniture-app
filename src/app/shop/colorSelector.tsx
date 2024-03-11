"use client"
import React from 'react'
import { Heading } from '@/components'
import { cn } from '@/lib/utils'
import { SelectedColor, useShopStore } from '@/zustand/shop/shopStore';

export default function ColorSelector() {
    const colors: SelectedColor[] = [
        "black",
        "white",
        "red",
        "orange",
        "green",
        "purple",
        "blue",
        "cyan",
    ];

    const selectedColor = useShopStore(state => state.selectedColor);

    return (
        <div className="flex flex-col items-start justify-start w-full gap-[21px]">
            <Heading>Filter By Color</Heading>
            <div className="flex flex-row items-start justify-start flex-wrap w-full gap-3">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => useShopStore.setState({ selectedColor: color })}
                        className={cn(`rounded-full h-10 w-10 p-6 text-xs bg-${color}-500/80 flex justify-center items-center`, {
                            "bg-black text-white": color === "black",
                            "bg-stone-200": color === "white",
                            "ring-[3px] ring-stone-700": selectedColor === color
                        })}
                    >
                        <span className={cn(``)}>{color[0].toUpperCase() + color.slice(1, color.length)}</span>
                    </button>
                ))}
            </div>
            <div className="hidden">
                <div className='bg-red-500/80'></div>
                <div className='bg-orange-500/80'></div>
                <div className='bg-green-500/80'></div>
                <div className='bg-purple-500/80'></div>
                <div className='bg-blue-500/80'></div>
                <div className='bg-cyan-500/80'></div>
            </div>
        </div>
    )
}