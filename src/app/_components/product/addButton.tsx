"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/trpc/server";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  productId: string;
  authId: string;
  quantity: number;
  className?: string;
};

export default function AddButton(props: Props) {
  const { authId, productId, quantity, className } = props;
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();
  //TODO: Fix this
  // async function handleClick() {
  //   setIsAdding(true);
  //   const addedProduct = await api.cart.createNewCartItem({
  //     productId,
  //     authId,
  //     quantity,
  //   });

  //   if (!addedProduct) {
  //     setIsAdding(false);
  //     return toast({
  //       variant: "destructive",
  //       title: "Something went wrong",
  //       description: "Product not added to cart",
  //     });
  //   }

  //   if (addedProduct.id) {
  //     setIsAdding(false);
  //     return toast({
  //       title: "Added to cart",
  //       description: "Product successfully added to cart",
  //     });
  //   }
  // }

  return (
    <Button
      // onClick={handleClick}
      size="lg"
      className={cn("rounded-md font-bold", className)}
    >
      {isAdding ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        "Add to cart"
      )}
      Add to cart
    </Button>
  );
}
