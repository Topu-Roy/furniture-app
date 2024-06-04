"use client"

import React, { useEffect, useState } from 'react'
import { getAllProducts, getTotalProductCount } from '@/actions/productAction';
import { getTotalUsersCount } from '@/actions/userAction';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { type Product } from '@prisma/client';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { ImageOff, ShoppingBasket, Text as TextIcon } from 'lucide-react';
import { Text } from '@/app/_components/text';
import { cn } from '@/lib/utils';
import CardComponent from './_components/cardComponent';
import WithoutDescriptionTable from './_components/description/description';

export default function Updates() {
    const [products, setProducts] = useState<Product[]>([]);
    const [emptyDescription, setEmptyDescription] = useState<Product[]>([]);
    const [invalidImageUrl, setInvalidImageUrl] = useState<Product[]>([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const { getUser, isLoading } = useKindeBrowserClient();
    const user = getUser();
    const router = useRouter();

    useEffect(() => {
        if (isLoading) return;

        async function getUserInfo() {
            if (!user?.id) return;
            const allProducts = await getAllProducts();
            const totalProducts = await getTotalProductCount();
            const totalUsers = await getTotalUsersCount({ authId: user?.id });

            if (!totalUsers || totalUsers === null) return router.push('/api/auth/login?post_login_redirect_url=/');

            setTotalProducts(totalProducts);
            setProducts(allProducts);
        }

        void getUserInfo();
    }, [isLoading])

    useEffect(() => {
        if (isLoading) return;

        const tempArr_description: Product[] = []
        const tempArr_imageUrl: Product[] = []

        //* Check if product description is empty
        products.forEach((product) => {
            if (product.description === '') {
                tempArr_description.push(product);
            }
        })

        //* Check if product ImageUrl is not a valid URL
        products.forEach((product) => {
            const valid = !product.image?.includes("utfs.io");
            if (valid) tempArr_imageUrl.push(product);
        })

        setEmptyDescription(tempArr_description);
        setInvalidImageUrl(tempArr_imageUrl);
    }, [products, isLoading])

    return (
        <main className='space-y-4 px-4'>
            <Card className='w-full p-3 flex justify-between items-center'>
                <Text>Total Products: <span className='font-bold'>{totalProducts}</span></Text>
                <Text>Issues found: <span className={cn('font-bold', emptyDescription.length + invalidImageUrl.length > 0 ? "text-rose-500" : "")}>
                    {emptyDescription.length + invalidImageUrl.length}</span>
                </Text>
            </Card>

            <div className="flex justify-between items-center gap-2">
                <CardComponent
                    count={products.length}
                    icon={<ShoppingBasket />}
                    title='Total Products'
                />

                <CardComponent
                    count={emptyDescription.length}
                    icon={<TextIcon />}
                    title='Empty Description'
                    className={emptyDescription.length > 0 ? "text-rose-500" : ""}
                />

                <CardComponent
                    count={invalidImageUrl.length}
                    icon={<ImageOff />}
                    title='Invalid URL'
                    className={emptyDescription.length > 0 ? "text-rose-500" : ""}
                />
            </div>

            <section>
                <WithoutDescriptionTable />
            </section>
        </main>
    )
}