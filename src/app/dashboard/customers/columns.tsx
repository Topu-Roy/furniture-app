"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteUserByEmail, removeAsAdmin } from "@/actions/userAction";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export type User = {
    id: string;
    authId: string;
    role: "USER" | "ADMIN";
    email: string | null;
    imageUrl: string | null;
    firstName: string | null;
    lastName: string | null;
};

const ActionsCell: React.FC<{ user: User }> = ({ user }) => {
    const router = useRouter();
    const [isRemovingAdmin, setIsRemovingAdmin] = useState(false);
    const [isDeletingUser, setIsDeletingUser] = useState(false);

    const handleRemoveAdmin = async () => {
        setIsRemovingAdmin(true);
        setIsRemovingAdmin(false);

        if (!user.email) {
            setIsRemovingAdmin(false);
            return;
        }

        const res = await removeAsAdmin({ targetId: user.id });

        setIsRemovingAdmin(false);

        if (res.action === "UNAUTHORIZED") {
            return toast({
                variant: "destructive",
                title: "Unauthorized",
                description: "You are not authorized to perform this action",
            });
        }

        if (res.action === "ALREADY_USER") {
            return toast({
                title: "Already user",
                description: "This user is already a user",
            });
        }

        if (res.action === "MADE_USER") {
            router.refresh();
            return toast({
                title: "Role changed",
                description: "This admin is now a user",
            });
        }
    };

    const handleDeleteUser = async () => {
        setIsDeletingUser(true);
        if (!user.email) {
            setIsDeletingUser(false);
            return;
        }

        await deleteUserByEmail({ email: user.email, id: user.id });
        setIsDeletingUser(false);
        router.refresh();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(user.email ?? "")}
                >
                    Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={handleRemoveAdmin}
                    disabled={isRemovingAdmin}
                >
                    {isRemovingAdmin ? "Removing..." : "Remove admin"}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="bg-rose-400 hover:bg-rose-500"
                    onClick={handleDeleteUser}
                    disabled={isDeletingUser}
                >
                    {isDeletingUser ? "Deleting..." : "Delete user"}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "firstName",
        header: "FirstName",
    },
    {
        accessorKey: "lastName",
        header: "LastName",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "imageUrl",
        header: "ImageUrl",
    },
    {
        id: "actions",
        cell: ({ row }) => <ActionsCell user={row.original} />,
    },
];
