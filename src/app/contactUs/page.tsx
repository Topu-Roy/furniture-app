"use client";
import React from "react";
// import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, TextArea, Input } from "../../components";
import CartSection from "../../components/CartSection";
import Header1 from "../../components/Header1";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function ContactusPage() {
  return (
    <>
      {/* <Helmet>
        <title>Topu99's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex w-full flex-col items-center justify-start gap-[99px] bg-gray-50">
        <div className="flex w-full flex-col items-center justify-start gap-[75px]">
          <Header1 className="bg-white-A700 flex w-full items-center justify-center p-[35px]" />
          <div className="flex w-full flex-row justify-center">
            <div className="flex w-full max-w-[1291px] flex-row justify-center">
              <div className="flex w-full flex-row justify-center">
                <div className="relative h-[450px] w-full">
                  <Img
                    src="images/img_rectangle_28.png"
                    alt="image_one"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[450px] w-full justify-center object-cover"
                  />
                  <div className="absolute bottom-0 left-[5%] top-0 m-auto flex h-max w-[37%] flex-col items-start justify-start gap-[30px]">
                    <div className="flex w-full flex-col items-start justify-start gap-[15px]">
                      <Heading
                        size="md"
                        as="h1"
                        className="tracking-[-0.50px] !text-yellow-100"
                      >
                        Best Room Decor Items
                      </Heading>
                      <Heading
                        size="3xl"
                        as="h2"
                        className="!text-white-A700 tracking-[-0.50px]"
                      >
                        Our goods have the best quality and materials in the
                        world
                      </Heading>
                    </div>
                    <Button
                      color="yellow_100"
                      size="9xl"
                      className="font-poppins min-w-[170px] font-bold tracking-[-0.50px]"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center">
          <div className="flex w-full max-w-[1291px] flex-row items-center justify-between">
            <div className="flex w-[48%] flex-row justify-center">
              <div className="flex w-full flex-col items-start justify-start gap-[41px] pt-0.5">
                <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                  Frequently asked questions
                </Heading>
                <Accordion
                  preExpanded={[0]}
                  className="flex w-full flex-col gap-[23px]"
                >
                  {[...Array(4)].map((_, i) => (
                    <AccordionItem uuid={i} key={`expandablelisth${i}`}>
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex w-full flex-row items-start justify-between">
                                  <Text
                                    size="lg"
                                    as="p"
                                    className="!text-black-900 !font-raleway mt-px"
                                  >
                                    How to buy a product?
                                  </Text>
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <div className="bg-black-900_19 h-px w-full rotate-[0deg]" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex w-[48%] flex-col items-start justify-start gap-[23px]">
              <a href="#">
                <Heading size="xl" as="h3" className="tracking-[-0.50px]">
                  Contact Us
                </Heading>
              </a>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-center justify-start gap-[30px]">
                  <div className="flex w-full flex-row justify-start gap-4">
                    <div className="flex w-[49%] flex-col items-start justify-start gap-4">
                      <Heading size="md" as="h4" className="tracking-[-0.50px]">
                        Your Name
                      </Heading>
                      <Input
                        color="blue_gray_100"
                        size="xl"
                        variant="outline"
                        type="text"
                        name="name"
                        placeholder="Write your name here...."
                        className="w-full"
                      />
                    </div>
                    <div className="flex w-[49%] flex-col items-start justify-start gap-4">
                      <Heading size="md" as="h5" className="tracking-[-0.50px]">
                        Your Email
                      </Heading>
                      <Input
                        color="blue_gray_100"
                        size="xl"
                        variant="outline"
                        type="email"
                        name="email"
                        placeholder="Write your email here...."
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-4">
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      Your Comment
                    </Heading>
                    <TextArea
                      name="frame48096017"
                      placeholder="Write your review here...."
                      className="w-full tracking-[-0.50px] text-gray-500"
                    />
                  </div>
                </div>
                <Button
                  size="6xl"
                  className="font-poppins min-w-[140px] border-2 border-solid border-blue_gray-900_01 font-medium tracking-[-0.50px]"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        <CartSection className="flex w-full max-w-[1291px] flex-row justify-start gap-11 bg-gradient py-[46px] pl-[46px]" />
        <footer className="bg-black-900 flex w-full items-center justify-center p-12">
          <div className="mx-auto flex w-full max-w-[1302px] flex-col items-center justify-center gap-[148px]">
            <div className="flex w-full flex-row items-start justify-between">
              <div className="flex w-[28%] flex-col items-start justify-start gap-4">
                <Heading
                  size="2xl"
                  as="h2"
                  className="tracking-[-0.50px] !text-gray-50_01"
                >
                  Furnit.
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="leading-[35px] tracking-[-0.50px] opacity-0.81"
                >
                  Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
                  facilisi vivamus proin lit laoreet phasel alilus porttitor
                  inter, facilisis condiment tarime egestas rhoncus dapibus
                  iaculis alemir.
                </Text>
              </div>
              <div className="flex w-[17%] flex-col items-start justify-start gap-6 pt-[5px]">
                <Heading
                  as="h5"
                  className="tracking-[-0.50px] !text-gray-50_01"
                >
                  Customer
                </Heading>
                <div className="flex flex-col items-start justify-start gap-6">
                  <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                    Order Status
                  </Text>
                  <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                    Collections
                  </Text>
                  <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                    Our Story
                  </Text>
                  <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                    Affiliates
                  </Text>
                  <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                    Security
                  </Text>
                </div>
              </div>
              <div className="flex w-[17%] flex-col items-start justify-start gap-6">
                <Heading
                  as="h5"
                  className="mt-[5px] tracking-[-0.50px] !text-gray-50_01"
                >
                  Information
                </Heading>
                <div className="flex flex-col items-start justify-start gap-6">
                  <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                    Customer Service
                  </Text>
                  <a href="#" className="opacity-0.81">
                    <Text as="p" className="tracking-[-0.50px]">
                      Careers
                    </Text>
                  </a>
                  <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                    FAQ
                  </Text>
                </div>
              </div>
              <div className="flex w-[17%] flex-col items-start justify-start gap-[25px] pt-[5px]">
                <Heading
                  as="h5"
                  className="tracking-[-0.50px] !text-gray-50_01"
                >
                  Follow Us
                </Heading>
                <div className="flex w-full flex-row justify-between">
                  <Button color="yellow_100" shape="circle" className="w-10">
                    <Img src="images/img_bxl_instagram.svg" />
                  </Button>
                  <Button color="yellow_100" shape="circle" className="w-10">
                    <Img src="images/img_bxl_facebook.svg" />
                  </Button>
                  <Button color="yellow_100" shape="circle" className="w-10">
                    <Img src="images/img_bxl_twitter.svg" />
                  </Button>
                  <Button color="yellow_100" shape="circle" className="w-10">
                    <Img src="images/img_bxl_tiktok.svg" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-between">
              <Text
                size="md"
                as="p"
                className="tracking-[-0.50px] opacity-0.81"
              >
                © Copyright 2022. All Rights Reserved.
              </Text>
              <div className="flex w-auto flex-row justify-between gap-[41px] pr-[3px]">
                <Text
                  size="md"
                  as="p"
                  className="mb-px tracking-[-0.50px] opacity-0.81"
                >
                  Terms of condition
                </Text>
                <a href="#" className="opacity-0.81">
                  <Text size="md" as="p" className="tracking-[-0.50px]">
                    Privacy Policy
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
