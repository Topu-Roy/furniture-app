import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { FaRegHeart } from "react-icons/fa";
import { LucideShoppingCart } from "lucide-react";
import { ProductType } from "@/zustand/shop/shopStore";
import AddButton from "./addButton";
import ButtonWithIcon from "./buttonWithIcon";
import { Text } from "../text";
import MobilePopover from "./mobilePopover";

export default function Product(props: ProductType) {
  return (
    <div
      key={props.id}
      className={cn(
        "group flex w-full flex-col items-center justify-start gap-2",
        props.className,
      )}
    >
      <div className="flex w-full flex-col items-center justify-start">
        <div className="relative w-full overflow-hidden">
          <Link href={`/shop/${props.id}`}>
            <div className="z-10 aspect-square overflow-hidden rounded-md">
              <Image
                height={1024}
                width={1024}
                src={props.image || "/images/defaultNoData.png"}
                alt={props.productTitle}
                className="aspect-square h-full w-full justify-center transition-all duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Mobile Popover button */}
          <div className="absolute bottom-[2%] right-[2%] md:hidden">
            <MobilePopover
              product={{
                ...props,
                price: props.price as number,
                quantity: 1,
                isSelected: false,
              }}
            />
          </div>

          {/* Overlay - Decoration Only */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-[19] hidden h-[40%] w-full translate-y-[150%] select-none bg-gradient-to-t from-white/50 to-transparent ring-0 transition-all duration-300 group-hover:translate-y-0 md:block" />

          <div className="absolute bottom-[3%] left-0 z-20 hidden w-full translate-y-[150%] flex-row items-center justify-around gap-2 ring-0 transition-all duration-300 group-hover:translate-y-0 md:flex">
            {props.price ? (
              <AddButton
                product={{
                  ...props,
                  price: props.price,
                  quantity: 1,
                  isSelected: false,
                }}
              />
            ) : (
              <Button
                disabled={true}
                size="lg"
                className="rounded-md font-bold"
              >
                Not Available
              </Button>
            )}
            <div className="flex flex-row items-center justify-between gap-3">
              {props.price ? (
                <ButtonWithIcon
                  product={{
                    ...props,
                    price: props.price,
                    quantity: 1,
                    isSelected: false,
                  }}
                  role="cart"
                >
                  <LucideShoppingCart size={25} />
                </ButtonWithIcon>
              ) : null}
              {props.price ? (
                <ButtonWithIcon
                  product={{
                    ...props,
                    price: props.price,
                    quantity: 1,
                    isSelected: false,
                  }}
                  role="favorite"
                >
                  <FaRegHeart size={25} />
                </ButtonWithIcon>
              ) : null}
            </div>
          </div>

          <div className="absolute right-[2%] top-[2%] z-30 w-full max-w-min rounded-lg rounded-tr-full">
            {props.status ? (
              <Text
                className={cn("px-2", {
                  "bg-red-500/50": props.status === "new",
                  "bg-green-500/50": props.status === "popular",
                  "bg-gray-500/50": props.status === "out of stock",
                })}
              >
                {props.status}
              </Text>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-between gap-2 py-2">
        <Text size="md" className=" line-clamp-1 truncate font-medium">
          {props.productTitle.length > 25
            ? props.productTitle.slice(0, 25) + "..."
            : props.productTitle}
        </Text>
        <Text size="lg" className="font-extrabold text-gray-700">
          ${props.price === 0 ? "TBA" : props.price}
        </Text>
      </div>
    </div>
  );
}
