"use client";
import { Heading } from "@/components";
import Image from "next/image";
import React from "react";

export default function CompactIconsRating() {
  const userIconsForRating = [
    "img_unsplash_wnolnjo7ts8.png",
    "img_unsplash_rtvgs4vgkgm.png",
    "img_unsplash_d1upkifd04a.png",
    "img_unsplash_plsf6obtgms.png",
  ];

  return (
    <div className="flex w-full flex-row justify-center">
      {userIconsForRating.map((icon) => (
        <Image
          key={icon}
          src={`/images/${icon}`}
          alt=""
          className="h-[50px] w-[50px] rounded-[50%]"
          height={50}
          width={50}
        />
      ))}
      <div className="ml-[-5px] flex h-[50px] w-[50px] flex-col items-center justify-start">
        <Heading
          size="xs"
          className="bg-blue_gray-900_01 flex h-[50px] w-[50px] items-center justify-center rounded-[50%] text-center tracking-[-0.50px] !text-yellow-100"
        >
          3K+
        </Heading>
      </div>
    </div>
  );
}
