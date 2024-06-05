"use client"

import React, { useEffect, useState } from 'react'
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { type Category, type Color, type Status, type Tag } from '@prisma/client';
import UpdateQuantity from './updateQuantity';
import DeleteItem from './deleteItem';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, CheckCheck } from 'lucide-react';
import Chip from './chip';
import Checkout, { type SelectedProductType } from './checkout';
import { Heading } from '@/app/_components/heading';
import { Text } from '@/app/_components/text';
import HeaderActions from './headerActions';
import { useRouter } from 'next/navigation';

type Product = {
    id: string;
    createdBy: string;
    productTitle: string;
    description: string;
    image?: string | null;
    price: number;
    status?: Status | null;
    category: Category;
    tag: Tag;
    color: Color;
}

export type CustomCartProduct = {
    id: string;
    quantity: number;
    isSelected: boolean;
    product: Product;
}

export default function RenderItems({ cartProducts }: { cartProducts: CustomCartProduct[] }) {
    const [cartItems, setCartItems] = useState<CustomCartProduct[]>([])
    const selectedProducts: SelectedProductType[] = [];
    const router = useRouter();

    useEffect(() => {
        cartItems.forEach(item => {
            if (item.isSelected) {
                selectedProducts.push({
                    id: item.id,
                    quantity: item.quantity,
                    price: item.product.price,
                    productTitle: item.product.productTitle
                })
            }
        })
    }, [cartItems])

    //* If there is no product but the page is cached
    //* we need to manually check if something is added to the cart
    function refreshPage() {
        if (cartItems.length === 0) {
            router.refresh();
        }
    }

    useEffect(() => {
        const revalidatedItems = setInterval(() => {
            refreshPage()
        }, 1000);

        return () => clearInterval(revalidatedItems);
    }, [cartItems, cartProducts]);

    useEffect(() => {
        setCartItems(cartProducts)
    }, [cartProducts])

    function handleCheck(itemId: string) {
        setCartItems(cartItems.map(item => item.id === itemId ? { ...item, isSelected: !item.isSelected } : item))
    }

    return (
        <>
            <Heading className="text-center">My Cart</Heading>

            <Text size="md" className="pt-5 pb-8 text-center text-rose-500 underline">
                * Select products to Checkout
            </Text>

            <HeaderActions setCartItems={setCartItems} />

            <div className="mx-auto flex px-4 flex-col xl:flex-row max-w-7xl items-center justify-between gap-2 pb-10">
                <div className='space-y-3 flex justify-center items-center'>
                    {cartItems.map(item => (
                        <div className={cn(
                            "rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6",
                            item.isSelected ? "ring-2 ring-primary/90" : "",
                        )}>
                            <div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:space-y-0">
                                <Link href={`/shop/${item.product.id}`}>
                                    <div className="shrink-0 lg:order-1">
                                        <Image
                                            className="size-36 rounded-md"
                                            src={item.product.image ?? ""}
                                            alt={item.product.productTitle}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                </Link>

                                <div className="flex sm:hidden lg:flex items-center justify-between lg:order-3 lg:justify-end">
                                    <div className="flex items-center">
                                        <UpdateQuantity
                                            cartItemId={item.id}
                                            quantity={item.quantity}
                                        />
                                    </div>

                                    <div className="text-end lg:order-4 lg:w-32">
                                        <p className="text-base font-bold text-gray-900 dark:text-white">
                                            ${item.quantity * item.product.price}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full min-w-0 flex-1 space-y-4 lg:order-2 lg:max-w-md">
                                    <div className="space-y-2">
                                        <Link href={`/shop/${item.product.id}`}>
                                            <p className="line-clamp-2 text-base font-medium text-gray-900 hover:underline dark:text-white">
                                                {item.product.productTitle}
                                            </p>
                                        </Link>
                                        <div className="flex items-center justify-start gap-2">
                                            {item.product.color ? <Chip text={item.product.color} /> : null}
                                            {item.product.category ? <Chip text={item.product.category} /> : null}
                                            {item.product.status ? <Chip text={item.product.status} /> : null}
                                            {item.product.tag ? <Chip text={item.product.tag} /> : null}
                                        </div>
                                        <p className="text-base font-bold text-gray-900 dark:text-white">
                                            ${item.product.price}
                                        </p>

                                        <div className="hidden sm:flex lg:hidden items-center justify-start gap-4">
                                            <div className="flex items-center">
                                                <UpdateQuantity
                                                    cartItemId={item.id}
                                                    quantity={item.quantity}
                                                />
                                            </div>

                                            <div className="text-end lg:order-4 lg:w-32">
                                                <p className="text-base font-bold text-gray-900 dark:text-white">
                                                    (${item.quantity * item.product.price})
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 px-2">
                                        <label className="flex items-center justify-between">
                                            <input
                                                className="peer h-[2.5rem] w-[45vw] sm:w-[11rem] opacity-0"
                                                type="checkbox"
                                                checked={item.isSelected ?? false}
                                                onChange={() => handleCheck(item.id)}
                                            />
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "pointer-events-none w-[45%] sm:w-[11rem] h-[2.5rem] absolute text-sm font-medium peer-hover:bg-green-200 text-green-600 hover:underline",
                                                    item.isSelected ? "bg-green-200 peer-hover:bg-green-300/80" : ""
                                                )}
                                                size={"sm"}
                                            >
                                                {item.isSelected ? (
                                                    <CheckCheck
                                                        size={30}
                                                        className={cn("pr-1",
                                                            item.isSelected
                                                                ? "bg-green-200 text-green-900 peer-hover:bg-green-300/80"
                                                                : "",
                                                        )}
                                                    />
                                                ) : (
                                                    <Check className="pr-1" size={30} />
                                                )}
                                                {item.isSelected ? "Selected" : "Select"}
                                            </Button>
                                        </label>

                                        <DeleteItem
                                            cartItemId={item.id}
                                            productTitle={item.product.productTitle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex px-2 md:px-0 w-[97%] lg:w-[55rem] mx-auto xl:max-w-sm flex-1 flex-col">
                    <Checkout
                        selectedProducts={selectedProducts}
                    />
                </div>
            </div>

        </>
    )
}
