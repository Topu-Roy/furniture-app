"use client";
import React, { useEffect } from "react";
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
    });
  }

  return (
    <Button onClick={handleClick} size="lg" className="rounded-md font-bold">
      Add to cart
    </Button>
  );
}
