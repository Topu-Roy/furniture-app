"use client"

import React, { useEffect, useState } from 'react'
import { getAllProducts, getTotalProductCount } from '@/actions/productAction'
import { getTotalUsersCount } from '@/actions/userAction';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useRouter } from 'next/navigation'
import { PencilRuler, Shirt, UsersRound } from 'lucide-react'
import CardComponent from './_components/cardComponent'
import { type Category, type Product } from '@prisma/client';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { defaultProductImageUrl } from '@/lib/defaults';
import { Text } from '../_components/text';
import { Heading } from '../_components/heading';
import Link from 'next/link';

type CardType = {
    title: Category;
    count: number;
    image: string;
}

export default function Dashboard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [needChangeCount, setNeedChangeCount] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [cards, setCards] = useState<CardType[]>([])
    const { getUser, isLoading } = useKindeBrowserClient();
    const user = getUser();
    const router = useRouter();

    useEffect(() => {
        if (isLoading) return;

        function getCountByCategory(category: Category) {
            const productsInThisCategory = products.filter((product) => product.category === category);
            const count = productsInThisCategory.length;
            const image = productsInThisCategory[0]?.image;
            return { count: count, image: image };
        }

        const chairCount = getCountByCategory('Chair');
        const tableCount = getCountByCategory('Table');
        const bedCount = getCountByCategory('Bed');
        const lampCount = getCountByCategory('Lamp');
        const drawerCount = getCountByCategory('Drawer');
        const bookshelfCount = getCountByCategory('Bookshelf');
        const sofaCount = getCountByCategory('Sofa');

        const cards: CardType[] = [
            {
                title: 'Chair',
                count: chairCount.count,
                image: chairCount.image ?? defaultProductImageUrl,
            }, {
                title: 'Table',
                count: tableCount.count,
                image: tableCount.image ?? defaultProductImageUrl,
            }, {
                title: 'Bed',
                count: bedCount.count,
                image: bedCount.image ?? defaultProductImageUrl,
            }, {
                title: 'Lamp',
                count: lampCount.count,
                image: lampCount.image ?? defaultProductImageUrl,
            }, {
                title: 'Drawer',
                count: drawerCount.count,
                image: drawerCount.image ?? defaultProductImageUrl,
            }, {
                title: 'Bookshelf',
                count: bookshelfCount.count,
                image: bookshelfCount.image ?? defaultProductImageUrl,
            }, {
                title: 'Sofa',
                count: sofaCount.count,
                image: sofaCount.image ?? defaultProductImageUrl,
            }
        ]

        setCards(cards);
    }, [products, isLoading])

    useEffect(() => {
        if (isLoading) return;

        async function getInfo() {
            if (!user?.id) return;
            const allProducts = await getAllProducts();
            const totalProducts = await getTotalProductCount();
            const totalUsers = await getTotalUsersCount({ authId: user?.id });

            if (!totalUsers || totalUsers === null) return router.push('/api/auth/login?post_login_redirect_url=/');

            setTotalProducts(totalProducts);
            setTotalUsers(totalUsers);
            setProducts(allProducts);
        }

        void getInfo();
    }, [isLoading])

    useEffect(() => {
        if (isLoading) return;

        //* Temporarily array
        const productsWithEmptyDescription: Product[] = []
        const productsWithInvalidImageUrl: Product[] = []

        //* Check if product description is empty
        products.forEach((product) => {
            if (product.description === '') productsWithEmptyDescription.push(product);
        })

        //* Check if product ImageUrl is not a valid URL
        products.forEach((product) => {
            const valid = !product.image?.includes("utfs.io");
            if (valid) productsWithInvalidImageUrl.push(product);
        })

        setNeedChangeCount(productsWithEmptyDescription.length + productsWithInvalidImageUrl.length);
    }, [products, isLoading])

    return (
        <main className='w-full px-4 space-y-4'>
            <div className='flex justify-between items-center gap-4'>
                <CardComponent
                    link='/dashboard/products'
                    title='Total products'
                    count={totalProducts}
                    icon={<Shirt />}
                />
                <CardComponent
                    link='/dashboard/customers'
                    title='Total customers'
                    count={totalUsers}
                    icon={<UsersRound />}
                />
                <CardComponent
                    link='/dashboard/updates'
                    title='Need updates'
                    count={needChangeCount}
                    icon={<PencilRuler />}
                />
            </div>

            <section>
                <Heading className='py-6'>Category</Heading>
                <div className="grid grid-cols-5 gap-3 place-content-center">
                    {
                        cards.map((card, index) => (
                            <div key={`${index}-${card.image}`} className="flex justify-center items-center hover:scale-105 transition-all ease-in-out">
                                <Link href={'/dashboard/products'}>
                                    <Card className='p-0 relative overflow-hidden w-[250px]'>
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            height={250}
                                            width={250}
                                            className='rounded-md pointer-events-none'
                                        />

                                        <div className='absolute bottom-[5%] left-0 right-0 z-30 px-4 flex justify-between items-center'>
                                            <Text size='max' className='font-bold text-white/85'>{card.title}s</Text>
                                            <Text size='max' className='font-black text-white/85'>{card.count}</Text>
                                        </div>

                                        {/* //* Dark Overlay */}
                                        <div className='absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t to-transparent from-black pointer-events-none'></div>
                                    </Card>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}
