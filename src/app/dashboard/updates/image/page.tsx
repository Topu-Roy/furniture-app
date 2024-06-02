"use client"

import { deleteProduct, getAllProducts } from '@/actions/productAction'
import { Text } from '@/app/_components/text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type Category, type Product } from '@prisma/client';
import { Armchair, BedDouble, BookUser, GalleryVertical, Lamp, Loader2, PaintbrushVertical, RockingChair, Videotape } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ImageUpdater() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productWithInvalidImage, setProductWithInvalidImage] = useState<Product[]>([]);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const { toast } = useToast();
    const router = useRouter();

    //* Getting all products
    useEffect(() => {
        async function getProducts() {
            const res = await getAllProducts();

            if (res) {
                setProducts(res);
            }
        }

        void getProducts();
    }, [])

    //* Filtering products with invalid image url
    useEffect(() => {
        const tempArr: Product[] = []

        products.forEach((product) => {
            const valid = !product.image?.includes("utfs.io");
            if (valid) tempArr.push(product);
        })

        setProductWithInvalidImage(tempArr);
    }, [products])

    async function handleDelete({ id }: { id: string }) {
        setIsDeleting(true);

        //* Check if the product is already deleted
        if (products.some(product => product.id !== id)) {
            setIsDeleting(false);

            return toast({
                variant: "destructive",
                title: 'Not found',
                description: 'Product already deleted',
            })
        }

        //* Delete the product
        const res = await deleteProduct({ productId: id });

        if (res.status === 'SUCCESS') {
            //* Remove the product from the list
            setProducts(products.filter(product => product.id !== id));
            setIsDeleting(false);

            return toast({
                title: 'Success',
                description: 'Product deleted successfully',
            })
        }

        if (res.status === 'FAILED') {
            setIsDeleting(false);

            return toast({
                variant: "destructive",
                title: 'Failed',
                description: 'Failed to delete product',
            })
        }

        if (res.status === "NO_PERMIT") {
            setIsDeleting(false);

            return toast({
                variant: "destructive",
                title: 'Failed',
                description: 'You do not have permission to delete this product',
            })
        }
    }

    const sortMethod = [
        {
            value: "name",
            title: "Name",
        },
        {
            value: "price",
            title: "Price",
        }
    ]

    const filterMethod = [
        {
            value: "name",
            title: "Name",
        },
    ]


    return (
        <>
            <div>productWithInvalidImage: {productWithInvalidImage.length}</div>
            <div>
                <div className=""></div>
                <div className="">
                    <Select value='' onValueChange={(val) => { }}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort" />
                        </SelectTrigger>
                        <SelectContent>
                            {sortMethod.map(item => <SelectItem value={item.value}>{item.title}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 p-4">
                {productWithInvalidImage.map(product => (
                    <Card key={product.id} className='w-full aspect-square h-[16rem] p-3 divide-y-2 space-y-4 border-primary/50'>
                        <div className='flex h-[3.5rem] justify-start items-start gap-2'>
                            <Text className='line-clamp-2 font-medium'>
                                {product.productTitle}
                            </Text>
                        </div>
                        <div className="flex gap-2 items-center pt-4">
                            <div className="p-4 border flex flex-row gap-2 items-center rounded-md text-gray-900/80">
                                <RenderCategoryIcon size={18} category={product.category} />
                                <Text size='s'>{product.category}</Text>
                            </div>
                            <div className="p-4 border flex flex-row gap-2 items-center rounded-md text-gray-900/80">
                                <PaintbrushVertical size={18} />
                                <Text size='s'>{product.color}</Text>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-2 pt-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className='h-12 w-full flex-1 hover:bg-rose-300' variant={'outline'}>
                                        Delete Product
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete the product
                                            and remove from the servers.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button variant={'destructive'} onClick={() => handleDelete({ id: product.id })}>
                                            Delete
                                            {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>


                            <Button
                                onClick={() => router.push(`${BASE_URL}/dashboard/updates/image/upload?id=${product.id}&title=${product.productTitle}`)}
                                className='h-12 w-full flex-1 hover:text-white hover:bg-primary' variant={'outline'}
                            >
                                Update Image
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )

}

function RenderCategoryIcon({ category, size }: { category: Category, size: number }) {
    if (category === "Bed") return <BedDouble size={size} />
    if (category === "Chair") return <RockingChair size={size} />
    if (category === "Table") return <GalleryVertical size={size} />
    if (category === "Lamp") return <Lamp size={size} />
    if (category === "Drawer") return <Videotape size={size} />
    if (category === "Bookshelf") return <BookUser size={size} />
    if (category === "Sofa") return <Armchair size={size} />

    return null;
}