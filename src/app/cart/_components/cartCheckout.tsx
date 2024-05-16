"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/zustand/cart/cartStore";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";
import { type CartProduct } from "@prisma/client";

export default function CartCheckout() {
  const [productsToRender, setProductsToRender] = useState<CartProduct[]>([]);
  const [checkoutPrice, setCheckoutPrice] = useState<number>(0);

  const products_store = useCartStore((store) => store.products);

  useEffect(() => {
    let checkOut = 0;
    const selectedProducts = products_store.filter(
      (product) => product.isSelected === true,
    );
    selectedProducts.forEach((item) => {
      const priceWithQuantity = item.price * item.quantity;
      checkOut += priceWithQuantity;
    });

    setProductsToRender(selectedProducts);
    setCheckoutPrice(checkOut);
  }, [products_store]);

  return (
    <>
      <Heading className="mt-[9px] !font-bold">
        Total for selected items
      </Heading>
      <div className="w-full space-y-2">
        {productsToRender.length > 0 ? (
          productsToRender.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4"
            >
              <p className="truncate">{item.productTitle}</p>
              <p className="">${item.price * item.quantity}</p>
            </div>
          ))
        ) : (
          <p className="text-rose-400">* No products selected</p>
        )}
      </div>

      <div className="h-px w-full bg-black/50" />

      <div className="flex w-full flex-col items-center justify-start gap-5">
        <div className="flex w-full flex-row items-center justify-center">
          <Input placeholder="Your Voucher" className="mr-2 w-[73%]" />
          <Button className="min-w-[98px] font-semibold">Apply</Button>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-between py-0.5">
        <Text size="lg" className="!text-gray-500">
          Total
        </Text>
        <Heading>$ {checkoutPrice}</Heading>
      </div>
      <Button className="w-full font-semibold">Checkout Now</Button>
    </>
  );
}
