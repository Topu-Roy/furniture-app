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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  function handleSelectAll() {
    useCartStore.setState({
      products: products.map((item) => ({
        ...item,
        isSelected: true,
      })),
    });
  }
  function handleReset() {
    useCartStore.setState({
      products: products.map((item) => ({
        ...item,
        isSelected: false,
      })),
    });
  }

  function handleCheck(id: number) {
    useCartStore.setState({
      products: products.map((item) =>
        item.id !== id ? item : { ...item, isSelected: !item.isSelected },
      ),
    });
  }

  return (
    <div className="bg-stone-200">
      <Heading size="3xl" className="mt-[5rem] text-center">
        My Cart
      </Heading>

      <Text size="md" className="pb-8 pt-5 text-center text-rose-500 underline">
        * Select products to Checkout
      </Text>

      <div className="mx-auto flex max-w-7xl items-start justify-start gap-2 pb-4">
        <Button onClick={() => handleSelectAll()} className="hover:scale-105">
          Select All
        </Button>
        <Button onClick={() => handleReset()} className="hover:scale-105">
          Reset
        </Button>
      </div>

      <div className="mx-auto flex max-w-7xl items-start justify-between gap-2 pb-10">
        <div className="w-full space-y-2">
          {productsToRender.map((item) => (
            <div
              key={item.id}
              className={cn(
                "grid w-full grid-cols-8 gap-2 rounded-lg bg-zinc-100 p-2 shadow-md",
                {
                  "ring-2 ring-neutral-500/50": item.isSelected,
                },
              )}
            >
              <div className="relative col-span-1 flex flex-col items-center justify-center">
                <label className="flex flex-1 items-center justify-center">
                  <input
                    className="peer h-[2.5rem] w-[2.5rem] opacity-0"
                    type="checkbox"
                    checked={item.isSelected || false}
                    onChange={() => handleCheck(item.id)}
                  />
                  <Button
                    variant="ghost"
                    className={cn(
                      "pointer-events-none absolute h-[3.5rem] w-[3.5rem] bg-neutral-200 p-0 text-neutral-700 shadow-sm peer-hover:scale-105 peer-hover:bg-neutral-300 peer-hover:text-neutral-900",
                      {
                        "bg-green-200 peer-hover:bg-green-300/80":
                          item.isSelected,
                      },
                    )}
                    size={"lg"}
                  >
                    {item.isSelected ? (
                      <IoCheckmarkDoneCircleSharp size={30} className="" />
                    ) : (
                      <IoCheckmarkDoneCircleOutline size={30} className="" />
                    )}
                  </Button>
                </label>

                <div className="h-0.5 w-[100%] rounded-full bg-black/10" />

                <div className="flex flex-1 items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex h-[3.5rem] w-[3.5rem] items-center justify-center p-0 text-rose-500 shadow-sm hover:scale-105 hover:bg-rose-300 hover:text-rose-800"
                        size={"lg"}
                      >
                        <RiDeleteBin6Line size={30} />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                          Delete{" "}
                          <span className="font-semibold">
                            {item.productTitle}
                          </span>{" "}
                          from my cart.
                        </DialogDescription>
                      </DialogHeader>

                      <DialogFooter>
                        <Button
                          type="submit"
                          variant="ghost"
                          onClick={() => handleRemove(item.id)}
                          className="flex-1 rounded-full bg-rose-300 p-0 shadow-sm hover:bg-rose-400"
                          size={"lg"}
                        >
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
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
                  Price: <span className="text-base">${item.price}</span>
                </Text>
              </div>
              <div className="col-span-2 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Text>Quantity:</Text>
                  <div className="flex h-14 items-center justify-center gap-5 rounded-md border border-black/40 p-2">
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
                <div className="flex items-center justify-between gap-2">
                  <Text>Total price:</Text>
                  <Text size="lg" className="font-semibold">
                    ${item.price * item.quantity}
                  </Text>
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
    </div>
  );
}
