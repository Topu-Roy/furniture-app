"use client";
import React from "react";
import { type CartProductType, useCartStore } from "@/zustand/cart/cartStore";
import { Button } from "../ui/button";

type Props = {
  product: CartProductType;
};

export default function AddButton({ product }: Props) {
  const { addToCart } = useCartStore();
  function handleClick() {
    addToCart(product);
  }

  return (
    <Button onClick={handleClick} size="lg" className="rounded-md font-bold">
      Add to cart
    </Button>
  );
}
