import { Img, Text } from '@/components'
import React from 'react'

export default function WorkedWith() {
    return (
        <div className="flex flex-row justify-center w-full p-[41px] bg-black-900">
            <div className="flex flex-col items-center justify-start w-full gap-11 mx-[132px] max-w-[1094px]">
                <Text size="lg" className="text-black tracking-[-0.50px] text-center">
                    Various brands have used our products
                </Text>
                <div className="bg-black flex flex-row justify-start w-full gap-[50px]">
                    <Img src="images/img_search_gray_50_01.svg" alt="search_three" className="h-12" />
                    <Img src="images/img_company_logo_company109.svg" alt="companylogo_one" className="h-12" />
                    <Img src="images/img_company_logo_company109_gray_50_01.svg" alt="companylogo" className="h-12" />
                    <Img
                        src="images/img_company_logo_company109_gray_50_01_48x141.svg"
                        alt="companylogo"
                        className="h-12"
                    />
                    <Img
                        src="images/img_company_logo_company109_gray_50_01_48x134.svg"
                        alt="companylogo"
                        className="h-12"
                    />
                    <Img
                        src="images/img_company_logo_company109_gray_50_01_48x132.svg"
                        alt="companylogo"
                        className="h-12"
                    />
                </div>
            </div>
        </div>
    )
}
