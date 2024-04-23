"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartProductType, useCartStore } from "@/zustand/cart/cartStore";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";

export default function CartCheckout() {
  const [productsToRender, setProductsToRender] = useState<CartProductType[]>(
    [],
  );
  const { products } = useCartStore();
  useEffect(() => {
    setProductsToRender(products);
  }, [products]);
  const [isAnySelected, setIsAnySelected] = useState(false);
  const [checkoutPrice, setCheckoutPrice] = useState<number | null>(null);

  useEffect(() => {
    //* Check if at least one of the object of the array satisfies the condition
    const selectedProducts = productsToRender.some(
      (item) => item.isSelected === true,
    );

    if (selectedProducts) {
      setIsAnySelected(true);
    } else {
      setIsAnySelected(false);
    }
  }, [productsToRender]);
  useEffect(() => {
    let totalPriceForSelectedProducts = 0;

    const selectedProductsArr = products.filter(
      (item) => item.isSelected == true,
    );

    selectedProductsArr.forEach((item) => {
      const priceWithQuantity = item.price * item.quantity;
      totalPriceForSelectedProducts += priceWithQuantity;
    });

    setCheckoutPrice(totalPriceForSelectedProducts);
  }, [products]);
  return (
    <>
      <Heading className="mt-[9px] !font-bold">
        Total for selected items
      </Heading>
      <div className="w-full space-y-2">
        {isAnySelected ? (
          products.map((item) => {
            if (item.isSelected) {
              return (
                <div
                  key={`${item.id}-cart-checkout`}
                  className="flex items-center justify-between gap-4"
                >
                  <p className="truncate">{item.productTitle}</p>
                  <p className="">${item.price * item.quantity}</p>
                </div>
              );
            }
            return null;
          })
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
