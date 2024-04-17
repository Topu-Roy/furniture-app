"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsCart2 } from "react-icons/bs";
import { useCartStore } from "@/zustand/cart/cartStore";
import { cn } from "@/lib/utils";

export default function CartIcon() {
  const { products } = useCartStore();
  return (
    <Link href={"/cart"}>
      <Button variant={"ghost"} className="relative p-1">
        <BsCart2 size={20} />
        <div
          className={cn(
            "absolute -right-[5%] top-[20%] z-[51] hidden h-2 w-2 rounded-full bg-destructive",
            {
              block: products.length > 0,
            },
          )}
        />
      </Button>
    </Link>
  );
}
