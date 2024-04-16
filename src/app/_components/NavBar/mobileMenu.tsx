import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileMenu() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="flex h-[2rem] flex-col items-center justify-center gap-1.5 rounded p-1 md:hidden">
            <div className="h-[2px] w-[1.6rem] rounded-full bg-white" />
            <div className="h-[2px] w-[1.6rem] rounded-full bg-white" />
            <div className="h-[2px] w-[1.6rem] rounded-full bg-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <Link
              href="/home"
              className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
            >
              <Button variant={"ghost"}>Home</Button>
            </Link>

            <Link
              href="/shop"
              className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
            >
              <Button variant={"ghost"}>Shop</Button>
            </Link>

            <Link
              href="/blog"
              className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
            >
              <Button variant={"ghost"}>Blog</Button>
            </Link>

            <Link
              href="/aboutUs"
              className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
            >
              <Button variant={"ghost"}>About Us</Button>
            </Link>

            <Link
              href="/team"
              className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
            >
              <Button variant={"ghost"}>Team</Button>
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
