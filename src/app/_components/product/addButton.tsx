"use client";
import React from "react";
import { type CartProductType, useCartStore } from "@/zustand/cart/cartStore";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  product: CartProductType;
  className?: string;
};

export default function AddButton({ product, className }: Props) {
  const { addToCart } = useCartStore();

  function handleClick() {
    addToCart(product);
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className={cn("rounded-md font-bold", className)}
    >
      Add to cart
    </Button>
  );
}
