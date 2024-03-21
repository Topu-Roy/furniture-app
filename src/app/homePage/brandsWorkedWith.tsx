import Image from "next/image";
import React from "react";

export default function BrandsWorkedWith() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 bg-gray-900 py-10">
      <span className="text-center text-2xl font-medium text-stone-200">
        Various brands have used our products
      </span>
      <div className="mx-auto flex w-full max-w-[80rem] flex-row justify-between gap-[50px]">
        <Image
          height={50}
          width={200}
          src="images/img_search_gray_50_01.svg"
          alt="search_three"
        />
        <Image
          height={50}
          width={100}
          src="images/img_company_logo_company109_gray_50_01.svg"
          alt="companylogo"
        />
        <Image
          height={50}
          width={100}
          src="images/img_company_logo_company109.svg"
          alt="companylogo_one"
        />
        <Image
          height={50}
          width={100}
          src="images/img_company_logo_company109_gray_50_01_48x141.svg"
          alt="companylogo"
        />
        <Image
          height={50}
          width={100}
          src="images/img_company_logo_company109_gray_50_01_48x134.svg"
          alt="companylogo"
        />
        <Image
          height={50}
          width={100}
          src="images/img_company_logo_company109_gray_50_01_48x132.svg"
          alt="companylogo"
        />
      </div>
    </div>
  );
}
