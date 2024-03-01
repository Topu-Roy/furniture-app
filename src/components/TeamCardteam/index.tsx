import React from "react";
import { Text, Heading, Button, Img } from "./..";

interface Props {
  className?: string;
  image?: string;
  bxllinkedinone?: string;
  bxlfacebookone?: string;
  bxltwitterone?: string;
  makejhane?: string;
  financemanager?: string;
}

export default function TeamCardteam({
  image = "images/img_rectangle_1487.png",
  bxllinkedinone,
  bxlfacebookone,
  bxltwitterone,
  makejhane = "Make Jhane",
  financemanager = "Finance Manager",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="h-[450px] w-full relative">
          <Img
            src={image}
            alt="image"
            className="justify-center h-[450px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex flex-row justify-between w-[49%] bottom-[5%] right-0 left-0 m-auto absolute">
            {!!bxllinkedinone ? (
              <Button color="yellow_100" size="7xl" shape="circle" className="w-[50px]">
                <Img src="images/img_bxl_linkedin_1.svg" />
              </Button>
            ) : null}
            {!!bxlfacebookone ? (
              <Button color="gray_50_01" size="7xl" shape="circle" className="w-[50px]">
                <Img src="images/img_bxl_facebook.svg" />
              </Button>
            ) : null}
            {!!bxltwitterone ? (
              <Button color="gray_50_01" size="7xl" shape="circle" className="w-[50px]">
                <Img src="images/img_bxl_twitter.svg" />
              </Button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-2.5">
        <Heading size="xl" as="h1" className="tracking-[-0.50px] text-center">
          {makejhane}
        </Heading>
        <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
          {financemanager}
        </Text>
      </div>
    </div>
  );
}
