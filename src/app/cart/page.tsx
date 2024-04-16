import React from "react";
import CartCheckout from "./_components/cartCheckout";
import SelectAllAndReset from "./_components/selectAllAndReset";
import RenderCart from "./_components/renderCart";
import { Heading } from "../_components/heading";
import { Text } from "../_components/text";

export default function CartPage() {
  return (
    <div className="bg-stone-200">
      <Heading className="mt-[5rem] pt-8 text-center">My Cart</Heading>

      <Text size="md" className="pb-8 pt-5 text-center text-rose-500 underline">
        * Select products to Checkout
      </Text>

      <SelectAllAndReset />

      <div className="mx-auto flex max-w-7xl items-start justify-between gap-2 pb-10">
        <RenderCart />

        <div className="bg-gray-50_01 flex max-w-sm flex-1 flex-col items-start justify-end gap-7 p-[27px]">
          <CartCheckout />
        </div>
      </div>
    </div>
  );
}
