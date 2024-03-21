import { Heading, Text } from "@/components";
import HomepageCardblog from "@/components/HomepageCardblog";
import React from "react";

export default function ReadBlogSection() {
  return (
    <div className="w-full pb-20 pt-10">
      <div className="mx-auto flex flex-row justify-center">
        <div className="flex w-full max-w-[1290px] flex-col items-center justify-start gap-[50px]">
          <div className="flex w-full flex-col items-center justify-start gap-4 p-1">
            <Heading
              size="3xl"
              className="text-center !font-semibold tracking-[-0.50px]"
            >
              Read Our Latest Blog
            </Heading>
            <Text
              size="md"
              className="text-center tracking-[-0.50px] !text-gray-500"
            >
              We write various things related to furniture, from tips and what
              things I need to pay attention to when choosing furniture
            </Text>
          </div>
          <div className="flex w-full flex-row gap-5">
            <HomepageCardblog className="flex w-full flex-col items-center justify-start gap-6" />
            <HomepageCardblog
              image="images/img_rectangle_18_400x416.png"
              className="flex w-full flex-col items-center justify-start gap-6"
            />
            <HomepageCardblog
              image="images/img_rectangle_18_1.png"
              className="flex w-full flex-col items-center justify-start gap-6 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
