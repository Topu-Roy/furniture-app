import React from "react";
import { Heading, Text } from "../../components";
import CartCheckout from "./components/cartCheckout";
import SelectAllAndReset from "./components/selectAllAndReset";
import RenderCart from "./components/renderCart";

export default function CartPage() {
  return (
    <div className="bg-stone-200">
      <Heading size="3xl" className="mt-[5rem] text-center">
        My Cart
      </Heading>

      <Text size="md" className="pb-8 pt-5 text-center text-rose-500 underline">
        * Select products to Checkout
      </Text>

      <SelectAllAndReset />

      <div className="mx-auto flex max-w-7xl items-start justify-between gap-2 pb-10">
        <RenderCart />

        <div className="flex max-w-sm flex-1 flex-col items-start justify-end gap-7 bg-gray-50_01 p-[27px]">
          <CartCheckout />
        </div>
      </div>
    </div>
  );
}
