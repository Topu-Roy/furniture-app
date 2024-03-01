'use client'
import React from "react";
// import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading } from "../../components";
import CartSection from "../../components/CartSection";
import DetailReviewSectionfooter from "../../components/DetailReviewSectionfooter";
import Header1 from "../../components/Header1";
import HomepageCardblog from "../../components/HomepageCardblog";

export default function BlogPage() {
  return (
    <>
      {/* <Helmet>
        <title>Topuroy1's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-col items-center justify-start w-full gap-[125px] bg-gray-50">
        <Header1 className="flex justify-center items-center w-full p-[35px] bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[54px] max-w-[1291px]">
              <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                <div className="flex flex-col items-center justify-start w-full pt-1 gap-2">
                  <Heading size="3xl" as="h1" className="tracking-[-0.50px] text-center">
                    Read Our Latest Blog
                  </Heading>
                  <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center leading-[35px]">
                    We write various things related to furniture, from tips and what things <br />I need to pay
                    attention to when choosing furniture
                  </Text>
                </div>
                <div className="justify-center w-full gap-5 grid-cols-3 grid min-h-[auto]">
                  <HomepageCardblog className="flex flex-col items-center justify-start w-full gap-6" />
                  <HomepageCardblog
                    image="images/img_rectangle_18_400x416.png"
                    className="flex flex-col items-center justify-start w-full gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_1.png"
                    className="flex flex-col items-center justify-start w-full gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_400x417.png"
                    className="flex flex-col items-center justify-start w-full gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_2.png"
                    className="flex flex-col items-center justify-start w-full gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_3.png"
                    className="flex flex-col items-center justify-start w-full gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_4.png"
                    className="flex flex-col items-center justify-start w-full gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_5.png"
                    className="flex flex-col items-center justify-start w-full gap-6"
                  />
                  <HomepageCardblog
                    image="images/img_rectangle_18_6.png"
                    className="flex flex-col items-center justify-start w-full gap-6"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full pl-[535px] pr-14 gap-2.5">
                <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[15px] w-[15px]" />
                <div className="flex flex-row w-[18%] gap-2.5">
                  <div className="flex flex-col items-center justify-start h-[35px] w-full">
                    <Button size="lg" className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px]">
                      1
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[35px] w-full">
                    <Button
                      color="gray_100"
                      size="lg"
                      className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px]"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[35px] w-full">
                    <Button
                      color="gray_100"
                      size="lg"
                      className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px]"
                    >
                      3
                    </Button>
                  </div>
                </div>
                <Button color="gray_100" size="md" className="w-[35px] rounded-[17px]">
                  <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                </Button>
                <Img src="images/img_akar_icons_chevron_left.svg" alt="akaricons_one" className="h-[15px] w-[15px]" />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center w-full">
          <CartSection className="flex flex-row justify-start w-full pl-[46px] gap-11 py-[46px] mx-auto bg-gradient max-w-[1291px]" />
          <DetailReviewSectionfooter className="flex flex-row justify-end w-full mt-[527px] ml-[-1366px] p-12 bg-black-900" />
        </footer>
      </div>
    </>
  );
}
