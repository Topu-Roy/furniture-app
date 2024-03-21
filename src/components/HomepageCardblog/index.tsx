import React from "react";
import { Button, Text, Img, Heading } from "./..";

interface Props {
  className?: string;
  image?: string;
  whyshouldyou?: string;
  byadmin?: string;
  decemberten?: string;
  description?: string;
  readMore?: string;
}

export default function HomepageCardblog({
  image = "images/img_rectangle_18.png",
  whyshouldyou = "Why should you choose good wood",
  byadmin = "By Admin",
  decemberten = "December 10, 2022",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever.",
  readMore = "Read More",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img src={image} alt="image" className="w-full object-cover" />
      <div className="flex w-full flex-col items-start justify-start gap-[18px]">
        <Heading size="lg" className="tracking-[-0.50px]">
          {whyshouldyou}
        </Heading>
        <div className="flex w-full flex-row justify-start">
          <div className="mx-auto flex w-full max-w-[257px] flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <Img
                src="images/img_bx_edit_alt_1.svg"
                alt="by_admin_one"
                className="mb-px h-[18px] w-[18px]"
              />
              <Text className="!text-black-900 tracking-[-0.50px]">
                {byadmin}
              </Text>
            </div>
            <div className="h-[15px] w-px bg-gray-500" />
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <Img
                src="images/img_bx_calendar_1.svg"
                alt="december_102022"
                className="h-[18px] w-[18px]"
              />
              <Text className="!text-black-900 tracking-[-0.50px]">
                {decemberten}
              </Text>
            </div>
          </div>
        </div>
        <Text className="leading-[35px] tracking-[-0.50px] !text-gray-500">
          {description}
        </Text>
        <Button
          color="black_900"
          size="4xl"
          variant="outline"
          className="min-w-[139px] font-semibold tracking-[-0.50px]"
        >
          {readMore}
        </Button>
      </div>
    </div>
  );
}
