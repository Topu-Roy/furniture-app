import { Heading, Text } from '@/components'
import HomepageCardblog from '@/components/HomepageCardblog'
import React from 'react'

export default function ReadBlogSection() {
    return (
        <div className="w-full pb-20 pt-10">
            <div className="flex flex-row justify-center mx-auto">
                <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-[1290px]">
                    <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
                        <Heading size="3xl" className="tracking-[-0.50px] text-center !font-semibold">
                            Read Our Latest Blog
                        </Heading>
                        <Text size="md" className="!text-gray-500 tracking-[-0.50px] text-center">
                            We write various things related to furniture, from tips and what things I need to pay attention to when
                            choosing furniture
                        </Text>
                    </div>
                    <div className="flex flex-row w-full gap-5">
                        <HomepageCardblog className="flex flex-col items-center justify-start w-full gap-6" />
                        <HomepageCardblog
                            image="images/img_rectangle_18_400x416.png"
                            className="flex flex-col items-center justify-start w-full gap-6"
                        />
                        <HomepageCardblog
                            image="images/img_rectangle_18_1.png"
                            className="flex flex-col items-center justify-start w-full gap-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
