import { Heading, Text } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function CategoryCTA() {
  return (
    <div className="w-full py-20">
      <div className="mx-auto flex w-full max-w-[1290px] flex-row gap-5">
        <div className="flex w-full flex-row items-center justify-between bg-gradient p-6">
          <div className="ml-1.5 flex w-[55%] flex-col items-start justify-start gap-6">
            <div className="flex w-full flex-col items-start justify-start gap-7">
              <Text size="md" className="tracking-[-0.50px] !text-gray-50_01">
                Living Room
              </Text>
              <Heading
                size="3xl"
                className="tracking-[-0.50px] !text-gray-50_01"
              >
                The best foam padded chair
              </Heading>
            </div>
            <Button
              size="6xl"
              className="min-w-[155px] bg-white font-medium tracking-[-0.50px] text-gray-900 hover:bg-slate-200"
            >
              Shop Now
            </Button>
          </div>
          <Image
            height={500}
            width={500}
            src="/images/img_sam_moghadam_kh.png"
            alt="image"
            className="mr-1.5 w-[31%] object-cover"
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between bg-gradient p-[30px]">
          <div className="flex w-[54%] flex-col items-start justify-start gap-6">
            <div className="flex w-full flex-col items-start justify-start gap-7">
              <Text size="md" className="tracking-[-0.50px] !text-gray-50_01">
                Living Room
              </Text>
              <Heading
                size="3xl"
                className="tracking-[-0.50px] !text-gray-50_01"
              >
                Latest model chandelier
              </Heading>
            </div>
            <Button
              size="6xl"
              className="min-w-[155px] bg-white font-medium tracking-[-0.50px] text-gray-900 hover:bg-slate-200"
            >
              Shop Now
            </Button>
          </div>
          <Image
            height={500}
            width={500}
            src="/images/img_phil_desforges.png"
            alt="phildesforges"
            className="my-[22px] w-[34%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
