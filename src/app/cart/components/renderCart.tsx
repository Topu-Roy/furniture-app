"use client";
import React, { useEffect, useState } from "react";
import { CartProductType, useCartStore } from "@/zustand/cart/cartStore";
import CartItem from "./cartItem";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components";
import Link from "next/link";

export default function RenderCart() {
  const [productsToRender, setProductsToRender] = useState<CartProductType[]>(
    [],
  );
  const { products } = useCartStore();
  useEffect(() => {
    setProductsToRender(products);
  }, [products]);
  return (
    <>
      {productsToRender.length !== 0 ? (
        <CartItem products={productsToRender} />
      ) : (
        <div className="flex h-[10rem] w-full flex-col items-center justify-center gap-4">
          <Heading size="md" className="text-center text-neutral-700">
            Cart is empty
          </Heading>
          <Link href={"/shop"}>
            <Button variant={"outline"}>Explore new products</Button>
          </Link>
        </div>
      )}
    </>
  );
}
