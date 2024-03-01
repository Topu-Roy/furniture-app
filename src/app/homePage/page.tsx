"use client"
import React from "react";
import { Text, Heading, Img, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomepageCardblog from "../../components/HomepageCardblog";
import HomepageCardproduct from "../../components/HomepageCardproduct";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";
import { kalnia } from "@/styles/font";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Header />

      <div className="w-full bg-orange-50 py-10">
        <div className="w-[80rem] mx-auto">
          <div className="flex flex-row justify-between items-center w-full my-[5px] max-w-[1290px]">
            <div className="flex flex-col items-start justify-start w-[48%] gap-[30px]">
              <div className="flex flex-col items-start justify-start w-full gap-[26px]">
                <Text size="xl" className="!text-black-900 tracking-[-0.50px]">
                  Interior Needs...
                </Text>
                <Text size="max" className={`!text-black-900 tracking-normal ${kalnia.className}`}>
                  Various new collections of furniture to decorate the corner of your house.
                </Text>
              </div>
              <Button
                size="9xl"
                className="text-yellow-100 tracking-[-0.50px] font-medium border-blue_gray-900_01 border-2 border-solid min-w-[218px]"
              >
                Shop Now
              </Button>
            </div>
            <Img src="images/img_nathan_oakley_o.png" alt="nathanoakleyo" className="w-[48%] object-cover" />
          </div>
        </div>
      </div>

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
            <Img src="images/img_sam_moghadam_kh.png" alt="image" className="w-[31%] mr-1.5 object-cover" />
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
            <Img src="images/img_phil_desforges.png" alt="phildesforges" className="w-[34%] my-[22px] object-cover" />
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-50">




        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[45px] max-w-[1290px]">
            <div className="flex flex-col items-center justify-center w-full gap-[21px]">
              <Heading size="3xl" className="tracking-[-0.50px] text-center">
                <span className="text-black-900">Our </span>
                <span className="text-black-900">Newest</span>
                <span className="text-black-900">Product</span>
              </Heading>
              <Text size="md" className="mb-1 !text-gray-500 tracking-[-0.50px] text-center">
                Made of the best materials and with a design that follows the times
              </Text>
            </div>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
              renderDotsItem={(props: DotsItem) => {
                return props?.isActive ? (
                  <div className="h-[15px] w-[15px] mr-[15px] bg-blue_gray-900_01" />
                ) : (
                  <div className="h-[15px] w-[15px] mr-[15px] bg-gray_200" />
                );
              }}
              activeIndex={sliderState}
              onSlideChanged={(e: EventObject) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col gap-[47px] mx-auto">
                    <div className="flex flex-row justify-start w-full gap-[19px]">
                      <HomepageCardproduct
                        status="New"
                        bxheartoneOne="images/img_bx_heart_1.svg"
                        bxcarttwoOne="images/img_bx_cart_2.svg"
                        className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_400x308.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_1.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_2.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                      />
                    </div>
                    <div className="flex flex-row justify-start w-full gap-[19px]">
                      <HomepageCardproduct
                        imageOne="images/img_image_3.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_4.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_5.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                      />
                      <HomepageCardproduct
                        imageOne="images/img_image_6.png"
                        status="New"
                        className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
        <div className="h-[535px] w-full relative">
          <div className="flex flex-col items-center justify-start h-full w-[535px] right-0 bottom-0 top-0 m-auto absolute">
            <Img src="images/img_inside_weather.png" alt="insideweather" className="w-[535px] object-cover" />
          </div>
          <div className="flex flex-row justify-start w-full bottom-0 right-0 left-0 p-[13px] m-auto bg-yellow-100 absolute">
            <div className="flex flex-col items-start justify-start w-[38%] mb-[95px] ml-[61px] gap-[30px]">
              <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                <Text size="lg" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                  Interior Modern
                </Text>
                <Heading size="3xl" className="tracking-[-0.50px] leading-[60px]">
                  Arrange your home in such a way with our modern interiors
                </Heading>
              </div>
              <Button size="9xl" variant="outline" className="tracking-[-0.50px] font-medium min-w-[218px]">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[67px] max-w-[1290px]">
            <Heading size="2xl" className="!text-blue_gray-900_01 tracking-[-0.50px] text-center">
              New Arrival
            </Heading>
            <div className="flex flex-col w-full gap-[47px]">
              <div className="flex flex-row justify-start w-full gap-[19px]">
                <HomepageCardproduct
                  status="New"
                  bxheartoneOne="images/img_bx_heart_1.svg"
                  bxcarttwoOne="images/img_bx_cart_2.svg"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_7.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_8.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_9.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px]"
                />
              </div>
              <div className="flex flex-row w-full gap-[19px]">
                <HomepageCardproduct
                  imageOne="images/img_image_10.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_11.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_12.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
                <HomepageCardproduct
                  imageOne="images/img_image_13.png"
                  status="New"
                  className="flex flex-col items-center justify-start w-full gap-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between w-full max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[47%] gap-[50px]">
              <Heading size="3xl" className="tracking-[-0.50px] leading-[60px]">
                We guarantee the safety of your shopping
              </Heading>
              <div className="justify-center w-full gap-[50px] grid-cols-2 grid min-h-[auto]">
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img src="images/img_icon.svg" alt="fast_shipping" className="h-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <Heading className="tracking-[-0.50px]">
                      Fast Shipping
                    </Heading>
                    <Text className="!text-gray-500 tracking-[-0.50px] leading-[25px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img src="images/img_icon_gray_50_01.svg" alt="icon_one" className="h-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <Heading className="tracking-[-0.50px]">
                      Safe Delivery
                    </Heading>
                    <Text className="!text-gray-500 tracking-[-0.50px] leading-[25px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img src="images/img_icon_gray_50_01_60x63.svg" alt="icon_one" className="h-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2">
                    <Heading className="tracking-[-0.50px]">
                      365 Days Return
                    </Heading>
                    <Text className="!text-gray-500 tracking-[-0.50px] leading-[25px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img src="images/img_icon_60x63.svg" alt="icon_one" className="h-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <Heading className="tracking-[-0.50px]">
                      24 hours CS
                    </Heading>
                    <Text className="!text-gray-500 tracking-[-0.50px] leading-[25px]">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img src="images/img_rectangle_16.png" alt="image_one" className="w-[47%] object-cover" />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
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
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
