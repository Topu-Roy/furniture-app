"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CartProductType, useCartStore } from "@/zustand/cart/cartStore";

export default function SelectAllAndReset() {
  const [productsToRender, setProductsToRender] = useState<CartProductType[]>(
    [],
  );
  const { products } = useCartStore();

  function handleSelectAll() {
    useCartStore.setState({
      products: products.map((item) => ({
        ...item,
        isSelected: true,
      })),
    });
  }

  function handleReset() {
    useCartStore.setState({
      products: products.map((item) => ({
        ...item,
        isSelected: false,
      })),
    });
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
