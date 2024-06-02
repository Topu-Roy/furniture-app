"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { getUserDetailsByAuthId } from '@/actions/userAction';
import { Heading } from '../_components/heading';

function LinkItem({ url, className, name }: { url: string, className?: string, name: string }) {
    return (
        <Link className='w-full' href={url}>
            <Button
                variant={'ghost'}
                className={cn('text-white font-semibold w-full hover:bg-stone-300/20 hover:text-white', className)}
            >
                {name}
            </Button>
        </Link >
    )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
    }, [scrollPosition])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isUserInfoLoading === true) return;

        async function checkAdmin() {
            if (!user) return router.push('/api/auth/login?post_login_redirect_url=/');

            const isAdmin = await getUserDetailsByAuthId({ authId: user?.id });

            if (isAdmin?.role !== 'ADMIN') return router.push('/api/auth/login?post_login_redirect_url=/');
            setIsLoading(false);
        }

        void checkAdmin();
    }, [isUserInfoLoading])

    if (isLoading) {
        return (
            <div className="mt-[5rem] max-w-[100rem] mx-auto py-20">
                <Heading>
                    Loading...
                </Heading>
            </div>
        )
    }


    return (
        <div className='mt-[4rem] max-w-[100rem] mx-auto py-10'>
            <div className="flex">
                <aside className='w-[15rem] relative min-h-[80dvh] bg-slate-700 rounded-md p-4 flex flex-col justify-start items-start gap-3'>
                    <div className={cn("sticky top-0 left-0 right-0 ease-in-out duration-150 transition-transform", isMargin ? "translate-y-[6.5rem]" : "")}>
                        <LinkItem
                            url='/dashboard'
                            className={path.length < 11 ? "bg-white text-gray-900 hover:text-gray-900 hover:bg-slate-200" : ""}
                            name='Dashboard'
                        />
                        <LinkItem
                            url='/dashboard/create'
                            className={path.includes("create") ? "text-gray-900 bg-white hover:text-gray-900 hover:bg-slate-300" : ""}
                            name='Create'
                        />
                        <LinkItem
                            url='/dashboard/products'
                            className={path.includes("products") ? "text-gray-900 bg-white hover:text-gray-900 hover:bg-slate-300" : ""}
                            name='Products'
                        />
                        <LinkItem
                            url='/dashboard/customers'
                            className={path.includes("customers") ? "text-gray-900 bg-white hover:text-gray-900 hover:bg-slate-300" : ""}
                            name='Customers'
                        />
                        <LinkItem
                            url='/dashboard/updates'
                            className={path.includes("/dashboard/updates") && !path.includes("/dashboard/updates/image") ? "text-gray-900 bg-white hover:text-gray-900 hover:bg-slate-300" : ""}
                            name='Edit Products'
                        />
                        <LinkItem
                            url='/dashboard/updates/image'
                            className={path.includes("dashboard/updates/image") ? "text-gray-900 bg-white hover:text-gray-900 hover:bg-slate-300" : ""}
                            name='Reupload Image'
                        />
                    </div>
                </aside>
                <div className="flex-1 mx-auto">
                    {children}
                </div>
            </div>

        </div>
    );
}
