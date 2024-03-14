import React from "react";
import { Text, Heading } from "..";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
    <div {...props} className={cn("flex flex-col items-center justify-start w-full gap-[15px]", props.className)}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="h-[400px] w-full relative">
          <Image
            height={500}
            width={500}
            src={image}
            alt="image_one"
            className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <Button size="lg" className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute">
            {category}
          </Button>
          <div className="flex flex-col items-center justify-start w-[14%] gap-[106px] right-[5%] top-[4%] m-auto absolute">
            {!!props.status ? (
              <Text
                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
              >
                {props.status}
              </Text>
            ) : null}

            <div className="flex flex-col items-center justify-start w-[96%] gap-5">

              <Button color="black_900" className="w-10 shadow-xs h-10 text-red-700 rounded-full bg-slate-500/40 p-2 hover:bg-rose-600/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </Button>




              {cartIcon ? (
                <Button color="yellow_100" className="w-10 shadow-xs h-10 rounded-full bg-slate-300/40 p-2 hover:bg-green-600/80">
                  <Image height={100} width={100} alt="icon" src={`/${cartIcon}`} />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <Heading className="tracking-[-0.50px]">
          {productTitle}
        </Heading>
        <Text size="lg" className="!text-blue_gray-900_01 tracking-[-0.50px]">
          {price === undefined ? "TBA" : price}
        </Text>
      </div>
    </div>
  );
}
