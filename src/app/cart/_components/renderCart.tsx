"use client";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/zustand/cart/cartStore";
import { CartProduct } from "@prisma/client";
import CartItem from "./cartItem";

type Props = {
  products: CartProduct[];
  authId: string;
};

export default function RenderCart({
  authId,
  products: productsFromProp,
}: Props) {
  const [loading, setLoading] = useState(true);
  const products = useCartStore((state) => state.products);
  const setProducts = useCartStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(productsFromProp);
    setLoading(false);
  }, [productsFromProp]);

  if (loading) {
    return <div className="w-[55rem]">Loading...</div>;
  }

  if (products.length === 0) {
    return <div className="w-[55rem]">Nothing in the cart...</div>;
  }

  return (
    <div className="w-[55rem] space-y-2">
      {products.map((item) => {
        return (
          <div key={item.id}>
            <CartItem
              cartItemId={item.id}
              authId={authId}
              quantity={item.quantity}
              isSelected={item.isSelected}
              productId={item.id}
            />
          </div>
        );
      })}
    </div>
  );
}
