import Image from "next/image";
import React from "react";
import { Heading, Text } from "@/components";

export default function OurBenefits() {
  return (
    <div className="w-full bg-gray-50">
      <div className="mx-auto flex flex-row justify-center py-20">
        <div className="flex w-full max-w-[1290px] flex-row justify-between">
          <div className="flex w-[47%] flex-col items-center justify-start gap-[50px]">
            <Heading size="3xl" className="leading-[60px] tracking-[-0.50px]">
              We guarantee the safety of your shopping
            </Heading>
            <div className="grid min-h-[auto] w-full grid-cols-2 justify-center gap-[50px]">
              <div className="flex w-full flex-col items-start justify-start gap-10">
                <Image
                  width={50}
                  height={50}
                  src="/images/img_icon.svg"
                  alt="fast_shipping"
                  className="h-[60px]"
                />
                <div className="flex w-full flex-col items-start justify-start gap-[9px]">
                  <Heading className="tracking-[-0.50px]">
                    Fast Shipping
                  </Heading>
                  <Text className="leading-[25px] tracking-[-0.50px] !text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has{" "}
                  </Text>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-10">
                <Image
                  width={50}
                  height={50}
                  src="/images/img_icon_gray_50_01.svg"
                  alt="icon_one"
                  className="h-[60px]"
                />
                <div className="flex w-full flex-col items-start justify-start gap-[9px]">
                  <Heading className="tracking-[-0.50px]">
                    Safe Delivery
                  </Heading>
                  <Text className="leading-[25px] tracking-[-0.50px] !text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has{" "}
                  </Text>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-10">
                <Image
                  width={50}
                  height={50}
                  src="/images/img_icon_gray_50_01_60x63.svg"
                  alt="icon_one"
                  className="h-[60px]"
                />
                <div className="flex w-full flex-col items-start justify-start gap-2 pt-0.5">
                  <Heading className="tracking-[-0.50px]">
                    365 Days Return
                  </Heading>
                  <Text className="leading-[25px] tracking-[-0.50px] !text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has{" "}
                  </Text>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-10">
                <Image
                  width={50}
                  height={50}
                  src="/images/img_icon_60x63.svg"
                  alt="icon_one"
                  className="h-[60px]"
                />
                <div className="flex w-full flex-col items-start justify-start gap-2.5">
                  <Heading className="tracking-[-0.50px]">24 hours CS</Heading>
                  <Text className="leading-[25px] tracking-[-0.50px] !text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Image
            height={1000}
            width={1000}
            src="/images/img_rectangle_16.png"
            alt="image_one"
            className="w-[47%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
