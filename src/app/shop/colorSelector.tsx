"use client"
import React, { useEffect, useState } from 'react'
import { cn, scrollToTop } from '@/lib/utils'
import { Color, useShopStore } from '@/zustand/shop/shopStore';
import HeadingAndReset from './headingAndReset';

type ColorNQuantity = {
    color: Color;
    quantity: number
}

export default function ColorSelector() {

    const { selectedColor, productsBackup } = useShopStore();
    const [colors, setColors] = useState<ColorNQuantity[]>([]);

    useEffect(() => {
        const colors: ColorNQuantity[] = [
            {
                color: "black",
                quantity: productsBackup.filter(item => item.color === "black").length
            },
            {
                color: "white",
                quantity: productsBackup.filter(item => item.color === "white").length
            },
            {
                color: "red",
                quantity: productsBackup.filter(item => item.color === "red").length
            },
            {
                color: "green",
                quantity: productsBackup.filter(item => item.color === "green").length
            },
            {
                color: "brown",
                quantity: productsBackup.filter(item => item.color === "brown").length
            }
        ];

        setColors(colors);
    }, [productsBackup])



    function handleColorChange(color: Color) {
        if (color === selectedColor) {
            useShopStore.setState({ selectedColor: undefined })
        } else {
            useShopStore.setState({ selectedColor: color })
        }

        scrollToTop();
    }

    function handleReset() {
        useShopStore.setState({ selectedCategory: 'All' });

        scrollToTop();
    }

    return (
        <div className="flex flex-col items-start justify-start w-full gap-[21px]">
            <HeadingAndReset title='Filter By Color' handleReset={handleReset} />
            <div className="flex flex-row items-start justify-start flex-wrap w-full gap-3">
                {colors.map((item) => (
                    <button
                        key={item.color}
                        onClick={() => handleColorChange(item.color)}
                        className={cn(`rounded-full h-10 w-10 p-6 text-xs bg-${item.color}-500/80 flex justify-center items-center`, {
                            "bg-black/80 text-white": item.color === "black",
                            "bg-stone-200/80 text-black": item.color === "white",
                            "bg-[#964B00]/80": item.color === "brown",
                            "ring-[3px] ring-stone-700": selectedColor === item.color
                        })}
                    >
                        <span>{item.quantity}</span>
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