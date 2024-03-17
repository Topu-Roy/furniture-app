'use client'
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useShopStore } from '@/zustand/shop/shopStore';

type SortingMethodType = "default" | "price"


export default function ProductHeader() {
    const [sortingMethod, setSortingMethod] = useState<SortingMethodType>('default');
    const sortingOptions: SortingMethodType[] = ["default", "price"];

    useEffect(() => {
        useShopStore.setState({ selectedSorting: sortingMethod })
    }, [sortingMethod])

    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-center w-[43%]">
                <div className="flex flex-row justify-center w-full gap-2">
                    <Input
                        placeholder="Office Chair"
                        className="w-[74%] h-12 px-8 text-sm rounded-sm"
                    />
                    <Button size="6xl" className="h-12 !text-yellow-100 tracking-[-0.50px] font-semibold rounded-sm">
                        Search
                    </Button>
                </div>
            </div>

            <div className="flex justify-center items-center gap-2 w-[20%]">
                <span className='text-sm font-medium'>Sort by</span>
                <div className="w-[70%]">
                    <Select onValueChange={(value: SortingMethodType) => setSortingMethod(value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Default" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {sortingOptions.map(opt => (
                                    <SelectItem value={opt}>{opt.slice(0, 1).toUpperCase() + opt.slice(1, opt.length)}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

        </div>
    )
}
