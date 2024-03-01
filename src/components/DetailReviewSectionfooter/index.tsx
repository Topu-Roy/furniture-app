import React from "react";
import { Text, Button, Img, Heading } from "./..";

interface Props {
  className?: string;
  furnit?: string;
  description?: string;
  customer?: string;
  orderstatus?: string;
  collections?: string;
  ourstory?: string;
  affiliates?: string;
  security?: string;
  information?: string;
  customerOne?: string;
  careers?: string;
  faq?: string;
  followus?: string;
  copyright2022?: string;
  termsof?: string;
  privacypolicy?: string;
}

export default function DetailReviewSectionfooter({
  furnit = "Furnit.",
  description = "Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.",
  customer = "Customer",
  orderstatus = "Order Status",
  collections = "Collections",
  ourstory = "Our Story",
  affiliates = "Affiliates",
  security = "Security",
  information = "Information",
  customerOne = "Customer Service",
  careers = "Careers",
  faq = "FAQ",
  followus = "Follow Us",
  copyright2022 = "© Copyright 2022. All Rights Reserved.",
  termsof = "Terms of condition",
  privacypolicy = "Privacy Policy",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-[148px] mx-auto max-w-[1301px]">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col items-start justify-start w-[28%] gap-4">
            <Heading size="xl" as="h1" className="!text-gray-50_01 tracking-[-0.50px]">
              {furnit}
            </Heading>
            <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81 !leading-[35px]">
              {description}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[17%] pt-[5px] gap-6">
            <Heading as="h2" className="!text-gray-50_01 tracking-[-0.50px]">
              {customer}
            </Heading>
            <div className="flex flex-col items-start justify-start gap-6">
              <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                {orderstatus}
              </Text>
              <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                {collections}
              </Text>
              <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                {ourstory}
              </Text>
              <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                {affiliates}
              </Text>
              <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                {security}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[17%] gap-6">
            <Heading as="h3" className="mt-[5px] !text-gray-50_01 tracking-[-0.50px]">
              {information}
            </Heading>
            <div className="flex flex-col items-start justify-start gap-6">
              <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                {customerOne}
              </Text>
              <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                {careers}
              </Text>
              <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                {faq}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[17%] pt-[5px] gap-[25px]">
            <Heading as="h4" className="!text-gray-50_01 tracking-[-0.50px]">
              {followus}
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
            {copyright2022}
          </Text>
          <div className="flex flex-row justify-between w-auto pr-[3px] gap-[41px]">
            <Text size="md" as="p" className="mb-px tracking-[-0.50px] opacity-0.81">
              {termsof}
            </Text>
            <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81">
              {privacypolicy}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
