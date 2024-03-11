"use client"
import { Heading } from '@/components'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import React, { useState } from 'react'

export default function FilterByPrice() {
    const [sliderValue, setSliderValue] = useState(500);
    return (
        <div className="flex flex-col gap-4">
            <Heading size='md'>Filter by price</Heading>
            <div className="flex flex-row justify-center items-center gap-1">
                <div className="flex justify-center items-center gap-2 bg-gray-50 border-[1px] border-black pl-1.5 ">
                    <span className=''>Min $:</span>
                    <Input placeholder='500' className='rounded-[0px] flex-1' />
                </div>
                <div className="flex justify-center items-center gap-2 bg-gray-50 border-[1px] border-black pl-1.5 ">
                    <span className=''>Max $:</span>
                    <Input placeholder='2000' className='rounded-[0px] flex-1' />
                </div>

            </div>
            <div className="flex flex-row justify-center items-center gap-2">
                <span className=''>
                    $0
                </span>
                <Slider
                    defaultValue={[sliderValue]}
                    onValueChange={(val) => setSliderValue(val[0])}
                    className='flex-1'
                    max={2000}
                    step={1}
                />
                <span className=''>
                    ${sliderValue}
                </span>
            </div>
        </div>
    )
}
