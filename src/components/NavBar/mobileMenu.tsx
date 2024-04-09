"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[8.5vw] flex-col items-center justify-center gap-1.5 rounded p-1 md:hidden"
      >
        <div className="h-[2px] w-[1.6rem] rounded-full bg-white" />
        <div className="h-[2px] w-[1.6rem] rounded-full bg-white" />
        <div className="h-[2px] w-[1.6rem] rounded-full bg-white" />
      </Button>

      <div
        className={cn(
          "absolute -top-5 bottom-0 left-0 z-[999] flex h-[100dvh] w-[85dvw] translate-x-[-110%] flex-col items-center justify-center gap-4 bg-black font-semibold text-white transition-all duration-200 sm:flex",
          {
            "translate-x-[-5%]": isOpen,
          },
        )}
      >
        <Button
          className="focus-visible:bg-primary absolute bottom-0 left-[6%] top-[3%] z-[1000] rounded-full bg-white text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          X
        </Button>

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
      </div>
    </>
  );
}
