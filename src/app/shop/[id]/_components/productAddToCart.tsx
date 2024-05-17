"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/trpc/react";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { useCartStore } from "@/zustand/cart/cartStore";
import Link from "next/link";

type Props = {
  authId: string | null;
  productId: string;
  productTitle: string;
  price: number;
};

export default function ProductAddToCart(props: Props) {
  const { authId, productId, price, productTitle } = props;
  const { toast } = useToast();

  const products_store = useCartStore((store) => store.products);
  const setProducts_store = useCartStore((store) => store.setProducts);

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
    }
  }

  useEffect(() => {
    giveFeedback();
  }, [data]);

  async function handleAddToCart() {
    //TODO: Add fallback url
    if (!authId) {
      redirect("/authcallback");
    }

    mutate({ authId, productId, productTitle, price, quantity: 1 });
  }

  return (
    <div className="fixed bottom-0 left-0 z-[99] h-[5rem] w-[100%] md:static md:z-10 md:block">
      <div className="flex w-full items-center justify-center gap-2 bg-slate-200 px-4 ring-0 md:justify-center md:px-0">
        <div className=" flex-1">
          <Link href={"/cart"}>
            <Button
              className="flex h-14 w-full items-center justify-center rounded-sm p-2"
              variant={"outline"}
            >
              <span>View cart</span>
            </Button>
          </Link>
        </div>

        <Button
          onClick={() => handleAddToCart()}
          className={cn(
            "h-14 flex-1 rounded-md",
            isPending ? "opacity-90" : "",
          )}
        >
          {isPending ? `Adding item` : `Add to cart`}
        </Button>
      </div>
    </div>
  );
}
