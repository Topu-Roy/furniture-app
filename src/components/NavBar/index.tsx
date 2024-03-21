"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 flex h-[5rem] w-full items-center justify-center bg-white">
      <div className="mx-auto flex w-[85rem] flex-row justify-between">
        <Link href="/homePage">
          <Image
            src="images/img_frame_146.svg"
            height={146}
            width={146}
            alt="image"
            className="h-[30px] w-auto"
          />
        </Link>

        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              {
                // TODO
              }
              <Link href="/homePage">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {
                      // TODO
                    }
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Shop
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/aboutUs" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/team" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex w-auto flex-row justify-between gap-2">
          <Link href="/search" passHref>
            <Button variant={"ghost"}>
              <Image
                height={50}
                width={50}
                src="images/img_search.svg"
                alt="search_one"
                className="h-6 w-6"
              />
            </Button>
          </Link>

          <Link href="/profile" passHref>
            <Button variant={"ghost"}>
              <Image
                height={50}
                width={50}
                src="images/img_list_black_900.svg"
                alt="list_one"
                className="h-6 w-6"
              />
            </Button>
          </Link>

          <Link href="/cart" passHref>
            <Button variant={"ghost"}>
              <Image
                height={50}
                width={50}
                src="images/img_list.svg"
                alt="list_three"
                className="h-6 w-6"
              />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
