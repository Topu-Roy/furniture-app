"use client"
import { Heading } from '@/components'
import Image from 'next/image'
import React from 'react'

export default function CompactIconsRating() {

    const userIconsForRating = [
        "img_unsplash_wnolnjo7ts8.png",
        "img_unsplash_rtvgs4vgkgm.png",
        "img_unsplash_d1upkifd04a.png",
        "img_unsplash_plsf6obtgms.png"
    ]

    return (
        <div className="flex flex-row justify-center w-full">
            {
                userIconsForRating.map(icon => (
                    <Image
                        src={`/images/${icon}`}
                        alt=""
                        className="h-[50px] w-[50px] rounded-[50%]"
                        height={50}
                        width={50}
                    />
                ))
            }
            <div className="flex flex-col items-center justify-start h-[50px] w-[50px] ml-[-5px]">
                <Heading
                    size="xs"
                    className="flex justify-center items-center h-[50px] w-[50px] !text-yellow-100 tracking-[-0.50px] bg-blue_gray-900_01 text-center rounded-[50%]"
                >
                    3K+
                </Heading>
            </div>
        </div>
    )
}
