"use client";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/zustand/cart/cartStore";
import { CartProduct } from "@prisma/client";
import CartItem from "./cartItem";

type Props = {
  products: CartProduct[];
  authId: string;
};

export default function RenderCart(props: Props) {
  const [products, setProducts] = useState<CartProduct[]>(props.products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(props.products);
    useCartStore.setState({ products: props.products });
    setLoading(false);
  }, [useCartStore, products]);

  if (loading) {
    // Check if products is an empty array
    return <div className="w-[55rem]">Loading...</div>;
  }

  if (products.length === 0) {
    // Check if products is an empty array
    return <div className="w-[55rem]">Nothing in the cart...</div>;
  }

  return (
    <div className="w-[55rem] space-y-2">
      {products.map((item) => {
        console.log(item);
        console.log(products);
        return (
          <div key={item.id}>
            <CartItem
              authId={props.authId}
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
