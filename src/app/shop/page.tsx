'use client'
import React from "react";
import { Img, Button, Heading, Text } from "../../components";
import { SelectBox } from "@/components/SelectBox";
import Footer from "../../components/Footer";
import HomepageCardproduct from "../../components/HomepageCardproduct";
import NavBar from "@/components/NavBar";
import ColorSelector from "./colorSelector";
import FilterByPrice from "./filterByPrice";
import Catagories from "./catagories";
import ProductTag from "./productTag";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ShopPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50 py-4">

        <div className="flex flex-col items-center justify-start w-full">
          <div className="relative flex flex-row justify-start items-start w-full gap-5 max-w-[1290px]">

            <div className="sticky top-0 flex flex-col items-center justify-start w-[24%] gap-[60px]">
              <ColorSelector />
              <FilterByPrice />
              <Catagories />
              <ProductTag />
            </div>

            <div className="flex flex-col items-center justify-start w-3/4 gap-[49px]">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-center w-[43%]">
                  <div className="flex flex-row justify-center w-full">
                    <input
                      name="office_chair"
                      placeholder="Office Chair"
                      className="w-[74%] !text-black-900_3f"
                    />
                    <Button size="6xl" className="!text-yellow-100 tracking-[-0.50px] font-semibold min-w-[107px]">
                      Search
                    </Button>
                  </div>
                </div>
                <SelectBox
                  indicator={<Img src="images/img_evaarrowiosforwardfill.svg" alt="eva:arrow-ios-forward-fill" />}
                  name="sortby"
                  placeholder="Sort By"
                  options={dropDownOptions}
                  className="w-[8%] gap-px text-black-900 font-raleway font-medium"
                />
              </div>
              <div className="justify-center w-full gap-5 grid-cols-3 grid min-h-[auto]">
                <HomepageCardproduct
                  imageOne="images/img_image_10.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_7.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_8.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_10.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_11.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_12.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_9.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_13.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_7.png"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
              </div>
              <div className="flex flex-row justify-start items-center w-full pl-[371px] pr-14 gap-2.5">
                <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[15px] w-[15px]" />
                <div className="flex flex-row w-[24%] gap-2.5">
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
      </div>
      <Footer className="pt-10" />
    </>
  );
}
