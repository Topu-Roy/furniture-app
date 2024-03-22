"use client";
import React from "react";
import {
  Slider,
  Heading,
  Img,
  Button,
  Text,
  CheckBox,
  TextArea,
  Input,
  RatingBar,
} from "../../components";
import CartSection from "../../components/CartSection";
import DetailReviewSectionfooter from "../../components/DetailReviewSectionfooter";
import Header from "../../components/NavBar";
import HomepageCardproduct from "../../components/product/productCard";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";
import NavBar from "../../components/NavBar";

export default function DetailReviewPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);

  return (
    <>
      <NavBar />
      <div className="flex w-full flex-col items-center justify-start gap-[99px] bg-gray-50">
        <div className="flex w-full flex-col items-center justify-start">
          <div className="flex w-full flex-row justify-center px-14 pt-[75px]">
            <div className="flex w-full max-w-[1290px] flex-row justify-start gap-[47px]">
              <Img
                src="images/img_rectangle_1475.png"
                alt="image_one"
                className="w-[49%] object-cover"
              />
              <div className="flex w-[49%] flex-col items-center justify-start gap-[30px]">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <Heading size="xl" className="tracking-[-0.50px]">
                    Complete set of sofa, pillows and bed sheets
                  </Heading>
                  <div className="flex flex-row items-center justify-start gap-[15px]">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#ff9432"
                      size={20}
                      className="flex w-[140px] justify-between"
                    />
                    <Text className="tracking-[-0.50px] !text-gray-500">
                      ( 1 review )
                    </Text>
                  </div>
                  <Heading
                    size="2xl"
                    className="tracking-[-0.50px] !text-blue_gray-900_01"
                  >
                    $ 75.00
                  </Heading>
                  <div className="flex w-full flex-col items-start justify-start gap-[19px]">
                    <Heading size="s" className="tracking-[-0.50px]">
                      <span className="font-normal text-gray-500">Stok :</span>
                      <span className="text-black-900 font-normal">18</span>
                    </Heading>
                    <Heading size="s" className="tracking-[-0.50px]">
                      <span className="font-normal text-gray-500">SKU :</span>
                      <span className="text-black-900 font-normal">BA65</span>
                      <span className="text-black-900"></span>
                    </Heading>
                    <Heading size="s" className="tracking-[-0.50px]">
                      <span className="font-normal text-gray-500">
                        Categories :
                      </span>
                      <span className="text-black-900 font-normal">
                        Chair, New Arrivals, Special
                      </span>
                    </Heading>
                    <Heading size="s" className="tracking-[-0.50px]">
                      <span className="font-normal text-gray-500">Tags :</span>
                      <span className="text-black-900 font-normal">
                        Black, Chair
                      </span>
                    </Heading>
                  </div>
                  <Text
                    size="lg"
                    className="leading-[35px] tracking-[-0.50px] !text-gray-500"
                  >
                    In order to sit comfortably for long periods, people need
                    freedom of movement. The Form rocking chair has a molded
                    plastic shell with a wide, curved seat, which gives plenty
                    of opportunity for changing one’s sitting position.
                  </Text>
                </div>
                <div className="flex w-full flex-row justify-start">
                  <div className="flex w-[55%] flex-row items-center justify-between">
                    <div className="border-black-900 flex flex-row items-center justify-start gap-[15px] border border-solid p-[9px]">
                      <Img
                        src="images/img_bx_minus_circle.svg"
                        alt="image_two"
                        className="ml-1 h-6 w-6"
                      />
                      <Text
                        size="lg"
                        className="!text-black-900 tracking-[-0.50px]"
                      >
                        1
                      </Text>
                      <Img
                        src="images/img_bx_plus_circle_1_blue_gray_900_01.svg"
                        alt="image_three"
                        className="h-6 w-6"
                      />
                    </div>
                    <Button
                      color="black_900"
                      size="4xl"
                      className="min-w-[128px] tracking-[-0.50px]"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      color="blue_gray_100"
                      size="3xl"
                      variant="outline"
                      className="w-[43px]"
                    >
                      <Img src="images/img_frame_48095996.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center">
          <div className="flex w-full max-w-[1290px] flex-row items-start justify-start gap-[50px]">
            <div className="flex w-[49%] flex-col items-center justify-start gap-[50px]">
              <div className="flex w-full flex-col items-center justify-start gap-[49px]">
                <div className="flex w-full flex-row items-start justify-between pr-[369px]">
                  <Heading
                    size="lg"
                    className="!font-josefinsans mt-0.5 tracking-[-0.50px] !text-gray-500"
                  >
                    Description
                  </Heading>
                  <div className="flex w-[31%] flex-col items-center justify-start gap-2.5">
                    <Heading
                      size="lg"
                      className="!font-josefinsans tracking-[-0.50px] !text-blue_gray-900_01"
                    >
                      Review
                    </Heading>
                    <div className="h-1.5 w-full bg-blue_gray-900_01" />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[30px]">
                  <div className="flex w-full flex-col items-end justify-start gap-2.5">
                    <div className="flex w-full flex-row items-center justify-between">
                      <div className="flex w-[26%] flex-row items-center justify-start gap-[15px]">
                        <Img
                          src="images/img_image_54x54.png"
                          alt="ralph_edwards"
                          className="h-[54px] w-[54px] rounded-[50%]"
                        />
                        <div className="flex w-[57%] flex-col items-start justify-start gap-1">
                          <Text className="!text-black-900 tracking-[-0.50px]">
                            Ralph Edwards
                          </Text>
                          <Text
                            size="xs"
                            className="!text-blue_gray-400 tracking-[-0.50px]"
                          >
                            2 minutes ago
                          </Text>
                        </div>
                      </div>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        color="#d9d9d9"
                        activeColor="#ff9432"
                        size={16}
                        className="flex w-32 justify-between"
                      />
                    </div>
                    <Text className="!text-black-900 w-[92%] leading-[35px] tracking-[-0.50px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      justo turpis massa tristique augue dignissim volutpat.
                      Quis ultricies eu libero tortor dictumst.
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-end justify-start gap-2.5">
                    <div className="flex w-full flex-row items-center justify-between">
                      <div className="flex w-[26%] flex-row items-center justify-start gap-[15px]">
                        <Img
                          src="images/img_image_54x54.png"
                          alt="image_one"
                          className="h-[54px] w-[54px] rounded-[50%]"
                        />
                        <div className="flex w-[57%] flex-col items-start justify-start gap-1">
                          <Text className="!text-black-900 tracking-[-0.50px]">
                            Ralph Edwards
                          </Text>
                          <Text
                            size="xs"
                            className="!text-blue_gray-400 tracking-[-0.50px]"
                          >
                            2 minutes ago
                          </Text>
                        </div>
                      </div>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        color="#d9d9d9"
                        activeColor="#ff9432"
                        size={16}
                        className="flex w-32 justify-between"
                      />
                    </div>
                    <Text className="!text-black-900 w-[92%] leading-[35px] tracking-[-0.50px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      justo turpis massa tristique augue dignissim volutpat.
                      Quis ultricies eu libero tortor dictumst.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-[21px]">
                <Heading size="lg" className="text-center tracking-[-0.50px]">
                  Write your review
                </Heading>
                <div className="flex h-[621px] w-[620px] flex-col items-center justify-start gap-8">
                  <div className="flex w-full flex-col items-center justify-start gap-[49px]">
                    <div className="flex w-full flex-col items-start justify-start gap-3.5">
                      <Heading size="s" className="tracking-[-0.50px]">
                        Your Rating
                      </Heading>
                      <RatingBar
                        value={2}
                        isEditable={true}
                        color="#d9d9d9"
                        activeColor="#ff9432"
                        size={16}
                        className="flex w-32 justify-between"
                      />
                    </div>
                    <div className="flex w-full flex-col items-center justify-start gap-[30px]">
                      <div className="flex w-full flex-row justify-start gap-4">
                        <div className="flex w-[49%] flex-col items-start justify-start gap-4">
                          <Heading size="s" className="tracking-[-0.50px]">
                            Your Name
                          </Heading>
                          <Input
                            color="blue_gray_100"
                            size="xl"
                            variant="outline"
                            type="text"
                            name="name"
                            placeholder="Write your name here...."
                            className="w-full"
                          />
                        </div>
                        <div className="flex w-[49%] flex-col items-start justify-start gap-4">
                          <Heading size="s" className="tracking-[-0.50px]">
                            Your Email
                          </Heading>
                          <Input
                            color="blue_gray_100"
                            size="xl"
                            variant="outline"
                            type="email"
                            name="email"
                            placeholder="Write your email here...."
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-4">
                        <Heading size="s" className="tracking-[-0.50px]">
                          Your Review
                        </Heading>
                        <TextArea
                          name="frame48096017"
                          placeholder="Write your review here...."
                          className="w-full tracking-[-0.50px] text-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-[30px]">
                    <CheckBox
                      name="savemynameemail"
                      label="Save my name, email, and website in this browser for the next time I comment."
                      className="font-poppins gap-2.5 text-left italic tracking-[-0.50px]"
                    />
                    <Button
                      size="6xl"
                      className="font-poppins min-w-[155px] border-2 border-solid border-blue_gray-900_01 font-medium tracking-[-0.50px]"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-0.5 flex w-[49%] flex-col items-center justify-start gap-[21px]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  "0": { items: 1 },
                  "550": { items: 1 },
                  "1050": { items: 1 },
                }}
                renderDotsItem={(props: DotsItem) => {
                  return props?.isActive ? (
                    <div className="mr-[15px] h-[15px] w-[15px] bg-blue_gray-900_01" />
                  ) : (
                    <div className="mr-[15px] h-[15px] w-[15px] bg-gray_200" />
                  );
                }}
                activeIndex={sliderState1}
                onSlideChanged={(e: EventObject) => {
                  setSliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="w-full"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="mx-auto flex flex-row items-start justify-between bg-gray-50_01 p-6">
                      <div className="ml-[19px] flex w-[55%] flex-col items-start justify-start gap-[23px]">
                        <div className="flex w-full flex-col items-start justify-start gap-7">
                          <Text
                            size="lg"
                            className="tracking-[-0.50px] !text-blue_gray-900_01"
                          >
                            Living Room
                          </Text>
                          <Heading size="2xl" className="tracking-[-0.50px]">
                            The best foam padded chair
                          </Heading>
                        </div>
                        <Button
                          size="6xl"
                          variant="outline"
                          className="font-poppins min-w-[155px] font-medium tracking-[-0.50px]"
                        >
                          Shop Now
                        </Button>
                      </div>
                      <Img
                        src="images/img_sam_moghadam_kh.png"
                        alt="sammoghadamkh"
                        className="mr-[19px] w-[32%] object-cover"
                      />
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center">
          <div className="flex w-full max-w-[1290px] flex-col items-center justify-start gap-[42px]">
            <Heading size="3xl" className="text-center tracking-[-0.50px]">
              Related Products
            </Heading>
            <div className="flex w-full flex-col items-center justify-start gap-[42px]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  "0": { items: 1 },
                  "550": { items: 1 },
                  "1050": { items: 4 },
                }}
                renderDotsItem={(props: DotsItem) => {
                  return props?.isActive ? (
                    <div className="mr-[15px] h-[15px] w-[15px] bg-blue_gray-900_01" />
                  ) : (
                    <div className="mr-[15px] h-[15px] w-[15px] bg-gray_200" />
                  );
                }}
                activeIndex={sliderState}
                onSlideChanged={(e: EventObject) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-full"
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <HomepageCardproduct
                      imageOne="images/img_image_10.png"
                      className="mx-2.5 flex flex-col items-center justify-start gap-[15px]"
                    />
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <footer className="flex w-full flex-col items-center justify-center">
          <CartSection className="mx-auto flex w-full max-w-[1278px] flex-row justify-start gap-11 bg-gradient py-[46px] pl-[46px]" />
          <DetailReviewSectionfooter className="bg-black-900 ml-[-1359px] mt-[501px] flex w-full flex-row justify-end p-12" />
        </footer>
      </div>
    </>
  );
}
