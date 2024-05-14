"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

type Props = {
  productId: string;
  authId: string;
  quantity: number;
  className?: string;
};

export default function AddButton(props: Props) {
  const { authId, productId, quantity, className } = props;
  const router = useRouter();
  const { toast } = useToast();

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
      size="lg"
      className={cn("rounded-md font-bold", className)}
    >
      {isPending ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        "Add to cart"
      )}
    </Button>
  );
}
