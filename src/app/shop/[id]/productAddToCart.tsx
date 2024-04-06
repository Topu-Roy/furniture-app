"use client";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/zustand/shop/shopStore";
import { Text } from "@/components";
import { Button } from "@/components/ui/button";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useCartStore } from "@/zustand/cart/cartStore";

type props = {
  product: ProductType;
};

export default function ProductAddToCart({ product }: props) {
  const { products, addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  useEffect(() => {
    if (product.price) {
      const newTotalPrice = quantity * product.price;
      setTotalPrice(newTotalPrice);
    }
  }, [quantity, product]);

  function updateQuantity(num: 1 | -1) {
    if (num === -1 && quantity === 1) return;
    setQuantity((prev) => prev + num);
  }

  function handleAddToCart() {
    const { category, color, id, image, price, productTitle, tag, status } =
      product;
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
    <div className="flex h-full w-full items-center justify-between gap-2">
      <div className="flex h-14 w-[25%] items-center justify-center gap-5 rounded-md border p-2">
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

      <div className="flex items-center justify-center gap-2">
        <Text size="md">Total :</Text>
        <Text size="xl" className="font-semibold">
          ${totalPrice}
        </Text>
      </div>

      <Button
        onClick={() => handleAddToCart()}
        className="h-14 w-[30%] rounded-md"
      >
        Add to cart
      </Button>
    </div>
  );
}
