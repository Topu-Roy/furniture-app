"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { cn } from "@/lib/utils";
import AddButton from "./addButton";
import { CartProductType } from "@/zustand/cart/cartStore";
import Link from "next/link";

type Props = {
  product: CartProductType;
};

export default function MobilePopover({ product }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "flex aspect-square items-center justify-center rounded-full bg-secondary p-0.5",
            {
              "bg-primary": open,
            },
          )}
        >
          <PiDotsThreeOutlineFill
            size={22}
            className={cn("text-primary hover:text-secondary", {
              "text-secondary": open,
            })}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[15rem] -translate-x-10">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="w-full">
            <Link href={`/shop/${product.id}`}>
              <Button size={"lg"} variant={"outline"} className="w-full">
                View product
              </Button>
            </Link>
          </div>
          <div className="w-full">
            <Link href={`#`}>
              <Button size={"lg"} variant={"outline"} className="w-full">
                Add favorite
              </Button>
            </Link>
          </div>
          <AddButton
            className="w-full"
            product={{
              ...product,
              price: product.price,
              quantity: 1,
              isSelected: false,
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
