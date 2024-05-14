"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type props = {
  authId: string;
  productId: string;
};

export default function ProductAddToCart({ authId, productId }: props) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const router = useRouter();

  const { mutate, isPending } = api.cart.createNewCartItem.useMutation({
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Added to cart",
        description: "Product successfully added to cart",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Product not added to cart",
      });
    },
  });

  async function handleAddToCart() {
    mutate({ productId, authId, quantity });
  }

  function updateQuantity(num: 1 | -1) {
    if (num === -1 && quantity === 1) return;
    setQuantity((prev) => prev + num);
  }

  return (
    <div className="fixed bottom-0 left-0 z-[99] h-[5rem] w-[100%] md:static md:z-10 md:block">
      <div className="flex h-full w-full items-center justify-between gap-2 bg-slate-200 px-4 ring-0 md:justify-start md:px-0">
        <div className="flex h-14 flex-1 items-center justify-center gap-5 rounded-md border bg-white p-2 md:max-w-40">
          <Button
            onClick={() => handleAddToCart()}
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
          className={cn(
            "h-14 flex-1 rounded-md md:max-w-56",
            isPending ? "opacity-90" : "",
          )}
        >
          {isPending
            ? `Adding item (${quantity})`
            : `Add to cart (${quantity})`}
        </Button>
      </div>
    </div>
  );
}
