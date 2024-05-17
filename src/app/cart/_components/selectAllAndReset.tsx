"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CartProduct } from "@prisma/client";
import { useCartStore } from "@/zustand/cart/cartStore";

export default function SelectAllAndReset() {
  const [productsToRender, setProductsToRender] = useState<CartProduct[]>([]);
  const products = useCartStore((store) => store.products);
  const setProducts = useCartStore((store) => store.setProducts);

  function handleSelectAll() {
    setProducts(
      products.map((item) => ({
        ...item,
        isSelected: true,
      })),
    );
  }

  function handleReset() {
    setProducts(
      products.map((item) => ({
        ...item,
        isSelected: false,
      })),
    );
  }

  useEffect(() => {
    setProductsToRender(products);
  }, [products]);

  return (
    <>
      {productsToRender.length !== 0 ? (
        <div className="mx-auto flex max-w-7xl items-start justify-start gap-2 pb-4">
          <Button onClick={() => handleSelectAll()} className="hover:scale-105">
            Select All
          </Button>
          <Button onClick={() => handleReset()} className="hover:scale-105">
            Reset
          </Button>
        </div>
      ) : null}
    </>
  );
}
