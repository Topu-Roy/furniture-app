"use client";
import React, { useEffect, useState } from "react";
import { type CartProduct } from "@prisma/client";
import CartItem from "./cartItem";
import { useCartStore } from "@/zustand/cart/cartStore";

type Props = {
  products: CartProduct[];
};

export default function RenderCart({ products: productsFromProp }: Props) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<CartProduct[]>([]);
  const setProducts_store = useCartStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(productsFromProp);
    setProducts_store(products);
    setLoading(false);
  }, []);

  useEffect(() => {
    setProducts_store(products);
  }, [products]);

  if (loading) {
    return <div className="w-[55rem]">Loading...</div>;
  }

  if (products.length === 0) {
    return <div className="w-[55rem]">Nothing in the cart...</div>;
  }

  return (
    <div className="w-[55rem] space-y-2">
      {products.map((item) => (
        <div key={item.id}>
          <CartItem
            setProducts={setProducts}
            cartItemId={item.id}
            quantity={item.quantity}
            isSelected={item.isSelected}
            productId={item.id}
          />
        </div>
      ))}
    </div>
  );
}
