"use client";
import React from "react";
import { CartProductType, useCartStore } from "@/zustand/cart/cartStore";
import { Button } from "../ui/button";

export default function AddButton({
  category,
  color,
  id,
  image,
  price,
  productTitle,
  quantity,
  tag,
  status,
  isSelected,
}: CartProductType) {
  const { addToCart } = useCartStore();
  function handleClick() {
    addToCart({
      category,
      color,
      id,
      image,
      price,
      productTitle,
      quantity,
      tag,
      status,
      isSelected,
    });
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      variant={"outline"}
      className="rounded-md font-bold"
    >
      Add to cart
    </Button>
  );
}
