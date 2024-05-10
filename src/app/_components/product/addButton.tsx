"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  productId: string;
  authId: string;
  quantity: number;
  className?: string;
};

//TODO: Make all fetch apis not localhost but the deployment url
export default function AddButton(props: Props) {
  const { authId, productId, quantity, className } = props;
  const { toast } = useToast();
  async function handleClick() {
    const addToCartRes = await fetch("http://localhost:3000/api/product/cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authId,
        productId,
        quantity,
      }),
    });

    if (!addToCartRes.ok) {
      return toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Product not added to cart",
      });
    }

    if (addToCartRes.ok) {
      return toast({
        title: "Added to cart",
        description: "Product successfully added to cart",
      });
    }
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className={cn("rounded-md font-bold", className)}
    >
      Add to cart
    </Button>
  );
}
