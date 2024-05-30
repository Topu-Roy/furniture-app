"use client"

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import { type Product } from '@prisma/client';
import { getPaginatedProducts_withoutDescription, getTotalProductCount_withoutDescription } from '@/actions/productAction';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DataTable } from './data-table';
import { columns } from './columns';

export default function WithoutDescriptionTable() {
    const [products, setProducts] = useState<Product[]>([])
    const [totalProducts, setTotalProducts] = useState<number>(0)
    const searchParams = useSearchParams();

    // Pagination
    const perPage = parseInt(searchParams.get('perPage') ?? "10");
    const currentPage = parseInt(searchParams.get('currentPage') ?? "1");
    const totalPages = Math.ceil(totalProducts / perPage);

    const PaginationButtons: React.ReactElement[] = [];

    for (let i = 1; i <= totalPages; i++) {
        PaginationButtons.push(
            <Link
                href={`/dashboard/updates?perPage=${perPage}&currentPage=${i}`}
                key={i}
            >
                <Button
                    variant={currentPage === i ? "default" : "outline"}
                >
                    {i}
                </Button>
            </Link>
        );
    }

    //* Get total number of products on mount
    useEffect(() => {
        async function totalProductsCount() {
            const total = await getTotalProductCount_withoutDescription();
            setTotalProducts(total);
        }

        void totalProductsCount();
    }, [])

    //* Fill products if searchParams is changed
    useEffect(() => {
        const getProducts = async () => {
            const response = await getPaginatedProducts_withoutDescription({
                currentPage,
                perPage
            })

            if (response) {
                setProducts(response)
            }
        }

        void getProducts();
    }, [currentPage, perPage])

    return (
        <main className='max-w-7xl mx-auto'>
            <DataTable columns={columns} data={products} PaginationButtons={PaginationButtons} />
        </main>
    )
}
