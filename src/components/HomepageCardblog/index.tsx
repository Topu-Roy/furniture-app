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
      <div className="flex flex-col items-start justify-start w-full gap-[18px]">
        <Heading size="lg" as="h1" className="tracking-[-0.50px]">
          {whyshouldyou}
        </Heading>
        <div className="flex flex-row justify-start w-full">
          <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[257px]">
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Img src="images/img_bx_edit_alt_1.svg" alt="by_admin_one" className="h-[18px] w-[18px] mb-px" />
              <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                {byadmin}
              </Text>
            </div>
            <div className="h-[15px] w-px bg-gray-500" />
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Img src="images/img_bx_calendar_1.svg" alt="december_102022" className="h-[18px] w-[18px]" />
              <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                {decemberten}
              </Text>
            </div>
          </div>
        </div>
        <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
          {description}
        </Text>
        <Button
          color="black_900"
          size="4xl"
          variant="outline"
          className="tracking-[-0.50px] font-semibold min-w-[139px]"
        >
          {readMore}
        </Button>
      </div>
    </div>
  );
}
