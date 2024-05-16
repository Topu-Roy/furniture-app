"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsCart2 } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { useAuth } from "@clerk/nextjs";
import { useCartStore } from "@/zustand/provider/cartStoreProvider";

export default function CartIconWithUser() {
  const [willShow, setWillShow] = useState(false);
  const user = useAuth();

  if (!user.userId) return null;

  const { data } = api.cart.getAllCartItems.useQuery({ authId: user.userId });

  const products_store = useCartStore((store) => store.products);
  const setProducts_store = useCartStore((store) => store.setProducts);

  if (data) {
    setProducts_store(data);
  }

  useEffect(() => {
    setWillShow(products_store.length > 0);

    if (data) {
      setProducts_store(data);
    }
  }, [products_store, data]);

  return (
    <Link href={"/cart"}>
      <Button variant={"ghost"} className="relative p-1">
        <BsCart2 size={20} />
        <div
          className={cn(
            "absolute -right-[5%] top-[20%] z-[51] hidden h-2 w-2 rounded-full bg-destructive",
            willShow ? "block" : "",
          )}
        />
      </Button>
    </Link>
  );
}
