"use client";
import React from "react";
import { useCartStore } from "@/zustand/cart/cartStore";
import { Button } from "@/components/ui/button";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Text } from "@/app/_components/text";

type Props = {
  id: number;
  quantity: number;
};

export default function UpdateQuantity({ id, quantity }: Props) {
  const { increaseQuantity, decreaseQuantity } = useCartStore();

  function handleIncrease(id: number) {
    increaseQuantity(id);
  }
  function handleDecrease(id: number) {
    decreaseQuantity(id);
  }
  return (
    <div className="flex items-center justify-between gap-2">
      <Text className="font-semibold text-black/75">Quantity:</Text>
      <div className="flex h-14 items-center justify-center gap-5 rounded-md border border-black/40 p-2">
        <Button
          onClick={() => handleDecrease(id)}
          className="flex h-8 w-8 items-center justify-center rounded-full p-2"
          variant={"outline"}
        >
          <TiMinus size={20} className="text-black" />
        </Button>
        <span className="">{quantity}</span>
        <Button
          onClick={() => handleIncrease(id)}
          className="flex h-8 w-8 items-center justify-center rounded-full p-2"
          variant={"outline"}
        >
          <TiPlus size={20} className="text-black" />
        </Button>
      </div>
    </div>
  );
}
