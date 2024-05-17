import React from "react";
import CartCheckout from "./_components/cartCheckout";
import SelectAllAndReset from "./_components/selectAllAndReset";
import { Heading } from "../_components/heading";
import { Text } from "../_components/text";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RenderCart from "./_components/renderCart";
import { api } from "@/trpc/server";
import { redirect } from "next/navigation";

export default async function CartPage() {
  const user = auth();

  if (!user.userId) return redirect("/authcallback");

  const allCartProducts = await api.cart.getAllCartItems({
    authId: user.userId,
  });

  if (!allCartProducts) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6">
        <Heading className="mt-[5rem] pt-8 text-center">Loading...</Heading>
      </div>
    );
  }

  if (allCartProducts === null || allCartProducts.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 bg-stone-200">
        <Heading className="mt-[5rem] pt-8 text-center">
          Cart is empty...!
        </Heading>
        <Link href={"/shop"}>
          <Button>Add a new Product</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-200">
      <Heading className="mt-[5rem] pt-8 text-center">My Cart</Heading>

      <Text size="md" className="pb-8 pt-5 text-center text-rose-500 underline">
        * Select products to Checkout
      </Text>

      <SelectAllAndReset />

      <div className="mx-auto flex max-w-7xl items-start justify-between gap-2 pb-10">
        <RenderCart products={allCartProducts} />

        <div className="flex max-w-sm flex-1 flex-col items-start justify-end gap-7">
          <CartCheckout />
        </div>
      </div>
    </div>
  );
}
