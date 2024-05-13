"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/trpc/server";

type Props = {
  children: React.JSX.Element;
  productId: string;
  authId: string;
  quantity: number;
};

export default function ButtonWithIcon(props: Props) {
  const { children, productId, authId, quantity } = props;
  const { toast } = useToast();

  //TODO: api fix
  // async function handleClick() {
  //   const addToCartRes = await api.cart.createNewCartItem({
  //     productId,
  //     authId,
  //     quantity,
  //   });

  //   if (!addToCartRes) {
  //     return toast({
  //       variant: "destructive",
  //       title: "Something went wrong",
  //       description: "Product not added to cart",
  //     });
  //   }

  //   if (addToCartRes.id) {
  //     return toast({
  //       title: "Added to cart",
  //       description: "Product successfully added to cart",
  //     });
  //   }
  // }

  return (
    <Button
      // onClick={() => handleClick()}
      className="flex items-center justify-center rounded-full bg-white p-2 text-gray-700 hover:text-white"
    >
      {children}
    </Button>
  );
}
