import Image from 'next/image'
import React from 'react'

export default function BrandsWorkedWith() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-10 py-10 bg-gray-900">
            <span className="text-stone-200 text-2xl font-medium text-center">
                Various brands have used our products
            </span>
            <div className="flex flex-row justify-between w-full gap-[50px] max-w-[80rem] mx-auto">
                <Image height={50} width={200} src="images/img_search_gray_50_01.svg" alt="search_three" />
                <Image height={50} width={100} src="images/img_company_logo_company109_gray_50_01.svg" alt="companylogo" />
                <Image height={50} width={100} src="images/img_company_logo_company109.svg" alt="companylogo_one" />
                <Image height={50} width={100} src="images/img_company_logo_company109_gray_50_01_48x141.svg" alt="companylogo" />
                <Image height={50} width={100} src="images/img_company_logo_company109_gray_50_01_48x134.svg" alt="companylogo" />
                <Image height={50} width={100} src="images/img_company_logo_company109_gray_50_01_48x132.svg" alt="companylogo" />
            </div>
        </div>
    )
}
