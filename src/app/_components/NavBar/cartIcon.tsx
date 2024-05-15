"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsCart2 } from "react-icons/bs";
import { useCartStore } from "@/zustand/cart/cartStore";
import { cn } from "@/lib/utils";
import { CartProduct } from "@prisma/client";

export default function CartIcon() {
  const [willShow, setWillShow] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);
  const { products: storedProducts } = useCartStore();

  useEffect(() => {
    setProducts(storedProducts);
    setWillShow(products.length > 0 ? true : false);
  }, [products, storedProducts]);

  return (
    <Link href={"/cart"}>
      <Button variant={"ghost"} className="relative p-1">
        <BsCart2 size={20} />
        <div
          className={cn(
            "absolute -right-[5%] top-[20%] z-[51] hidden h-2 w-2 rounded-full bg-destructive",
            willShow ? "block" : "",
          )}
        />
      </Button>
    </Link>
  );
}
