import React from "react";
import { Text, Heading } from "..";
import Image from "next/image";
import { Button } from "../ui/button";

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
  image = "images/defaultNoData.png",
  category = "Bed",
  status,
  productTitle = "Teak wood chair",
  price = 24,
  ...props
}: ProductType) {

  const heartIcon = "images/img_bx_heart_1.svg"
  const cartIcon = "images/img_bx_cart_2.svg"

  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="h-[400px] w-full relative">
          <Image
            height={500}
            width={500}
            src={`/${image}`}
            alt="image_one"
            className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <Button size="lg" className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute">
            {category}
          </Button>
          <div className="flex flex-col items-center justify-start w-[14%] gap-[106px] right-[5%] top-[4%] m-auto absolute">
            {!!status ? (
              <Text
                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
              >
                {status}
              </Text>
            ) : null}

            <div className="flex flex-col items-center justify-start w-[96%] gap-5">
              {heartIcon ? (
                <Button color="black_900" className="w-10 shadow-xs h-10 rounded-full bg-slate-500/40 p-2 hover:bg-rose-600/50">
                  <Image height={100} width={100} alt="icon" src={`/${heartIcon}`} />
                </Button>
              ) : null}
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
