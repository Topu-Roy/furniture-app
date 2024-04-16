"use client";
import React from "react";
// import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img, TextArea, Input } from "../../components";
import { SelectBox } from "@/components/SelectBox";
import Footer from "../_components/Footer";
import Header from "../_components/NavBar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CheckoutPage() {
  return (
    <>
      {/* <Helmet>
        <title>Furniture-app-1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex w-full flex-col items-center justify-start gap-[100px] bg-gray-50">
        <Header className="bg-white-A700 flex w-full items-center justify-center p-[35px]" />
        <div className="flex w-full flex-row justify-center">
          <div className="flex w-full flex-row justify-center">
            <div className="flex w-full max-w-[1290px] flex-col items-center justify-start gap-12">
              <Heading
                size="3xl"
                as="h1"
                className="text-center tracking-[-0.50px]"
              >
                Checkout
              </Heading>
              <div className="flex w-full flex-row items-start justify-start gap-[19px]">
                <div className="flex w-[67%] flex-col items-center justify-start gap-[53px]">
                  <div className="flex w-full flex-col items-start justify-start gap-9">
                    <Heading size="xl" as="h2" className="tracking-[-0.50px]">
                      Contact Information
                    </Heading>
                    <div className="flex w-full flex-col items-center justify-start gap-[34px]">
                      <div className="flex w-full flex-row justify-start gap-5">
                        <div className="flex w-[49%] flex-col items-start justify-start gap-[11px]">
                          <Text
                            size="lg"
                            as="p"
                            className="!text-black-900 !font-raleway tracking-[-0.50px]"
                          >
                            First Name
                          </Text>
                          <Input
                            color="blue_gray_100"
                            size="lg"
                            variant="outline"
                            type="text"
                            name="firstName"
                            placeholder="Your first name here.."
                            className="w-full"
                          />
                        </div>
                        <div className="flex w-[49%] flex-col items-start justify-start gap-[11px]">
                          <Text
                            size="lg"
                            as="p"
                            className="!text-black-900 !font-raleway tracking-[-0.50px]"
                          >
                            Last Name
                          </Text>
                          <Input
                            color="blue_gray_100"
                            size="lg"
                            variant="outline"
                            type="text"
                            name="lastName"
                            placeholder="Your last name here.."
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="flex w-full flex-row justify-start gap-5">
                        <div className="flex w-[49%] flex-col items-start justify-start gap-[11px]">
                          <Text
                            size="lg"
                            as="p"
                            className="!text-black-900 !font-raleway tracking-[-0.50px]"
                          >
                            Phone
                          </Text>
                          <Input
                            color="blue_gray_100"
                            size="lg"
                            variant="outline"
                            type="number"
                            name="phone"
                            placeholder="Your phone here.."
                            className="w-full"
                          />
                        </div>
                        <div className="flex w-[49%] flex-col items-start justify-start gap-[11px]">
                          <Text
                            size="lg"
                            as="p"
                            className="!text-black-900 !font-raleway tracking-[-0.50px]"
                          >
                            Email
                          </Text>
                          <Input
                            color="blue_gray_100"
                            size="lg"
                            variant="outline"
                            type="email"
                            name="email"
                            placeholder="Your email here.."
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-[29px]">
                    <div className="flex w-full flex-col items-start justify-start gap-[33px]">
                      <Heading size="xl" as="h3" className="tracking-[-0.50px]">
                        Shipping Method
                      </Heading>
                      <div className="flex flex-row justify-start gap-[21px]">
                        <Button
                          color="blue_gray_100"
                          size="10xl"
                          variant="outline"
                          leftIcon={
                            <Img
                              src="images/img_bxstore_1.svg"
                              alt="bx-store 1"
                            />
                          }
                          className="min-w-[154px] gap-2.5 tracking-[-0.50px]"
                        >
                          Store
                        </Button>
                        <Button
                          color="gray_100"
                          size="10xl"
                          leftIcon={
                            <Img
                              src="images/img_bxpackage_1.svg"
                              alt="bx-package 1"
                            />
                          }
                          className="border-blue_gray-900_01 min-w-[175px] gap-2.5 border border-solid tracking-[-0.50px]"
                        >
                          Delivery
                        </Button>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-[9px]">
                      <Text
                        size="lg"
                        as="p"
                        className="!text-black-900 !font-raleway tracking-[-0.50px]"
                      >
                        Country / Region{" "}
                      </Text>
                      <SelectBox
                        size="sm"
                        variant="outline"
                        indicator={
                          <Img
                            src="images/img_arrow_down.svg"
                            alt="arrow_down"
                          />
                        }
                        name="country"
                        placeholder="United States (US)"
                        options={dropDownOptions}
                        className="w-full gap-px tracking-[-0.50px]"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-[11px]">
                      <Text
                        size="lg"
                        as="p"
                        className="!text-black-900 !font-raleway tracking-[-0.50px]"
                      >
                        Street address{" "}
                      </Text>
                      <TextArea
                        size="xs"
                        name="frame48096064"
                        placeholder="Write your full address"
                        className="w-full tracking-[-0.50px] text-gray-500"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-[33px]">
                    <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                      Payment Method
                    </Heading>
                    <div className="flex w-3/5 flex-row justify-start gap-5">
                      <div className="border-blue_gray-100 flex w-[31%] flex-row justify-center border border-solid p-[26px]">
                        <Img
                          src="images/img_vector.png"
                          alt="vector_one"
                          className="mx-5 w-[59%] object-cover"
                        />
                      </div>
                      <div className="border-blue_gray-100 flex w-[31%] flex-row justify-center border border-solid p-6">
                        <Img
                          src="images/img_google_pay.svg"
                          alt="googlepay_one"
                          className="mx-[22px] h-[23px]"
                        />
                      </div>
                      <div className="border-blue_gray-100 flex w-[31%] flex-row justify-center border border-solid p-[26px]">
                        <Img
                          src="images/img_paypal.svg"
                          alt="paypal_one"
                          className="mx-2.5 h-[19px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50_01 flex w-[33%] flex-col items-center justify-center p-[27px]">
                  <div className="my-[7px] flex w-full flex-col items-start justify-start gap-[35px] pt-[5px]">
                    <Heading as="h5" className="!font-bold tracking-[-0.50px]">
                      Your Order
                    </Heading>
                    <div className="flex w-full flex-col items-center justify-start gap-6">
                      <div className="flex w-full flex-col items-center justify-start gap-[25px]">
                        <div className="flex w-full flex-row items-center justify-between py-0.5">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-raleway tracking-[-0.50px] !text-gray-500"
                          >
                            Complete set of sofa... 1x
                          </Text>
                          <Heading
                            as="h6"
                            className="!font-poppins tracking-[-0.50px]"
                          >
                            $ 75.00
                          </Heading>
                        </div>
                        <div className="flex w-full flex-row items-center justify-between py-0.5">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-raleway tracking-[-0.50px] !text-gray-500"
                          >
                            Teak wood chair 1x
                          </Text>
                          <Heading
                            as="h5"
                            className="!font-poppins tracking-[-0.50px]"
                          >
                            $ 24.00
                          </Heading>
                        </div>
                        <div className="bg-black-900 h-px w-full" />
                      </div>
                      <div className="flex w-full flex-col items-center justify-start gap-[25px]">
                        <div className="flex w-full flex-row items-center justify-between py-0.5">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-raleway tracking-[-0.50px] !text-gray-500"
                          >
                            Subtotal
                          </Text>
                          <Heading
                            as="h5"
                            className="!font-poppins tracking-[-0.50px]"
                          >
                            $ 99.00
                          </Heading>
                        </div>
                        <div className="flex w-full flex-row items-center justify-between py-0.5">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-raleway tracking-[-0.50px] !text-gray-500"
                          >
                            Discount (30%)
                          </Text>
                          <Heading
                            as="h5"
                            className="!text-deep_orange-A400 !font-poppins tracking-[-0.50px]"
                          >
                            - $ 29.70
                          </Heading>
                        </div>
                      </div>
                      <div className="bg-black-900 h-px w-full" />
                      <div className="flex w-full flex-row items-center justify-between py-0.5">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-raleway tracking-[-0.50px] !text-gray-500"
                        >
                          Total
                        </Text>
                        <Heading
                          as="h5"
                          className="!font-poppins tracking-[-0.50px]"
                        >
                          $ 69.30
                        </Heading>
                      </div>
                      <Button
                        size="8xl"
                        className="w-full font-semibold tracking-[-0.50px] !text-yellow-100"
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex w-full flex-col items-center justify-center" />
      </div>
    </>
  );
}
