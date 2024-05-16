"use client";
import React, { useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { api } from "@/trpc/react";
import { useAuth } from "@clerk/nextjs";
import { useCartStore } from "@/zustand/provider/cartStoreProvider";

type Props = {
  productId: string;
  quantity: number;
  className?: string;
  productTitle: string;
  price: number;
};

export default function AddButton(props: Props) {
  const { productId, quantity, className, price, productTitle } = props;

  const products_store = useCartStore((store) => store.products);
  const setProducts_store = useCartStore((store) => store.setProducts);

  const { toast } = useToast();
  const user = useAuth();

  const { mutate, isPending, data } = api.cart.createNewCartItem.useMutation();

  function giveFeedback() {
    if (data === undefined) return;

    if (data) {
      if (data.action === "alreadyInCart") {
        return toast({
          title: "Already in cart",
          description: "Product already exist in the cart",
        });
      }

      if (data.action === "updated") {
        toast({
          title: "Updated cart",
          description: "Product updated successfully",
        });
      }

      if (data.action === "created") {
        if (data.createdCartProduct) {
          setProducts_store([...products_store, data.createdCartProduct]);
        }
        toast({
          title: "Added to cart",
          description: "Product successfully added to cart",
        });
      }
    }
  }

  const handleClick = () => {
    if (!user.userId || user.userId === undefined || user.userId === null) {
      return toast({
        variant: "destructive",
        title: "Please login first",
        description: "Oh no, you are not logged in...!",
      });
    }

    mutate({
      productId,
      authId: user.userId,
      productTitle,
      price,
      quantity,
    });
  };

  useEffect(() => {
    giveFeedback();
  }, [data]);

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
