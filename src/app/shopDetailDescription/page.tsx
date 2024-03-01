"use client"
import React from "react";
// import { Helmet } from "react-helmet";
import { Slider, Heading, Img, Button, Text, RatingBar } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomepageCardproduct from "../../components/HomepageCardproduct";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function ShopDetailDescriptionPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);

  return (
    <>
      {/* <Helmet>
        <title>Furniture-app-1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex justify-center items-center w-full p-[35px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full pt-[75px] px-14">
            <div className="flex flex-row justify-start w-full gap-[47px] max-w-[1290px]">
              <Img src="images/img_rectangle_1475.png" alt="image_one" className="w-[49%] object-cover" />
              <div className="flex flex-col items-center justify-start w-[49%] gap-[30px]">
                <div className="flex flex-col items-start justify-start w-full gap-8">
                  <Heading size="2xl" as="h1" className="tracking-[-0.50px]">
                    Complete set of sofa, pillows and bed sheets
                  </Heading>
                  <div className="flex flex-row justify-start items-center gap-[15px]">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#ff9432"
                      size={20}
                      className="flex justify-between w-[140px]"
                    />
                    <Text as="p" className="!text-gray-500 tracking-[-0.50px]">
                      ( 1 review )
                    </Text>
                  </div>
                  <Heading size="3xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                    $ 75.00
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                    <Heading size="md" as="h3" className="tracking-[-0.50px]">
                      <span className="text-gray-500 font-normal">Stok :</span>
                      <span className="text-black-900 font-normal">18</span>
                    </Heading>
                    <Heading size="md" as="h4" className="tracking-[-0.50px]">
                      <span className="text-gray-500 font-normal">SKU :</span>
                      <span className="text-black-900 font-normal">BA65</span>
                      <span className="text-black-900"></span>
                    </Heading>
                    <Heading size="md" as="h5" className="tracking-[-0.50px]">
                      <span className="text-gray-500 font-normal">Categories :</span>
                      <span className="text-black-900 font-normal">Chair, New Arrivals, Special</span>
                    </Heading>
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      <span className="text-gray-500 font-normal">Tags :</span>
                      <span className="text-black-900 font-normal">Black, Chair</span>
                    </Heading>
                  </div>
                  <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] !leading-[35px]">
                    In order to sit comfortably for long periods, people need freedom of movement. The Form rocking
                    chair has a molded plastic shell with a wide, curved seat, which gives plenty of opportunity for
                    changing one’s sitting position.
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-row justify-between items-center w-[55%]">
                    <div className="flex flex-row justify-start items-center gap-[15px] p-[9px] border-black-900 border border-solid">
                      <Img src="images/img_bx_minus_circle.svg" alt="image_two" className="h-6 w-6 ml-1" />
                      <Text size="md" as="p" className="!text-black-900 tracking-[-0.50px]">
                        1
                      </Text>
                      <Img
                        src="images/img_bx_plus_circle_1_blue_gray_900_01.svg"
                        alt="image_three"
                        className="h-6 w-6"
                      />
                    </div>
                    <Button color="black_900" size="4xl" className="tracking-[-0.50px] min-w-[128px]">
                      Add to Cart
                    </Button>
                    <Button color="blue_gray_100" size="3xl" variant="outline" className="w-[43px]">
                      <Img src="images/img_frame_48095996.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-start items-center w-full gap-[49px] max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[49%] gap-[42px]">
              <div className="flex flex-row justify-between items-start w-full pr-[368px]">
                <div className="flex flex-col items-center justify-start w-1/2 mt-0.5 gap-2">
                  <Heading size="xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-josefinsans">
                    Description
                  </Heading>
                  <div className="h-1.5 w-full bg-blue_gray-900_01" />
                </div>
                <Heading size="xl" as="h3" className="!text-gray-500 tracking-[-0.50px] !font-josefinsans">
                  Review
                </Heading>
              </div>
              <Text size="s" as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `}
                <br />
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[49%] gap-[21px]">
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
                activeIndex={sliderState1}
                onSlideChanged={(e: EventObject) => {
                  setSliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="w-full"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-row justify-between items-start p-6 mx-auto bg-gray-50_01">
                      <div className="flex flex-col items-start justify-start w-[55%] ml-[19px] gap-[23px]">
                        <div className="flex flex-col items-start justify-start w-full gap-7">
                          <Text size="md" as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                            Living Room
                          </Text>
                          <Heading size="3xl" as="h4" className="tracking-[-0.50px]">
                            The best foam padded chair
                          </Heading>
                        </div>
                        <Button
                          size="6xl"
                          variant="outline"
                          className="tracking-[-0.50px] font-poppins font-medium min-w-[155px]"
                        >
                          Shop Now
                        </Button>
                      </div>
                      <Img
                        src="images/img_sam_moghadam_kh.png"
                        alt="sammoghadamkh"
                        className="w-[32%] mr-[19px] object-cover"
                      />
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[42px] max-w-[1290px]">
            <Heading size="3xl" as="h2" className="tracking-[-0.50px] text-center">
              Related Products
            </Heading>
            <div className="flex flex-col items-center justify-start w-full gap-[42px]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 4 } }}
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
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <HomepageCardproduct
                      imageOne="images/img_image_10.png"
                      className="flex flex-col items-center justify-start gap-[15px] mx-2.5"
                    />
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
