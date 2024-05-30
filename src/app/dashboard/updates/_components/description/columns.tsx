"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type Product } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CreatedByCell: React.FC<{ product: Product }> = ({ product }) => {
    const router = useRouter();

    function handleClick() {
        router.push(`/dashboard/updates/edit?productId=${product.id}`)
    }

    return (
        <Button variant={'outline'} onClick={() => handleClick()} className="hover:bg-primary hover:text-white">
            Edit product
        </Button>
    );
};

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "productTitle",
        header: "Title",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "image",
        header: "ImageUrl",
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "color",
        header: "Color",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "tag",
        header: "Tag",
    },
    {
        id: "createdBy",
        cell: ({ row }) => <CreatedByCell product={row.original} />,
    },
];
