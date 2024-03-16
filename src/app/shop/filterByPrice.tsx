"use client"
import React, { useEffect, useState } from 'react'
import { Heading } from '@/components'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import useDebounce from '@/hooks/debounce'
import { useShopStore } from '@/zustand/shop/shopStore'

export default function FilterByPrice() {
    const [sliderValue, setSliderValue] = useState(2000);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000);
    const debouncedSliderPrice = useDebounce(sliderValue);
    const debouncedMinPrice = useDebounce(minPrice);
    const debouncedMaxPrice = useDebounce(maxPrice);

    const { selectedMinPrice, selectedMaxPrice, selectedSliderPrice } = useShopStore();

    useEffect(() => {
        if (selectedMaxPrice !== 2000 && selectedMinPrice !== 0) {
            useShopStore.setState({ selectedSliderPrice: 2000 });
        }
    }, [selectedMaxPrice, selectedMaxPrice])

    useEffect(() => {
        if (selectedSliderPrice !== 2000) {
            useShopStore.setState({ selectedMinPrice: 0 });
            useShopStore.setState({ selectedMaxPrice: 2000 });
        }
    }, [selectedSliderPrice])

    const handleMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = parseInt(inputValue.replace(/\D/g, ''));
        //@ts-ignore
        if (!isNaN(numericValue)) {
            setMinPrice(numericValue);
        } else {
            setMinPrice(0);
        }
    };

    const handleMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = parseInt(inputValue.replace(/\D/g, ''));
        //@ts-ignore
        if (!isNaN(numericValue)) {
            setMaxPrice(numericValue);
        } else {
            setMaxPrice(0);
        }
    };

    useEffect(() => {
        useShopStore.setState({ selectedMinPrice: debouncedMinPrice })
    }, [debouncedMinPrice])

    useEffect(() => {
        useShopStore.setState({ selectedMaxPrice: debouncedMaxPrice });
    }, [debouncedMaxPrice])

    useEffect(() => {
        useShopStore.setState({ selectedSliderPrice: debouncedSliderPrice });
    }, [debouncedSliderPrice])

    return (
        <div className="flex flex-col gap-4">
            <Heading size='md'>Filter by price</Heading>
            <div className="flex flex-row justify-center items-center gap-1">
                <div className="flex justify-center items-center gap-2 bg-gray-50 border-[1px] border-black pl-1.5 ">
                    <span className=''>Min $:</span>
                    <Input value={minPrice} onChange={handleMinPrice} placeholder='500' className='rounded-[0px] flex-1' />
                </div>
                <div className="flex justify-center items-center gap-2 bg-gray-50 border-[1px] border-black pl-1.5 ">
                    <span className=''>Max $:</span>
                    <Input value={maxPrice} onChange={handleMaxPrice} placeholder='2000' className='rounded-[0px] flex-1' />
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
