"use client";
import React, { useEffect } from "react";
import { useCartStore } from "@/zustand/cart/cartStore";
import { CartProduct } from "@prisma/client";
import CartItem from "./cartItem";

type Props = {
  products: CartProduct[];
};

export default function RenderCart({ products }: Props) {
  useEffect(() => {
    useCartStore.setState({ products: products });
  }, [products]);

  return (
    <div className="w-[55rem] space-y-2">
      {products.map((item) => (
        <div key={item.id}>
          <CartItem
            quantity={item.quantity}
            isSelected={item.isSelected}
            productId={item.id}
            products={products}
          />
        </div>
      ))}
    </div>
  );
}
