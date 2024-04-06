"use client";
import React from "react";
import Chip from "./chip";
import { Text } from "@/components";
import UpdateQuantity from "./updateQuantity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  IoCheckmarkDoneCircleOutline,
  IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { CartProductType, useCartStore } from "@/zustand/cart/cartStore";
import { cn } from "@/lib/utils";

type Props = {
  products: CartProductType[];
};

export default function CartItem({ products }: Props) {
  const { removeFromCart } = useCartStore();
  function handleRemove(id: number) {
    removeFromCart(id);
  }
  function handleCheck(id: number) {
    useCartStore.setState({
      products: products.map((item) =>
        item.id !== id ? item : { ...item, isSelected: !item.isSelected },
      ),
    });
  }
  return (
    <div className="w-[55rem] space-y-2">
      {products.map((item) => (
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
                    "bg-green-200 peer-hover:bg-green-300/80": item.isSelected,
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
                      <span className="font-semibold">{item.productTitle}</span>{" "}
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

            <Text className="font-semibold text-black/75">
              Price: ${item.price}
            </Text>
          </div>
          <div className="col-span-2 space-y-4">
            <UpdateQuantity id={item.id} quantity={item.quantity} />

            <div className="flex items-center justify-between gap-2">
              <Text className="font-semibold text-black/75">Total price:</Text>
              <Text size="lg" className="font-semibold">
                ${item.price * item.quantity}
              </Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
