"use client"
import React from 'react'
import { Heading } from '@/components'
import { cn } from '@/lib/utils'
import { Color, useShopStore } from '@/zustand/shop/shopStore';
import { Button } from '@/components/ui/button';
import { GrPowerReset } from 'react-icons/gr';
import HeadingAndReset from './headingAndReset';

export default function ColorSelector() {
    const colors: Color[] = [
        "black",
        "white",
        "red",
        "green",
        'brown'
    ];

    const selectedColor = useShopStore(state => state.selectedColor);

    function handleColorChange(color: Color) {
        if (color === selectedColor) {
            useShopStore.setState({ selectedColor: undefined })
        } else {
            useShopStore.setState({ selectedColor: color })
        }
    }

    function handleReset() {
        useShopStore.setState({ selectedCategory: 'All' });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="flex flex-col items-start justify-start w-full gap-[21px]">
            <HeadingAndReset title='Filter By Color' handleReset={handleReset} />
            <div className="flex flex-row items-start justify-start flex-wrap w-full gap-3">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => handleColorChange(color)}
                        className={cn(`rounded-full h-10 w-10 p-6 text-xs bg-${color}-500/80 flex justify-center items-center`, {
                            "bg-black/80 text-white": color === "black",
                            "bg-stone-200/80 text-black": color === "white",
                            "bg-[#964B00]/80": color === "brown",
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
            </div>
        </div>
    )
}