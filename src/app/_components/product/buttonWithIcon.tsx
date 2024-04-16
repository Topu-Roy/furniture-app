"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { type CartProductType, useCartStore } from "@/zustand/cart/cartStore";

type Props = {
  children: React.JSX.Element;
  role: "favorite" | "cart";
  product: CartProductType;
};

export default function ButtonWithIcon({ children, product, role }: Props) {
  const { addToCart } = useCartStore();
  function handleClick() {
    addToCart(product);
  }
  return (
    <Button
      onClick={() => handleClick()}
      className="flex items-center justify-center rounded-full bg-white p-2 text-gray-700 hover:text-white"
    >
      {children}
    </Button>
  );
}
