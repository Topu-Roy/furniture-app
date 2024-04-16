import Image from "next/image";
import React from "react";
import { Heading, Text } from "@/components";
import { BiRocket } from "react-icons/bi";
import { MdOutlineLock } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";

export default function OurBenefits() {
  const features = [
    {
      id: 1,
      title: "Fast Shipping",
      icon: <BiRocket size={26} className="text-black/60" />,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
    },
    {
      id: 2,
      title: "Safe Delivery",
      icon: <MdOutlineLock size={26} className="text-black/60" />,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
    },
    {
      id: 3,
      title: "365 Days Return",
      icon: <GrPowerReset size={26} className="text-black/60" />,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
    },
    {
      id: 4,
      title: "24 hours CS",
      icon: <IoCallOutline size={26} className="text-black/60" />,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-row justify-center py-14 md:py-20">
        <div className="flex w-full flex-row justify-between">
          <div className="flex w-full flex-col items-center justify-start gap-[50px] px-2 sm:px-4 lg:flex-1">
            <Heading size="2xl" className="px-8 text-center md:hidden">
              We guarantee the safety of your shopping
            </Heading>
            <Heading
              size="3xl"
              className="hidden leading-[60px] tracking-[-0.50px] md:block"
            >
              We guarantee the safety of your shopping
            </Heading>
            <div className="grid min-h-[auto] w-full grid-cols-2 justify-center gap-1.5">
              {features.map((item) => (
                <div
                  key={`${item.id}-features`}
                  className="flex w-full flex-col items-start justify-start gap-10 rounded-md bg-slate-300/50 p-4"
                >
                  {item.icon}
                  <div className="flex w-full flex-col items-start justify-start gap-[9px]">
                    <Heading className="tracking-[-0.50px]">
                      {item.title}
                    </Heading>
                    <Text className="leading-[25px] tracking-[-0.50px] !text-gray-500">
                      {item.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            height={1000}
            width={1000}
            src="/images/img_rectangle_16.png"
            alt="image_one"
            className="hidden w-[47%] object-cover lg:block"
          />
        </div>
      </div>
    </div>
  );
}
