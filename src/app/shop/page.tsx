'use client'
import React from "react";
// import { Helmet } from "react-helmet";
import { Img, Button, Input, Heading, Text } from "../../components";
import { SelectBox } from "@/components/SelectBox";
import Footer from "../../components/Footer";
import Header from "../../components/NavBar";
import HomepageCardproduct from "../../components/HomepageCardproduct";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ShopPage() {
  return (
    <>
      {/* <Helmet>
        <title>Furniture-app-1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[75px]">
          <Header className="flex justify-center items-center w-full p-[35px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full max-w-[1290px]">
              <div className="flex flex-row justify-center w-full">
                <div className="h-[450px] w-full relative">
                  <Img
                    src="images/img_rectangle_28.png"
                    alt="image_one"
                    className="justify-center h-[450px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-start w-[37%] h-max gap-[30px] left-[5%] bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                      <Heading size="md" as="h1" className="!text-yellow-100 tracking-[-0.50px]">
                        Best Room Decor Items
                      </Heading>
                      <Heading size="3xl" as="h2" className="!text-white-A700 tracking-[-0.50px] leading-[60px]">
                        Our goods have the best quality and materials in the world
                      </Heading>
                    </div>
                    <Button
                      color="yellow_100"
                      size="9xl"
                      className="tracking-[-0.50px] font-poppins font-bold min-w-[170px]"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-start items-start w-full gap-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[24%] gap-[60px]">
              <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                <Heading as="h2">Filter By Price</Heading>
                <div className="flex flex-row justify-between items-center w-full pr-[74px]">
                  <Input
                    color="gray_500"
                    size="xs"
                    variant="outline"
                    shape="round"
                    name="price"
                    placeholder="$0"
                    className="w-[42%]"
                  />
                  <Heading size="xs" as="h3" className="!font-plusjakartasans">
                    -
                  </Heading>
                  <Input
                    color="gray_500"
                    size="xs"
                    variant="outline"
                    shape="round"
                    name="price"
                    placeholder="$2000"
                    className="w-[42%]"
                  />
                </div>
                <Img src="images/img_slider.svg" alt="slider_one" className="h-4" />
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                <Heading as="h4">Filter By Color</Heading>
                <Img src="images/img_frame_48095956.svg" alt="image_two" className="h-10" />
                <Img src="images/img_frame_48095957.svg" alt="image_three" className="h-10" />
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                <Heading as="h5">Product Categories</Heading>
                <div className="flex flex-col items-start justify-start w-full gap-5">
                  <Text size="s" as="p" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins">
                    Chair (9)
                  </Text>
                  <Text size="s" as="p" className="!text-gray-500 tracking-[-0.50px] !font-poppins">
                    Lamp (10)
                  </Text>
                  <Text size="s" as="p" className="!text-gray-500 tracking-[-0.50px] !font-poppins">
                    Table (12)
                  </Text>
                  <Text size="s" as="p" className="!text-gray-500 tracking-[-0.50px] !font-poppins">
                    Sofa (6)
                  </Text>
                  <Text size="s" as="p" className="!text-gray-500 tracking-[-0.50px] !font-poppins">
                    Table (12)
                  </Text>
                  <Text size="s" as="p" className="!text-gray-500 tracking-[-0.50px] !font-poppins">
                    Clock (5)
                  </Text>
                  <Text size="s" as="p" className="!text-gray-500 tracking-[-0.50px] !font-poppins">
                    Pillow (3)
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                <Heading as="h6">Product Tag</Heading>
                <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                  <div className="flex flex-row justify-start gap-2.5">
                    <Button
                      size="lg"
                      shape="round"
                      className="!text-yellow-100 tracking-[-0.50px] font-poppins border-blue_gray-900_01 border border-solid min-w-[66px]"
                    >
                      Chair
                    </Button>
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[68px]"
                    >
                      Lamp
                    </Button>
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[101px]"
                    >
                      Minimalist
                    </Button>
                  </div>
                  <div className="flex flex-row justify-start gap-2.5">
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[59px]"
                    >
                      Sofa
                    </Button>
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[58px]"
                    >
                      New
                    </Button>
                    <Button
                      color="gray_500"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="tracking-[-0.50px] font-poppins min-w-[67px]"
                    >
                      Clock
                    </Button>
                  </div>
                  <Button
                    color="gray_500"
                    size="lg"
                    variant="outline"
                    shape="round"
                    className="tracking-[-0.50px] font-poppins min-w-[66px]"
                  >
                    Pillow
                  </Button>
                </div>
              </div>
              <div className="h-[400px] w-full relative">
                <Img
                  src="images/img_rectangle_29.png"
                  alt="image_four"
                  className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[87%] gap-[15px] bottom-[10%] right-0 left-0 m-auto absolute">
                  <Heading as="h5" className="!text-white-A700 text-center !font-bold !leading-[35px]">
                    Make a purchase now and get 50% discount
                  </Heading>
                  <Button
                    color="yellow_100"
                    size="xl"
                    shape="round"
                    className="!text-black-900 tracking-[-0.50px] font-poppins font-semibold border-yellow-100 border border-solid min-w-[107px]"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-3/4 gap-[49px]">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-center w-[43%]">
                  <div className="flex flex-row justify-center w-full">
                    <Input
                      size="md"
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
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
