"use client";
import React from "react";
import { Img, Button, Text, Heading } from "../../components";
import CartSection from "../../components/CartSection";
import DetailReviewSectionfooter from "../../components/DetailReviewSectionfooter";
import HomepageCardblog from "../../components/HomepageCardblog";
import NavBar from "@/components/NavBar";

export default function BlogPage() {
  return (
    <div className=" mt-[5rem] bg-gray-50">
      <NavBar />
      <div className="flex w-full flex-col items-center justify-start gap-[125px]">
        <div className="flex w-full flex-col items-center justify-start">
          <div className="flex w-full flex-col items-center justify-start">
            <div className="flex w-full max-w-[1291px] flex-col items-center justify-start gap-[54px]">
              <div className="flex w-full flex-col items-center justify-start gap-[50px]">
                <div className="flex w-full flex-col items-center justify-start gap-2 pt-1">
                  <Heading
                    size="3xl"
                    className="text-center tracking-[-0.50px]"
                  >
                    Read Our Latest Blog
                  </Heading>
                  <Text
                    size="lg"
                    className="text-center leading-[35px] tracking-[-0.50px] !text-gray-500"
                  >
                    We write various things related to furniture, from tips and
                    what things <br />I need to pay attention to when choosing
                    furniture
                  </Text>
                </div>
                <div className="grid min-h-[auto] w-full grid-cols-3 justify-center gap-5">
                  <HomepageCardblog className="flex w-full flex-col items-center justify-start gap-6" />
                  <HomepageCardblog
                    image="images/img_rectangle_18_400x416.png"
                    className="flex w-full flex-col items-center justify-start gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_1.png"
                    className="flex w-full flex-col items-center justify-start gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_400x417.png"
                    className="flex w-full flex-col items-center justify-start gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_2.png"
                    className="flex w-full flex-col items-center justify-start gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_3.png"
                    className="flex w-full flex-col items-center justify-start gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_4.png"
                    className="flex w-full flex-col items-center justify-start gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_5.png"
                    className="flex w-full flex-col items-center justify-start gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_6.png"
                    className="flex w-full flex-col items-center justify-start gap-6"
                  />
                </div>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-2.5 pl-[535px] pr-14">
                <Img
                  src="images/img_arrow_left.svg"
                  alt="arrowleft_one"
                  className="h-[15px] w-[15px]"
                />
                <div className="flex w-[18%] flex-row gap-2.5">
                  <div className="flex h-[35px] w-full flex-col items-center justify-start">
                    <Button
                      size="lg"
                      className="min-w-[35px] rounded-[17px] font-semibold tracking-[-0.50px]"
                    >
                      1
                    </Button>
                  </div>
                  <div className="flex h-[35px] w-full flex-col items-center justify-start">
                    <Button
                      color="gray_100"
                      size="lg"
                      className="min-w-[35px] rounded-[17px] font-semibold tracking-[-0.50px]"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex h-[35px] w-full flex-col items-center justify-start">
                    <Button
                      color="gray_100"
                      size="lg"
                      className="min-w-[35px] rounded-[17px] font-semibold tracking-[-0.50px]"
                    >
                      3
                    </Button>
                  </div>
                </div>
                <Button
                  color="gray_100"
                  size="md"
                  className="w-[35px] rounded-[17px]"
                >
                  <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                </Button>
                <Img
                  src="images/img_akar_icons_chevron_left.svg"
                  alt="akaricons_one"
                  className="h-[15px] w-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex w-full flex-col items-center justify-center">
          <CartSection className="mx-auto flex w-full max-w-[1291px] flex-row justify-start gap-11 bg-gradient py-[46px] pl-[46px]" />
          <DetailReviewSectionfooter className="bg-black-900 ml-[-1366px] mt-[527px] flex w-full flex-row justify-end p-12" />
        </footer>
      </div>
    </div>
  );
}
