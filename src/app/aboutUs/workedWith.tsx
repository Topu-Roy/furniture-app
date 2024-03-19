import React from 'react'
import Image from 'next/image'

export default function WorkedWith() {
    return (
        <div className="w-full bg-gray-950 py-[4rem]">
            <div className="flex flex-row items-center justify-between max-w-7xl gap-4 mx-auto">
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
    )
}
