'use client'
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
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[75px]">
          <Header1 className="flex justify-center items-center w-full p-[35px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full max-w-[1291px]">
              <div className="flex flex-row justify-center w-full">
                <div className="h-[450px] w-full relative">
                  <Img
                    src="images/img_rectangle_28.png"
                    alt="image_one"
                    className="justify-center h-[450px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-start w-[37%] h-max gap-[30px] left-[5%] bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                      <Heading size="md" as="h1" className="!text-yellow-100 tracking-[-0.50px]">
                        Best Room Decor Items
                      </Heading>
                      <Heading size="3xl" as="h2" className="!text-white-A700 tracking-[-0.50px]">
                        Our goods have the best quality and materials in the world
                      </Heading>
                    </div>
                    <Button
                      color="yellow_100"
                      size="9xl"
                      className="tracking-[-0.50px] font-poppins font-bold min-w-[170px]"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between items-center w-full max-w-[1291px]">
            <div className="flex flex-row justify-center w-[48%]">
              <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[41px]">
                <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                  Frequently asked questions
                </Heading>
                <Accordion preExpanded={[0]} className="flex flex-col w-full gap-[23px]">
                  {[...Array(4)].map((_, i) => (
                    <AccordionItem uuid={i} key={`expandablelisth${i}`}>
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex flex-row justify-between items-start w-full">
                                  <Text size="lg" as="p" className="mt-px !text-black-900 !font-raleway">
                                    How to buy a product?
                                  </Text>
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <div className="w-full h-px bg-black-900_19 rotate-[0deg]" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[48%] gap-[23px]">
              <a href="#">
                <Heading size="xl" as="h3" className="tracking-[-0.50px]">
                  Contact Us
                </Heading>
              </a>
              <div className="flex flex-col items-start justify-start w-full gap-8">
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-row justify-start w-full gap-4">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-4">
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
                    <div className="flex flex-col items-start justify-start w-[49%] gap-4">
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
                  <div className="flex flex-col items-start justify-start w-full gap-4">
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      Your Comment
                    </Heading>
                    <TextArea
                      name="frame48096017"
                      placeholder="Write your review here...."
                      className="w-full text-gray-500 tracking-[-0.50px]"
                    />
                  </div>
                </div>
                <Button
                  size="6xl"
                  className="tracking-[-0.50px] font-poppins font-medium border-blue_gray-900_01 border-2 border-solid min-w-[140px]"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        <CartSection className="flex flex-row justify-start w-full pl-[46px] gap-11 py-[46px] bg-gradient max-w-[1291px]" />
        <footer className="flex justify-center items-center w-full p-12 bg-black-900">
          <div className="flex flex-col items-center justify-center w-full gap-[148px] mx-auto max-w-[1302px]">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-col items-start justify-start w-[28%] gap-4">
                <Heading size="2xl" as="h2" className="!text-gray-50_01 tracking-[-0.50px]">
                  Furnit.
                </Heading>
                <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81 leading-[35px]">
                  Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet
                  phasel alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[17%] pt-[5px] gap-6">
                <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
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
              <div className="flex flex-col items-start justify-start w-[17%] gap-6">
                <Heading as="h5" className="mt-[5px] !text-gray-50_01 tracking-[-0.50px]">
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
              <div className="flex flex-col items-start justify-start w-[17%] pt-[5px] gap-[25px]">
                <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
                  Follow Us
                </Heading>
                <div className="flex flex-row justify-between w-full">
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
            <div className="flex flex-row justify-between items-center w-full">
              <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81">
                © Copyright 2022. All Rights Reserved.
              </Text>
              <div className="flex flex-row justify-between w-auto pr-[3px] gap-[41px]">
                <Text size="md" as="p" className="mb-px tracking-[-0.50px] opacity-0.81">
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
