import React from 'react'
import { Heading, Text } from '@/components'
import { Button } from '@/components/ui/button'

export default function Catagories() {

    const productCatagories = [
        {
            productName: "Chair",
            quantity: 8
        },
        {
            productName: "Table",
            quantity: 12
        },
        {
            productName: "Lamp",
            quantity: 8
        },
        {
            productName: "Drawer",
            quantity: 7
        },
        {
            productName: "Bed",
            quantity: 10
        },
        {
            productName: "Bookshelf",
            quantity: 6
        },
        {
            productName: "Sofa",
            quantity: 4
        }
    ]

    let totalQuantity = 0;
    productCatagories.forEach(category => totalQuantity += category.quantity);

    return (
        <div className="flex flex-col items-start justify-start w-full gap-4">
            <Heading>Product Categories</Heading>
            <div className="flex flex-col items-start w-full gap-0.5">
                <Button variant={'link'} className='p-0 text-gray-700'>
                    <Text size="s" className="tracking-[-0.50px]">
                        All ({totalQuantity})
                    </Text>
                </Button>
                {productCatagories.map(category => (
                    <Button variant={'link'} className='p-0 text-gray-700/90'>
                        <Text size="s" className="tracking-[-0.50px] text-gray-700/90">
                            {category.productName} ({category.quantity})
                        </Text>
                    </Button>
                ))}
            </div>
        </div>
    )
}
