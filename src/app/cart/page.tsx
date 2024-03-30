"use client";
import React, { useEffect, useState } from "react";
import { Heading, Text, Input, Img } from "../../components";
import { CartProductType, useCartStore } from "@/zustand/cart/cartStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Checkbox } from "@/components/ui/checkbox";

export default function CartPage() {
  const {
    products,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    changeSelected,
  } = useCartStore();
  const [productsToRender, setProductsToRender] = useState<CartProductType[]>(
    [],
  );
  const [checkoutPrice, setCheckoutPrice] = useState<number | null>(null);

  useEffect(() => {
    setProductsToRender(products);
    console.log(products);
  }, [products]);

  useEffect(() => {
    let totalPriceForSelectedProducts = 0;

    const selectedProductsArr = products.filter(
      (item) => item.isSelected == true,
    );

    selectedProductsArr.forEach((item) => {
      totalPriceForSelectedProducts =
        totalPriceForSelectedProducts + item.price;
    });

    setCheckoutPrice(totalPriceForSelectedProducts);

    console.log(products);
  }, [products]);

  useEffect(() => {
    products.forEach((item) => {
      changeSelected(item.id, false);
    });
  }, []);

  function handleRemove(id: number) {
    removeFromCart(id);
  }
  function handleIncrease(id: number) {
    increaseQuantity(id);
  }
  function handleDecrease(id: number) {
    decreaseQuantity(id);
  }
  function handleSelect(id: number) {
    const selectedProduct = products.find((item) => item.id === id);
    changeSelected(id, selectedProduct?.isSelected == false ? true : false);
  }

  return (
    <>
      <Heading size="3xl" className="mt-[5rem] py-8 text-center">
        My Cart
      </Heading>
      <div className="mx-auto flex max-w-7xl items-start justify-between gap-2">
        <div className="w-full space-y-2">
          {productsToRender.map((item) => (
            <div
              key={item.id}
              className="grid w-full grid-cols-8 gap-2 bg-zinc-100"
            >
              <div className="col-span-1 ">
                <Checkbox
                  onClick={() => handleSelect(item.id)}
                  checked={item.isSelected}
                  id={item.id.toString()}
                />
                <label
                  htmlFor={item.id.toString()}
                  onClick={() => handleSelect(item.id)}
                >
                  {item.isSelected ? "Selected" : "Select"}
                </label>
              </div>
              <div className="col-span-2 max-w-[10rem] overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  height={1024}
                  width={1024}
                  alt={item.productTitle}
                />
              </div>
              <div className="col-span-3 space-y-2">
                <Text size="lg" className="font-semibold">
                  {item.productTitle}
                </Text>
                <Text size="md" className="">
                  Color: {item.color}
                </Text>
                <Text size="md" className="">
                  Category: <span className="">{item.category}</span>
                </Text>
                <Text size="md" className="">
                  Price:{" "}
                  <span className="text-lg font-semibold">$ {item.price}</span>
                </Text>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center gap-2">
                  <Text>Quantity</Text>
                  <div className="flex h-14 items-center justify-center gap-5 rounded-md border border-black p-2">
                    <Button
                      onClick={() => handleDecrease(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full p-2"
                      variant={"outline"}
                    >
                      <TiMinus size={20} className="text-black" />
                    </Button>
                    <span className="">{item.quantity}</span>
                    <Button
                      onClick={() => handleIncrease(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full p-2"
                      variant={"outline"}
                    >
                      <TiPlus size={20} className="text-black" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Text>Total price:</Text>
                  <Text>{item.price}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-[33%] flex-col items-start justify-end gap-7 bg-gray-50_01 p-[27px]">
          <Heading className="mt-[9px] !font-bold tracking-[-0.50px]">
            Total for selected items
          </Heading>
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <div className="flex w-full flex-row items-center justify-between py-0.5">
              <Text
                size="lg"
                className="!font-raleway tracking-[-0.50px] !text-gray-500"
              >
                Subtotal
              </Text>
              <Heading className="!font-poppins tracking-[-0.50px]">
                $ 99.00
              </Heading>
            </div>
            <div className="flex w-full flex-row items-center justify-center">
              <Input
                size="sm"
                name="your_voucher"
                placeholder="Your Voucher"
                className="!text-black-900_3f w-[73%]"
              />
              <Button className="min-w-[98px] font-semibold tracking-[-0.50px] !text-yellow-100">
                Apply
              </Button>
            </div>
          </div>
          <div className="bg-black-900 h-px w-full" />
          <div className="flex w-full flex-row items-center justify-between py-0.5">
            <Text
              size="lg"
              className="!font-raleway tracking-[-0.50px] !text-gray-500"
            >
              Total
            </Text>
            <Heading className="!font-poppins tracking-[-0.50px]">
              $ {checkoutPrice}
            </Heading>
          </div>
          <Button className="mb-1 w-full font-semibold tracking-[-0.50px] !text-yellow-100">
            Checkout Now
          </Button>
        </div>
      </div>
    </>
  );
}
