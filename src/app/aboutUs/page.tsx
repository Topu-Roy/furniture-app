"use client"
import React from "react";
// import { Helmet } from "react-helmet";
import { Text, Heading, Img, Slider, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TeamCardteam from "../../components/TeamCardteam";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function AboutusPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);

  return (
    <>
      {/* <Helmet>
        <title>Topu99's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <Header className="flex justify-center items-center w-full p-[35px] bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-between items-center w-full max-w-[1290px]">
              <div className="flex flex-col items-center justify-start w-[49%] gap-14">
                <div className="flex flex-col items-start justify-start w-full gap-[25px]">
                  <div className="flex flex-col items-center justify-start gap-[25px]">
                    <Heading size="3xl" as="h1" className="tracking-[-0.50px]">
                      Provide the best quality ingredients for home products
                    </Heading>
                    <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue
                      elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est
                      aliquam, facilisi consequat ligula vivamus faucibus
                    </Text>
                  </div>
                  <Button
                    color="black_900"
                    size="4xl"
                    variant="outline"
                    className="tracking-[-0.50px] font-semibold min-w-[172px]"
                  >
                    Meet our Team
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-5">
                  <div className="flex flex-col items-start justify-start w-[38%] gap-[7px]">
                    <div className="flex flex-row justify-start items-center w-[58%] gap-2.5">
                      <Heading size="md" as="h2" className="tracking-[0.12px] !font-bold">
                        Ratings
                      </Heading>
                      <div className="flex flex-row justify-start items-center w-[45%] gap-[5px]">
                        <Img
                          src="images/img_ant_design_star_filled.svg"
                          alt="image_one"
                          className="h-[30px] w-[30px]"
                        />
                        <Heading size="md" as="h3" className="tracking-[0.12px] !font-bold">
                          5.0
                        </Heading>
                      </div>
                    </div>
                    <Text size="xs" as="p" className="!text-black-900_7f tracking-[-0.50px]">
                      Trusted by many people from all over the world
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-[37%]">
                    <div className="flex flex-row justify-center w-full">
                      <Img
                        src="images/img_unsplash_wnolnjo7ts8.png"
                        alt="unsplash_one"
                        className="h-[50px] w-[50px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_unsplash_rtvgs4vgkgm.png"
                        alt="unsplash_three"
                        className="h-[50px] w-[50px] ml-[-5px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_unsplash_d1upkifd04a.png"
                        alt="unsplash_five"
                        className="h-[50px] w-[50px] ml-[-5px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_unsplash_plsf6obtgms.png"
                        alt="unsplash_seven"
                        className="h-[50px] w-[50px] ml-[-5px] rounded-[50%]"
                      />
                      <div className="flex flex-col items-center justify-start h-[50px] w-[50px] ml-[-5px]">
                        <Heading
                          size="xs"
                          as="h4"
                          className="flex justify-center items-center h-[50px] w-[50px] !text-yellow-100 tracking-[-0.50px] bg-blue_gray-900_01 text-center rounded-[50%]"
                        >
                          3K+
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_1492.png"
                alt="image_two"
                className="w-[41%] rounded-tr-[50%] rounded-bl-[50%] rounded-tl-[50%] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full p-[41px] bg-black-900">
            <div className="flex flex-col items-center justify-start w-full gap-11 mx-[132px] max-w-[1094px]">
              <Text size="lg" as="p" className="!text-gray-50_01 tracking-[-0.50px] text-center">
                Various brands have used our products
              </Text>
              <div className="flex flex-row justify-start w-full gap-[50px]">
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
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[51px] max-w-[1290px]">
              <div className="flex flex-col items-center justify-center w-full gap-5">
                <Heading size="3xl" as="h2" className="tracking-[-0.50px] text-center">
                  Meet Our Team
                </Heading>
                <Text size="lg" as="p" className="mb-1 !text-gray-500 tracking-[-0.50px] text-center">
                  We write various things related to furniture, from tips and what things I need to pay attention to
                  when choosing furniture
                </Text>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 3 } }}
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
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-center justify-start mx-2.5">
                      <TeamCardteam
                        image="images/img_rectangle_1487_1.png"
                        makejhane="Mia Lobey"
                        financemanager="Accountant"
                        className="flex flex-col items-center justify-start w-full gap-[30px]"
                      />
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
                  <Text size="lg" as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                    Interior Modern
                  </Text>
                  <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
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
            <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-[46px] max-w-[1290px]">
              <Heading size="3xl" as="h2" className="tracking-[0.12px] !font-poppins text-center !font-semibold">
                <span className="text-black-900 font-raleway font-bold">How happy are they with </span>
                <span className="text-black-900 font-raleway font-bold">our service</span>
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                  renderDotsItem={(props: DotsItem) => {
                    return props?.isActive ? (
                      <div className="h-[15px] w-[15px] mr-2.5 bg-blue_gray-900_01" />
                    ) : (
                      <div className="h-[15px] w-[15px] mr-2.5 bg-gray_200" />
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
                      <div className="flex flex-row gap-[21px] mx-auto">
                        <div className="flex flex-row justify-center w-[33%] p-[26px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5 my-1">
                            <Img
                              src="images/img_bxs_quote_alt_left.svg"
                              alt="bxsquotealt_one"
                              className="h-[50px] w-[50px]"
                            />
                            <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                              <div className="flex flex-col items-center justify-start w-full gap-1">
                                <Heading size="md" as="h3" className="tracking-[0.12px] !font-poppins leading-[35px]">
                                  For the material and the chair as we expected it&#39;s good
                                </Heading>
                                <Text
                                  as="p"
                                  className="!text-black-900_87 tracking-[0.12px] !font-poppins opacity-0.5 leading-[35px]"
                                >
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy text ever.
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                                <Img
                                  src="images/img_unsplash_wnolnjo7ts8_56x56.png"
                                  alt="unsplash_one"
                                  className="h-14 w-14 rounded-[50%]"
                                />
                                <div className="flex flex-col items-start justify-start w-4/5 pt-0.5 gap-px">
                                  <Heading size="md" as="h4" className="tracking-[0.12px] !font-poppins">
                                    Dagruel Manulo
                                  </Heading>
                                  <Text as="p" className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
                                    Sydney, Australia
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-[33%] p-[26px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5 my-1">
                            <Img
                              src="images/img_bxs_quote_alt_left.svg"
                              alt="bxsquotealt_one"
                              className="h-[50px] w-[50px]"
                            />
                            <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                              <div className="flex flex-col items-center justify-start w-full gap-1">
                                <Heading size="md" as="h5" className="tracking-[0.12px] !font-poppins leading-[35px]">
                                  For the material and the chair as we expected it&#39;s good
                                </Heading>
                                <Text
                                  as="p"
                                  className="!text-black-900_87 tracking-[0.12px] !font-poppins opacity-0.5 leading-[35px]"
                                >
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy text ever.
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                                <Img
                                  src="images/img_unsplash_wnolnjo7ts8_1.png"
                                  alt="unsplash_one"
                                  className="h-14 w-14 rounded-[50%]"
                                />
                                <div className="flex flex-col items-start justify-start w-4/5 gap-1">
                                  <Heading size="md" as="h6" className="tracking-[0.12px] !font-poppins">
                                    Zambi Owel
                                  </Heading>
                                  <Text as="p" className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
                                    Sydney, Australia
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-[33%] p-[26px]">
                          <div className="flex flex-col items-start justify-start w-full gap-5 my-1">
                            <Img
                              src="images/img_bxs_quote_alt_left.svg"
                              alt="bxsquotealt_one"
                              className="h-[50px] w-[50px]"
                            />
                            <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                              <div className="flex flex-col items-center justify-start w-full gap-1">
                                <Heading size="md" as="h6" className="tracking-[0.12px] !font-poppins leading-[35px]">
                                  For the material and the chair as we expected it&#39;s good
                                </Heading>
                                <Text
                                  as="p"
                                  className="!text-black-900_87 tracking-[0.12px] !font-poppins opacity-0.5 leading-[35px]"
                                >
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy text ever.
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start items-center w-full gap-[19px]">
                                <Img
                                  src="images/img_unsplash_wnolnjo7ts8_2.png"
                                  alt="unsplash_one"
                                  className="h-14 w-14 rounded-[50%]"
                                />
                                <div className="flex flex-col items-start justify-start w-4/5 gap-1">
                                  <Heading size="md" as="h6" className="tracking-[0.12px] !font-poppins">
                                    Mario
                                  </Heading>
                                  <Text as="p" className="!text-black-900_7f_01 tracking-[0.12px] !font-poppins">
                                    Sydney, Australia
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
