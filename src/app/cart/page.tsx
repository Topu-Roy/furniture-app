"use client";
import React, { useEffect, useState } from "react";
import { Heading, Text } from "../../components";
import { CartProductType, useCartStore } from "@/zustand/cart/cartStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TiMinus, TiPlus } from "react-icons/ti";
import Chip from "./chip";
import {
  IoCheckmarkDoneCircleOutline,
  IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cn } from "@/lib/utils";

export default function CartPage() {
  const { products, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore();
  const [productsToRender, setProductsToRender] = useState<CartProductType[]>(
    [],
  );
  const [checkoutPrice, setCheckoutPrice] = useState<number | null>(null);

  useEffect(() => {
    setProductsToRender(products);
  }, [products]);

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

  function handleRemove(id: number) {
    removeFromCart(id);
  }
  function handleIncrease(id: number) {
    increaseQuantity(id);
  }
  function handleDecrease(id: number) {
    decreaseQuantity(id);
  }

  function handleCheck(id: number) {
    useCartStore.setState({
      products: products.map((item) =>
        item.id !== id ? item : { ...item, isSelected: !item.isSelected },
      ),
    });
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
              className={cn(
                "grid w-full grid-cols-8 gap-2 rounded-lg bg-zinc-100 p-2",
                {
                  "ring-2 ring-neutral-500": item.isSelected,
                },
              )}
            >
              <div className="relative col-span-1 flex flex-col items-center justify-center">
                <label className="flex flex-1 items-center justify-center">
                  <input
                    className="h-[2.5rem] w-[2.5rem] opacity-0"
                    type="checkbox"
                    checked={item.isSelected || false}
                    onChange={() => handleCheck(item.id)}
                  />
                  <Button
                    variant="ghost"
                    className="pointer-events-none absolute rounded-full p-0 shadow-sm"
                    size={"lg"}
                  >
                    {item.isSelected ? (
                      <IoCheckmarkDoneCircleSharp size={30} />
                    ) : (
                      <IoCheckmarkDoneCircleOutline size={30} />
                    )}
                  </Button>
                </label>

                <div className="h-0.5 w-[80%] rounded-full bg-black/40" />
                <Button
                  variant="ghost"
                  onClick={() => handleRemove(item.id)}
                  className="flex-1 rounded-full p-0 shadow-sm"
                  size={"lg"}
                >
                  <RiDeleteBin6Line size={30} />
                </Button>
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

                <div className="flex items-center justify-start gap-4">
                  {item.color ? <Chip text={item.color} /> : null}
                  {item.category ? <Chip text={item.category} /> : null}
                  {item.status ? <Chip text={item.status} /> : null}
                  {item.tag ? <Chip text={item.tag} /> : null}
                </div>

                <Text size="md" className="">
                  Price:
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
                  <Text>{item.price * item.quantity}</Text>
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
              <input
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
