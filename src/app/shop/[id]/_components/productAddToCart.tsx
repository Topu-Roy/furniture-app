"use client";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/zustand/cart/cartStore";
import { ProductType } from "@/zustand/shop/shopStore";
import { Button } from "@/components/ui/button";
import { TiPlus, TiMinus } from "react-icons/ti";

type props = {
  product: ProductType;
};

export default function ProductAddToCart({ product }: props) {
  const { products, addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [isAlreadyAddedToCart, setIsAlreadyAddedToCart] = useState(false);

  useEffect(() => {
    setIsAlreadyAddedToCart(products.some((item) => item.id === product.id));
  }, [product, products]);

  function updateQuantity(num: 1 | -1) {
    if (num === -1 && quantity === 1) return;
    setQuantity((prev) => prev + num);
  }

  function handleAddToCart() {
    const { category, color, id, image, productTitle, tag, status } = product;
    addToCart({
      productTitle,
      category,
      color,
      id,
      image,
      isSelected: false,
      price: product.price as number,
      quantity,
      tag,
      status,
    });
  }

  return (
    <div className="fixed bottom-0 left-0 z-[99] h-[5rem] w-[100%] md:static md:z-10 md:block">
      <div className="flex h-full w-full items-center justify-between gap-2 bg-slate-200 px-4 ring-0 md:justify-start md:px-0">
        <div className="flex h-14 flex-1 items-center justify-center gap-5 rounded-md border bg-white p-2 md:max-w-40">
          <Button
            onClick={() => updateQuantity(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full p-2"
            variant={"outline"}
          >
            <TiMinus size={20} className="text-black" />
          </Button>
          <span className="">{quantity}</span>
          <Button
            onClick={() => updateQuantity(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full p-2"
            variant={"outline"}
          >
            <TiPlus size={20} className="text-black" />
          </Button>
        </div>

        <Button
          onClick={() => handleAddToCart()}
          className="h-14 flex-1 rounded-md md:max-w-56"
        >
          {isAlreadyAddedToCart ? "Added to cart" : `Add to cart (${quantity})`}
        </Button>
      </div>
    </div>
  );
}
