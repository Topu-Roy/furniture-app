"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type Product } from "@prisma/client";

import { useEffect, useState } from "react";
import { getUserDetailsByAuthId } from "@/actions/userAction";
import { Text } from "@/app/_components/text";

const CreatedByCell: React.FC<{ product: Product }> = ({ product }) => {
    const [userEmail, setUserEmail] = useState<string | null>('');

    async function getUserDetails() {
        const user = await getUserDetailsByAuthId({ authId: product.createdBy });

        if (user) {
            setUserEmail(user.email);
        }
    }

    useEffect(() => {
        void getUserDetails();
    }, [])


    return (
        <Text size="xs">
            {userEmail}
        </Text>
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
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "image",
        header: "ImageUrl",
    },
    {
        accessorKey: "price",
        header: "Price",
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
