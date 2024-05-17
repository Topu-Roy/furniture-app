"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/trpc/react";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { useCartStore } from "@/zustand/cart/cartStore";

type Props = {
  authId: string | null;
  productId: string;
  productTitle: string;
  price: number;
};

export default function ProductAddToCart(props: Props) {
  const { authId, productId, price, productTitle } = props;
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const products_store = useCartStore((store) => store.products);
  const setProducts_store = useCartStore((store) => store.setProducts);

  const { mutate, isPending, data } = api.cart.createNewCartItem.useMutation({
    onSettled() {
      if (data === undefined || data === null) {
        return toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Couldn't add to the cart. Please try again",
        });
      }

      if (
        data.action === "alreadyInCart" ||
        data.alreadyExist?.quantity === quantity
      ) {
        return toast({
          title: "Already in cart",
          description: "Product already exist in the cart",
        });
      }

      if (data.action === "updated") {
        setProducts_store(
          products_store.map((product) =>
            product.id === productId
              ? { ...product, ...data.updatedCartProduct }
              : product,
          ),
        );

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
    },
  });

  async function handleAddToCart() {
    //TODO: Add fallback url
    if (!authId) {
      redirect("/authcallback");
    }

    mutate({ authId, productId, productTitle, price, quantity });
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
