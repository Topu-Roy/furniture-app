"use client";
import React, { useOptimistic } from "react";
import { Button } from "@/components/ui/button";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Text } from "@/app/_components/text";
import { revalidatePath } from "next/cache";

type Props = {
  productId: string;
  quantity: number;
};

export default function UpdateQuantity({ productId, quantity }: Props) {
  const [optimisticQuantity, addOptimisticQuantity] = useOptimistic(quantity);

  async function handleClick(count: 1 | -1) {
    if (optimisticQuantity === 1 && count === -1) return;
    addOptimisticQuantity((prev) => prev + count);
    await fetch("http://localhost:3000/api/product/cart", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        quantity: quantity + count,
      }),
    }).then(() => {
      revalidatePath("/cart");
    });
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <Text className="font-semibold text-black/75">Quantity:</Text>
      <div className="flex h-14 items-center justify-center gap-5 rounded-md border border-black/40 p-2">
        <Button
          onClick={() => handleClick(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-full p-2"
          variant={"outline"}
        >
          <TiMinus size={20} className="text-black" />
        </Button>
        <span className="">{optimisticQuantity}</span>
        <Button
          onClick={() => handleClick(1)}
          className="flex h-8 w-8 items-center justify-center rounded-full p-2"
          variant={"outline"}
        >
          <TiPlus size={20} className="text-black" />
        </Button>
      </div>
    </div>
  );
}
