import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


export default function ProductHeader() {
    const sortingOptions = [
        {
            value: 'default',
            option: 'Default'
        },
        {
            value: 'price',
            option: 'Price'
        },
        {
            value: 'rating',
            option: 'Rating'
        },
        {
            value: 'popularity',
            option: 'Popularity'
        },
    ];

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

            <div className="w-[15%]">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Default" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Options</SelectLabel>
                            {sortingOptions.map(opt => (
                                <SelectItem value={opt.value}>{opt.option}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}
