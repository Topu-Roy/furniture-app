"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.JSX.Element;
  productId: string;
  authId: string;
  quantity: number;
};

export default function ButtonWithIcon(props: Props) {
  const { children, productId, authId, quantity } = props;
  const { toast } = useToast();
  const router = useRouter();

  const { mutate } = api.cart.createNewCartItem.useMutation({
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

  const handleClick = () => {
    mutate({
      productId,
      authId,
      quantity,
    });
  };

  return (
    <Button
      onClick={() => handleClick()}
      className="flex items-center justify-center rounded-full bg-white p-2 text-gray-700 hover:text-white"
    >
      {children}
    </Button>
  );
}
