"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getUserDetailsByAuthId } from "@/actions/userAction";
import { Heading } from "../_components/heading";
import { Cross as Hamburger } from 'hamburger-react';

function LinkItem({
    url,
    className,
    name,
}: {
    url: string;
    className?: string;
    name: string;
}) {
    return (
        <Link className="w-full" href={url}>
            <Button
                variant={"ghost"}
                className={cn(
                    "w-full font-semibold text-white hover:bg-stone-300/20 hover:text-white",
                    className,
                )}
            >
                {name}
            </Button>
        </Link>
    );
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const path = usePathname();
    const { getUser, isLoading: isUserInfoLoading } = useKindeBrowserClient();
    const user = getUser();
    const router = useRouter();
    const [isMargin, setIsMargin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        if (scrollPosition > 150) {
            setIsMargin(true);
        } else {
            setIsMargin(false);
        }
    }, [scrollPosition]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isUserInfoLoading === true) return;

        async function checkAdmin() {
            if (!user)
                return router.push("/api/auth/login?post_login_redirect_url=/");

            const isAdmin = await getUserDetailsByAuthId({ authId: user?.id });

            if (isAdmin?.role !== "ADMIN")
                return router.push("/api/auth/login?post_login_redirect_url=/");
            setIsLoading(false);
        }

        void checkAdmin();
    }, [isUserInfoLoading]);

    if (isLoading) {
        return (
            <div className="mx-auto mt-[5rem] max-w-[100rem] py-20">
                <Heading>Loading...</Heading>
            </div>
        );
    }

    return (
        <div className="mx-auto mt-[4rem] w-full py-10 lg:max-w-[100rem]">
            <div className="flex lg:px-2 2xl:px-0">
                <aside className="relative hidden lg:flex min-h-[80dvh] w-[15rem] flex-col items-start justify-start gap-3 rounded-md bg-slate-700 p-4">
                    <div
                        className={cn(
                            "sticky left-0 right-0 top-0 transition-transform duration-150 ease-in-out",
                            isMargin ? "translate-y-[6.5rem]" : "",
                        )}
                    >
                        <LinkItem
                            url="/dashboard"
                            className={
                                path.length < 11
                                    ? "bg-white text-gray-900 hover:bg-slate-200 hover:text-gray-900"
                                    : ""
                            }
                            name="Dashboard"
                        />
                        <LinkItem
                            url="/dashboard/create"
                            className={
                                path.includes("create")
                                    ? "bg-white text-gray-900 hover:bg-slate-300 hover:text-gray-900"
                                    : ""
                            }
                            name="Create"
                        />
                        <LinkItem
                            url="/dashboard/products"
                            className={
                                path.includes("products")
                                    ? "bg-white text-gray-900 hover:bg-slate-300 hover:text-gray-900"
                                    : ""
                            }
                            name="Products"
                        />
                        <LinkItem
                            url="/dashboard/customers"
                            className={
                                path.includes("customers")
                                    ? "bg-white text-gray-900 hover:bg-slate-300 hover:text-gray-900"
                                    : ""
                            }
                            name="Customers"
                        />
                        <LinkItem
                            url="/dashboard/updates"
                            className={
                                path.includes("/dashboard/updates") &&
                                    !path.includes("/dashboard/updates/image")
                                    ? "bg-white text-gray-900 hover:bg-slate-300 hover:text-gray-900"
                                    : ""
                            }
                            name="Edit Products"
                        />
                        <LinkItem
                            url="/dashboard/updates/image"
                            className={
                                path.includes("dashboard/updates/image")
                                    ? "bg-white text-gray-900 hover:bg-slate-300 hover:text-gray-900"
                                    : ""
                            }
                            name="Reupload Image"
                        />
                    </div>
                </aside>
                <div className="mx-auto relative flex-1">
                    <div className="fixed bottom-[5%] right-[5%] z-40 lg:hidden">
                        <Button className="rounded-full bg-primary text-white p-1 size-14 flex justify-center items-center">
                            <Hamburger />
                        </Button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );

}
