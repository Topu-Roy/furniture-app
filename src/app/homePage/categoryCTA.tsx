import { Heading, Text } from '@/components'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function CategoryCTA() {
    return (
        <div className="w-full py-20">
            <div className="flex flex-row w-full gap-5 max-w-[1290px] mx-auto">
                <div className="flex flex-row justify-between items-center w-full p-6 bg-gradient">
                    <div className="flex flex-col items-start justify-start w-[55%] ml-1.5 gap-6">
                        <div className="flex flex-col items-start justify-start w-full gap-7">
                            <Text size="md" className="!text-gray-50_01 tracking-[-0.50px]">
                                Living Room
                            </Text>
                            <Heading size="3xl" className="!text-gray-50_01 tracking-[-0.50px]">
                                The best foam padded chair
                            </Heading>
                        </div>
                        <Button
                            size="6xl"
                            className="tracking-[-0.50px] font-medium min-w-[155px] bg-white hover:bg-slate-200 text-gray-900"
                        >
                            Shop Now
                        </Button>
                    </div>
                    <Image height={500} width={500} src="/images/img_sam_moghadam_kh.png" alt="image" className="w-[31%] mr-1.5 object-cover" />
                </div>
                <div className="flex flex-row justify-between items-center w-full p-[30px] bg-gradient">
                    <div className="flex flex-col items-start justify-start w-[54%] gap-6">
                        <div className="flex flex-col items-start justify-start w-full gap-7">
                            <Text size="md" className="!text-gray-50_01 tracking-[-0.50px]">
                                Living Room
                            </Text>
                            <Heading size="3xl" className="!text-gray-50_01 tracking-[-0.50px]">
                                Latest model chandelier
                            </Heading>
                        </div>
                        <Button
                            size="6xl"
                            className="tracking-[-0.50px] font-medium min-w-[155px] bg-white hover:bg-slate-200 text-gray-900"
                        >
                            Shop Now
                        </Button>
                    </div>
                    <Image height={500} width={500} src="/images/img_phil_desforges.png" alt="phildesforges" className="w-[34%] my-[22px] object-cover" />
                </div>
            </div>
        </div>
    )
}
