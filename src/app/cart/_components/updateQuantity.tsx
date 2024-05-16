"use client";
import React, { useOptimistic } from "react";
import { Button } from "@/components/ui/button";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Text } from "@/app/_components/text";
import { revalidatePath } from "next/cache";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  productId: string;
  quantity: number;
};

export default function UpdateQuantity({ productId, quantity }: Props) {
  const [optimisticQuantity, addOptimisticQuantity] = useOptimistic(quantity);
  const { toast } = useToast();
  const router = useRouter();
  const { mutate } = api.cart.updatedCartItem.useMutation({
    onError() {
      return toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Something went wrong while updating the quantity",
      });
    },
    onSuccess() {
      router.refresh();
    },
  });

  async function handleClick(count: 1 | -1) {
    if (optimisticQuantity === 1 && count === -1) return;
    addOptimisticQuantity((prev) => prev + count);
    mutate({
      productId: productId,
      quantity: quantity + count,
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
