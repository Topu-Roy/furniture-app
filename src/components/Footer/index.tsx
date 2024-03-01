import React from "react";
import { Text, Button, Img, Heading, Input } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-start w-full pl-[46px] gap-11 py-[46px] mx-auto bg-gradient max-w-[1290px]">
        <div className="flex flex-col items-center justify-start w-[48%] ml-[13px] gap-10">
          <div className="flex flex-col items-center justify-start w-full gap-2.5">
            <Heading size="3xl" as="h1" className="!text-gray-50_01 tracking-[-0.50px] leading-[60px]">
              Subscribe now and get 10% off all items
            </Heading>
            <Text size="md" as="p" className="!text-gray-50_01 tracking-[-0.50px] !leading-[35px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text.
            </Text>
          </div>
          <div className="flex flex-row justify-start w-full gap-px">
            <Input name="email" placeholder="Your email here.." className="w-[74%]" />
            <Button size="10xl" className="!text-yellow-100 tracking-[-0.50px] font-bold min-w-[157px]">
              Subscribe
            </Button>
          </div>
        </div>
        <Img src="images/img_pexels_photo_by.png" alt="pexelsphotoby" className="w-[48%] object-cover" />
      </div>
      <div className="flex flex-row justify-end w-full mt-[501px] ml-[-1365px] p-12 bg-black-900">
        <div className="flex flex-col items-center justify-start w-full gap-[148px] mx-auto max-w-[1301px]">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-col items-start justify-start w-[28%] gap-4">
              <Heading size="xl" as="h2" className="!text-gray-50_01 tracking-[-0.50px]">
                Furnit.
              </Heading>
              <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81 !leading-[35px]">
                Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel
                alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
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
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Careers
                </Text>
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
              <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81">
                Privacy Policy
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
