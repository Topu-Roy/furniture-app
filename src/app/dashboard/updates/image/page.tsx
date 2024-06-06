"use client";

import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "@/actions/productAction";
import { Text } from "@/app/_components/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Category, type Product } from "@prisma/client";
import {
    Armchair,
    BedDouble,
    BookUser,
    GalleryVertical,
    Lamp,
    Loader2,
    PaintbrushVertical,
    RockingChair,
    Videotape,
} from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type SortingMethodType = "Name" | "Default" | "Price";

export default function ImageUpdater() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productWithInvalidImage, setProductWithInvalidImage] = useState<
        Product[]
    >([]);
    const [productWithInvalidImageSorted, setProductWithInvalidImageSorted] =
        useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
        "All",
    );
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const { toast } = useToast();
    const router = useRouter();

    //* Sorting Variables
    const [sort, setSort] = useState<SortingMethodType>("Default");
    const sortMethod: SortingMethodType[] = ["Default", "Name", "Price"];
    const categories: Array<Category | "All"> = [
        "All",
        "Bed",
        "Bookshelf",
        "Chair",
        "Drawer",
        "Lamp",
        "Sofa",
        "Table",
    ];

    //* Fetching all products
    useEffect(() => {
        async function getProducts() {
            const res = await getAllProducts();

            if (res) {
                setProducts(res);
            }
        }

        void getProducts();
    }, []);

    //* Filtering products with invalid image url
    useEffect(() => {
        const tempArr: Product[] = [];

        products.forEach((product) => {
            const valid = !product.image?.includes("utfs.io");
            if (valid) tempArr.push(product);
        });

        setProductWithInvalidImage(tempArr);
    }, [products]);

    //* Sorting and filtering products based on selected category and sorting method
    useEffect(() => {
        let sortedArr = [...productWithInvalidImage];

        if (selectedCategory !== "All") {
            sortedArr = sortedArr.filter(
                (product) => product.category === selectedCategory,
            );
        }

        if (sort === "Name") {
            sortedArr.sort((a, b) =>
                a.productTitle
                    .toLowerCase()
                    .localeCompare(b.productTitle.toLowerCase()),
            );
        }

        if (sort === "Price") {
            sortedArr.sort((a, b) => {
                if (a.price === undefined && b.price === undefined) return 0;
                if (a.price === undefined) return 1;
                if (b.price === undefined) return -1;

                return a.price - b.price;
            });
        }

        if (sort === "Default")
            setProductWithInvalidImageSorted(productWithInvalidImage);
        else setProductWithInvalidImageSorted(sortedArr);
    }, [productWithInvalidImage, sort, selectedCategory]);

    //* Delete product
    async function handleDelete({ id }: { id: string }) {
        setIsDeleting(true);

        //* Check if the product is already deleted
        if (products.some((product) => product.id !== id)) {
            setIsDeleting(false);

            return toast({
                variant: "destructive",
                title: "Not found",
                description: "Product already deleted",
            });
        }

        //* Delete the product
        const res = await deleteProduct({ productId: id });

        if (res.status === "SUCCESS") {
            //* Remove the product from the list
            setProducts(products.filter((product) => product.id !== id));
            setIsDeleting(false);

            return toast({
                title: "Success",
                description: "Product deleted successfully",
            });
        }

        if (res.status === "FAILED") {
            setIsDeleting(false);

            return toast({
                variant: "destructive",
                title: "Failed",
                description: "Failed to delete product",
            });
        }

        if (res.status === "NO_PERMIT") {
            setIsDeleting(false);

            return toast({
                variant: "destructive",
                title: "Failed",
                description: "You do not have permission to delete this product",
            });
        }
    }

    return (
        <>
            <div className="flex items-center justify-between px-4">
                <Card className="p-3">Total: {productWithInvalidImage.length}</Card>
                <div className="flex items-center justify-between gap-4">
                    <Select
                        onValueChange={(e: Category | "All") => setSelectedCategory(e)}
                        value={selectedCategory}
                    >
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        onValueChange={(e: SortingMethodType) => setSort(e)}
                        value={sort}
                    >
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="Sort" />
                        </SelectTrigger>
                        <SelectContent>
                            {sortMethod.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 p-4">
                {productWithInvalidImageSorted.map((product) => (
                    <Card
                        key={product.id}
                        className="aspect-square h-[16rem] w-full space-y-4 divide-y-2 border-primary/50 p-3"
                    >
                        <div className="flex h-[3.5rem] items-start justify-start gap-2">
                            <Text className="line-clamp-2 font-medium">
                                {product.productTitle}
                            </Text>
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                            <div className="flex flex-row items-center gap-2 rounded-md border p-4 text-gray-900/80">
                                <RenderCategoryIcon size={18} category={product.category} />
                                <Text size="s">{product.category}</Text>
                            </div>
                            <div className="flex flex-row items-center gap-2 rounded-md border p-4 text-gray-900/80">
                                <PaintbrushVertical size={18} />
                                <Text size="s">{product.color}</Text>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        className="h-12 w-full flex-1 hover:bg-rose-300"
                                        variant={"outline"}
                                    >
                                        Delete Product
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete
                                            the product and remove from the servers.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button
                                            variant={"destructive"}
                                            onClick={() => handleDelete({ id: product.id })}
                                        >
                                            Delete
                                            {isDeleting ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : null}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <Button
                                onClick={() =>
                                    router.push(
                                        `${BASE_URL}/dashboard/updates/image/upload?id=${product.id}&title=${product.productTitle}`,
                                    )
                                }
                                className="h-12 w-full flex-1 hover:bg-primary hover:text-white"
                                variant={"outline"}
                            >
                                Update Image
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}

function RenderCategoryIcon({
    category,
    size,
}: {
    category: Category;
    size: number;
}) {
    if (category === "Bed") return <BedDouble size={size} />;
    if (category === "Chair") return <RockingChair size={size} />;
    if (category === "Table") return <GalleryVertical size={size} />;
    if (category === "Lamp") return <Lamp size={size} />;
    if (category === "Drawer") return <Videotape size={size} />;
    if (category === "Bookshelf") return <BookUser size={size} />;
    if (category === "Sofa") return <Armchair size={size} />;

    return null;
}
