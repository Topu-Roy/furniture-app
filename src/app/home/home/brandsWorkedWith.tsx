import Image from "next/image";
import React from "react";

export default function BrandsWorkedWith() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 bg-gray-900 py-20">
      <div className="mx-auto flex w-full max-w-[80rem] flex-row justify-between gap-[50px]">
        <Image
          src="images/img_search_gray_50_01.svg"
          alt="search_three"
          className="h-12"
          height={50}
          width={250}
        />
        <Image
          src="images/img_company_logo_company109.svg"
          alt="companylogo_one"
          className="h-12"
          height={50}
          width={150}
        />
        <Image
          src="images/img_company_logo_company109_gray_50_01.svg"
          alt="companylogo"
          className="h-12"
          height={50}
          width={80}
        />
        <Image
          src="images/img_company_logo_company109_gray_50_01_48x141.svg"
          alt="companylogo"
          className="h-12"
          height={50}
          width={120}
        />
        <Image
          src="images/img_company_logo_company109_gray_50_01_48x134.svg"
          alt="companylogo"
          className="h-12"
          height={50}
          width={120}
        />
        <Image
          src="images/img_company_logo_company109_gray_50_01_48x132.svg"
          alt="companylogo"
          className="h-12"
          height={50}
          width={110}
        />
      </div>
    </div>
  );
}
