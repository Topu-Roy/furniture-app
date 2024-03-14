import React from "react";
import { Text } from "..";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { FaRegHeart } from "react-icons/fa";
import { LucideShoppingCart } from "lucide-react";

type Color = "black" | "white" | "green" | "brown";
type Category = "All" | "Chair" | "Table" | "Lamp" | "Drawer" | "Bed" | "Bookshelf" | "Sofa"
type Tag = "All" | "Minimalistic" | "Modern" | "Stylish" | "Elegant" | "Ambient" | "Luxurious"

type TagsWithoutAll = Omit<Tag, '"All"'>
type CategoryWithoutAll = Omit<Category, "All">

export type ProductType = {
  className?: string;
  productTitle: string;
  image: string;
  price: number | undefined;
  status?: "new" | "popular" | "out of stock";
  category: CategoryWithoutAll;
  tag: TagsWithoutAll;
  color: Color
}

export default function Product({
  image = "/images/defaultNoData.png",
  category = "Bed",
  productTitle = "product not found",
  price = 0,
  ...props
}: ProductType) {

  const heartIcon = "images/img_bx_heart_1.svg"
  const cartIcon = "images/img_bx_cart_2.svg"

  return (
    <div {...props} className={cn("flex flex-col items-center justify-start w-full gap-2 group", props.className)}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="w-full relative overflow-hidden">
          <div className="h-[400px] overflow-hidden z-10 rounded-md ">
            <Image
              height={500}
              width={500}
              src={image}
              alt={productTitle}
              className="justify-center h-full w-full group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>

          {/* //* Decoration */}
          <div className="z-[19] absolute bottom-0 left-0 ring-0 h-[40%] w-full bg-gradient-to-t from-white/50 to-transparent transition-all translate-y-[150%] group-hover:translate-y-0 duration-300" />

          <div className="z-20 absolute bottom-[3%] left-0 ring-0 w-full flex flex-row items-center justify-around gap-2 transition-all translate-y-[150%] group-hover:translate-y-0 duration-300">
            <Button size="lg" className="rounded-md font-bold">
              Buy now
            </Button>
            <div className="flex flex-row justify-between items-center gap-3">
              <Button className="flex justify-center items-center p-2 rounded-full bg-gray-400/50 hover:bg-gray-400/90">
                <LucideShoppingCart size={25} className="text-stone-800 " />
              </Button>
              <Button className="flex justify-center items-center p-2 rounded-full bg-gray-400/50 hover:bg-gray-400/90">
                <FaRegHeart size={25} className="text-stone-800 " />
              </Button>
            </div>
          </div>

          <div className="z-30 absolute top-0 right-0 max-w-min rounded-lg w-full">
            {props.status ? (
              <Text className={cn("px-2",
                {
                  "bg-red-500/50": props.status === 'new',
                  "bg-green-500/50": props.status === 'popular',
                  "bg-gray-500/50": props.status === 'out of stock',
                }
              )}>
                {props.status}
              </Text>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-full gap-2">
        <Text size="md" className=" font-medium line-clamp-1 truncate">
          {productTitle.length > 25 ? productTitle.slice(0, 25) + "..." : productTitle}
        </Text>
        <Text size="lg" className="font-extrabold text-gray-700">
          ${price === 0 ? "TBA" : price}
        </Text>
      </div>
    </div>
  );
}
