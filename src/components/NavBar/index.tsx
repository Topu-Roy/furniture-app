'use client'
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";


export default function NavBar() {
  return (
    <header className="fixed top-0 flex z-50 h-[5rem] justify-center items-center w-full bg-white">
      <div className="w-[85rem] mx-auto flex flex-row justify-between">
        <Link href="/" legacyBehavior passHref>
          <Image src="images/img_frame_146.svg" height={146} width={146} alt="image" className="h-[30px] w-auto" />
        </Link>

        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              {
                // TODO
              }
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {
                      // TODO
                    }
                    <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Shop
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/aboutUs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/team" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-row justify-between w-auto gap-2">
          <Link href="/search" legacyBehavior passHref>
            <Button variant={"ghost"}>
              <Image height={50} width={50} src="images/img_search.svg" alt="search_one" className="h-6 w-6" />
            </Button>
          </Link>

          <Link href="/profile" legacyBehavior passHref>
            <Button variant={"ghost"}>
              <Image height={50} width={50} src="images/img_list_black_900.svg" alt="list_one" className="h-6 w-6" />
            </Button>
          </Link>

          <Link href="/cart" legacyBehavior passHref>
            <Button variant={"ghost"}>
              <Image height={50} width={50} src="images/img_list.svg" alt="list_three" className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </header >
  );
}
