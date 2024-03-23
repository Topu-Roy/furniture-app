"use client";
import React from "react";
import { Button, Heading, Text, Input, Img } from "../../components";
import { useCartStore } from "@/zustand/cart/cartStore";

export default function CartPage() {
  const { products } = useCartStore();
  console.log(products);
  return (
    <>
      <div className="">
        {products.map((item) => (
          <div className="">{item.productTitle}</div>
        ))}
      </div>
      {/* <div className="flex w-full flex-col items-center justify-start gap-[100px] bg-gray-50">
        <div className="flex w-full flex-col items-center justify-start">
          <header className="bg-white-A700 flex w-full flex-row items-center justify-between p-[35px]">
            <Img
              src="images/img_frame_146.svg"
              alt="image"
              className="ml-10 h-[30px]"
            />
            <div className="flex w-[37%] flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-2.5">
                <Text size="md" className="!text-black-900 tracking-[-0.50px]">
                  Home
                </Text>
                <Img
                  src="images/img_arrow_down.svg"
                  alt="arrowdown_one"
                  className="h-6 w-6"
                />
              </div>
              <Text size="md" className="!text-black-900 tracking-[-0.50px]">
                Shop
              </Text>
              <Text size="md" className="!text-black-900 tracking-[-0.50px]">
                Blog
              </Text>
              <Text size="md" className="!text-black-900 tracking-[-0.50px]">
                About
              </Text>
              <Text size="md" className="!text-black-900 tracking-[-0.50px]">
                Contact
              </Text>
              <Text size="md" className="!text-black-900 tracking-[-0.50px]">
                Team
              </Text>
            </div>
            <div className="mr-10 flex w-auto flex-row justify-between gap-[30px]">
              <Img
                src="images/img_search.svg"
                alt="search_one"
                className="h-6 w-6"
              />
              <Img
                src="images/img_list_black_900.svg"
                alt="list_one"
                className="h-6 w-6"
              />
              <Img
                src="images/img_list.svg"
                alt="list_three"
                className="h-6 w-6"
              />
            </div>
          </header>
          <div className="flex w-full flex-row justify-center px-14 pt-[75px]">
            <div className="flex w-full max-w-[1290px] flex-col items-center justify-start gap-[49px]">
              <Heading size="3xl" className="text-center tracking-[-0.50px]">
                Your Cart
              </Heading>
              <div className="flex w-full flex-row items-center justify-between">
                <div className="flex w-[64%] flex-col gap-[30px]">
                  <div className="flex w-full flex-row items-center justify-between">
                    <div className="flex w-[88%] flex-row items-center justify-between">
                      <div className="flex w-[62%] flex-row items-center justify-start gap-5">
                        <Img
                          src="images/img_rectangle_1480.png"
                          alt="image"
                          className="w-[120px] object-cover"
                        />
                        <div className="flex w-[68%] flex-col items-start justify-start gap-[15px]">
                          <Heading className="!font-bold !leading-[35px] tracking-[-0.50px]">
                            Complete set of sofa, pillows and bed sheets
                          </Heading>
                          <Heading className="!font-poppins !font-bold tracking-[-0.50px] !text-blue_gray-900_01">
                            $ 75.00
                          </Heading>
                        </div>
                      </div>
                      <div className="border-black-900 flex w-[17%] flex-row justify-center border border-solid p-1">
                        <div className="mx-2.5 flex w-4/5 flex-row items-center justify-between py-[5px]">
                          <Button size="xs" className="w-6">
                            <Img src="images/defaultNoData.png" />
                          </Button>
                          <Text
                            size="md"
                            className="!text-black-900 tracking-[-0.50px]"
                          >
                            1
                          </Text>
                          <Button size="xs" className="w-6">
                            <Img src="images/img_bx_plus_circle_1.svg" />
                          </Button>
                        </div>
                      </div>
                      <Heading size="md" className="tracking-[-0.50px]">
                        $ 75.00
                      </Heading>
                    </div>
                    <Button color="gray_50_01" size="7xl" className="w-[50px]">
                      <Img src="images/img_frame_48096032.svg" />
                    </Button>
                  </div>
                  <div className="flex w-full flex-row items-center justify-between">
                    <div className="flex w-[54%] flex-row items-center justify-start gap-5">
                      <Img
                        src="images/img_rectangle_1480.png"
                        alt="image"
                        className="w-[120px] object-cover"
                      />
                      <div className="flex w-[68%] flex-col items-start justify-start gap-[15px]">
                        <Heading className="!font-bold tracking-[-0.50px]">
                          Teak wood chair
                        </Heading>
                        <Heading className="!font-poppins !font-bold tracking-[-0.50px] !text-blue_gray-900_01">
                          $ 24.00
                        </Heading>
                      </div>
                    </div>
                    <div className="border-black-900 flex w-[15%] flex-row justify-center border border-solid p-1">
                      <div className="mx-2.5 flex w-4/5 flex-row items-center justify-between py-[5px]">
                        <Img
                          src="images/img_bx_minus_circle.svg"
                          alt="image_one"
                          className="h-6 w-6"
                        />
                        <Text
                          size="md"
                          className="!text-black-900 tracking-[-0.50px]"
                        >
                          1
                        </Text>
                        <Img
                          src="images/img_bx_plus_circle_1_blue_gray_900_01.svg"
                          alt="image_two"
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                    <Heading size="md" className="tracking-[-0.50px]">
                      $ 75.00
                    </Heading>
                    <Button color="gray_50_01" size="7xl" className="w-[50px]">
                      <Img src="images/img_frame_48096032.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex w-[33%] flex-col items-start justify-end gap-7 bg-gray-50_01 p-[27px]">
                  <Heading className="mt-[9px] !font-bold tracking-[-0.50px]">
                    Cart Total
                  </Heading>
                  <div className="flex w-full flex-col items-center justify-start gap-5">
                    <div className="flex w-full flex-row items-center justify-between py-0.5">
                      <Text
                        size="lg"
                        className="!font-raleway tracking-[-0.50px] !text-gray-500"
                      >
                        Subtotal
                      </Text>
                      <Heading className="!font-poppins tracking-[-0.50px]">
                        $ 99.00
                      </Heading>
                    </div>
                    <div className="flex w-full flex-row items-center justify-center">
                      <Input
                        size="sm"
                        name="your_voucher"
                        placeholder="Your Voucher"
                        className="!text-black-900_3f w-[73%]"
                      />
                      <Button
                        size="5xl"
                        className="min-w-[98px] font-semibold tracking-[-0.50px] !text-yellow-100"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                  <div className="bg-black-900 h-px w-full" />
                  <div className="flex w-full flex-row items-center justify-between py-0.5">
                    <Text
                      size="lg"
                      className="!font-raleway tracking-[-0.50px] !text-gray-500"
                    >
                      Total
                    </Text>
                    <Heading className="!font-poppins tracking-[-0.50px]">
                      $ 99.00
                    </Heading>
                  </div>
                  <Button
                    size="8xl"
                    className="mb-1 w-full font-semibold tracking-[-0.50px] !text-yellow-100"
                  >
                    Checkout Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
