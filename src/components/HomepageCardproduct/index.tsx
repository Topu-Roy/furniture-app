import React from "react";
import { Text, Heading } from "./..";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {
  className?: string;
  imageOne?: string;
  category?: string;
  status?: string;
  productTitle?: string;
  price?: string;
}

const heartIcon = "images/img_bx_heart_1.svg"
const cartIcon = "images/img_bx_cart_2.svg"

export default function HomepageCardproduct({
  imageOne = "images/defaultNoData.png",
  category = "Living Room",
  status,
  productTitle = "Teak wood chair",
  price = "$24",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="h-[400px] w-full relative">
          <Image
            height={500}
            width={500}
            src={`/${imageOne}`}
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
                <Button color="black_900" className="w-10 shadow-xs h-10 rounded-full bg-slate-300/40 p-2">
                  <Image height={100} width={100} alt="icon" src={`/${heartIcon}`} />
                </Button>
              ) : null}
              {cartIcon ? (
                <Button color="yellow_100" className="w-10 shadow-xs h-10 rounded-full bg-slate-300/40 p-2">
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
          {price}
        </Text>
      </div>
    </div>
  );
}
