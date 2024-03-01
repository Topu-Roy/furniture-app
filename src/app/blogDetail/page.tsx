'use client'
import React from "react";
// import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, Input, CheckBox, TextArea } from "../../components";
import BlogDetailCardrecent from "../../components/BlogDetailCardrecent";
import CartSection from "../../components/CartSection";
import DetailReviewSectionfooter from "../../components/DetailReviewSectionfooter";
import Header1 from "../../components/Header1";
import HomepageCardblog from "../../components/HomepageCardblog";

export default function BlogDetailPage() {
  return (
    <>
      {/* <Helmet>
        <title>Topuroy1's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <Header1 className="flex justify-center items-center w-full p-[35px] bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[83px] max-w-[1291px]">
              <div className="flex flex-col items-center justify-start w-full gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full pb-1.5 gap-[39px]">
                  <div className="flex flex-col items-center justify-center w-full gap-[11px]">
                    <Heading size="3xl" as="h1" className="mt-[3px] tracking-[-0.50px] text-center">
                      Why should you choose good wood
                    </Heading>
                    <div className="flex flex-row justify-start items-start w-full pl-[478px] pr-14 gap-[18px]">
                      <div className="flex flex-row justify-start items-center w-[15%] gap-2.5">
                        <Img src="images/img_bx_edit_alt_1.svg" alt="bxeditaltone" className="h-6 w-6 mb-px" />
                        <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                          By Admin
                        </Text>
                      </div>
                      <div className="h-[15px] w-px mt-1 bg-gray-500" />
                      <div className="flex flex-row justify-start items-center w-1/4 gap-2.5">
                        <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-6 w-6" />
                        <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </Text>
                </div>
                <Img src="images/img_rectangle_1488.png" alt="image_one" className="w-full object-cover" />
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col items-center justify-start w-[67%] gap-[50px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                      <Heading size="xl" as="h2" className="tracking-[-0.50px]">
                        How to choose the best chair
                      </Heading>
                      <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] !leading-[35px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula
                        augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo
                        est aliquam, facilisi consequat ligula vivamus faucibus ac sociis cubilia neque, felis fringilla
                        aenean hac eleifend tellus pellentesque quis suspendisse. Sociosqu suscipit sodales taciti
                        rutrum condimentum conubia volutpat cubilia mi, velit curabitur consequat proin neque commodo
                        interdum eleifend dui, ac magna leo ridiculus facilisi duis sapien etiam.
                      </Text>
                      <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] !leading-[35px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula
                        augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo
                        est aliquam, facilisi consequat ligula vivamus faucibus ac sociis cubilia neque.
                      </Text>
                    </div>
                    <Img src="images/img_rectangle_1489.png" alt="image_two" className="w-full object-cover" />
                    <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] !leading-[35px]">
                      Massa mus mattis natoque ante sapien venenatis nisl, mauris malesuada parturient fringilla
                      dignissim tortor morbi, imperdiet quam faucibus id nunc cum. Suscipit lectus curae cum in taciti
                      ullamcorper accumsan luctus, euismod ornare fames aenean ultrices odio ultricies et mus, gravida
                      condimentum senectus hendrerit lobortis sociis quam. Blandit placerat cras suscipit egestas arcu
                      nam ligula rhoncus, tortor purus proin nulla faucibus odio molestie semper, venenatis urna mollis
                      libero praesent cum nec.
                    </Text>
                    <div className="flex flex-row w-full gap-[19px]">
                      <Img src="images/img_rectangle_1490.png" alt="rectangle" className="w-[49%] object-cover" />
                      <Img src="images/img_rectangle_1491.png" alt="rectangle" className="w-[49%] object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                    <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                      <Heading size="lg" as="h3" className="tracking-[-0.50px] !font-semibold">
                        Tag :
                      </Heading>
                      <div className="flex flex-row justify-start w-[29%] gap-2.5">
                        <Button
                          size="sm"
                          shape="round"
                          className="!text-yellow-100 tracking-[-0.50px] border-blue_gray-900_01 border border-solid min-w-[62px]"
                        >
                          Chair
                        </Button>
                        <Button
                          color="gray_500"
                          size="sm"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] min-w-[65px]"
                        >
                          Lamp
                        </Button>
                        <Button
                          color="gray_500"
                          size="sm"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] min-w-[96px]"
                        >
                          Minimalist
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                      <Heading size="lg" as="h4" className="tracking-[-0.50px]">
                        Leave a Comment
                      </Heading>
                      <div className="flex flex-col items-center justify-start w-full gap-8">
                        <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                          <div className="flex flex-row justify-start w-full gap-4">
                            <div className="flex flex-col items-start justify-start w-1/2 gap-4">
                              <Heading size="s" as="h5" className="tracking-[-0.50px]">
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
                            <div className="flex flex-col items-start justify-start w-1/2 gap-4">
                              <Heading size="s" as="h6" className="tracking-[-0.50px]">
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
                          <div className="flex flex-col items-start justify-start w-full gap-4">
                            <Heading size="s" as="h6" className="tracking-[-0.50px]">
                              Your Comment
                            </Heading>
                            <TextArea
                              name="frame48096017"
                              placeholder="Write your review here...."
                              className="w-full text-gray-500 tracking-[-0.50px]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                          <CheckBox
                            name="savemynameemail"
                            label="Save my name, email, and website in this browser for the next time I comment."
                            className="gap-2.5 tracking-[-0.50px] font-poppins text-left italic"
                          />
                          <Button
                            size="6xl"
                            className="tracking-[-0.50px] font-poppins font-medium border-blue_gray-900_01 border-2 border-solid min-w-[155px]"
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[26%] gap-[49px]">
                  <div className="flex flex-row justify-center w-full">
                    <Input
                      color="gray_50_01"
                      size="md"
                      name="find_something"
                      placeholder="Find Something..."
                      className="w-[68%]"
                    />
                    <Button size="6xl" className="!text-yellow-100 tracking-[-0.50px] font-semibold min-w-[107px]">
                      Search
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-5">
                    <Heading as="h5" className="!text-gray-900">
                      Recent Post
                    </Heading>
                    <div className="flex flex-col w-full gap-5">
                      <BlogDetailCardrecent className="flex flex-row justify-start w-full gap-[15px]" />
                      <BlogDetailCardrecent
                        image="images/img_image_70x70.png"
                        className="flex flex-row justify-start w-full gap-[15px]"
                      />
                      <BlogDetailCardrecent
                        image="images/img_image_14.png"
                        className="flex flex-row justify-start w-full gap-[15px]"
                      />
                      <BlogDetailCardrecent
                        image="images/img_image_15.png"
                        className="flex flex-row justify-start w-full gap-[15px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-6">
                    <Heading as="h5" className="!text-gray-900 !font-josefinsans">
                      Follow Us
                    </Heading>
                    <div className="flex flex-row justify-between w-full pr-[108px]">
                      <Button color="yellow_100" shape="circle" className="w-10">
                        <Img src="images/img_bxl_instagram.svg" />
                      </Button>
                      <Button color="yellow_100" shape="circle" className="w-10">
                        <Img src="images/img_bxl_facebook.svg" />
                      </Button>
                      <Button color="yellow_100" shape="circle" className="w-10">
                        <Img src="images/img_bxl_twitter.svg" />
                      </Button>
                      <Button color="yellow_100" shape="circle" className="w-10">
                        <Img src="images/img_bxl_tiktok.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                    <Heading as="h5" className="!text-gray-900 !font-josefinsans">
                      Our Gallery
                    </Heading>
                    <div className="w-full gap-3.5 grid-cols-3 grid min-h-[auto]">
                      <Img src="images/img_rectangle_21.png" alt="rectangle" className="w-full object-cover" />
                      <Img src="images/img_image_14.png" alt="image_one" className="w-full object-cover" />
                      <Img src="images/img_image_100x100.png" alt="image_one" className="w-full object-cover" />
                      <div className="flex flex-row justify-start w-full gap-3.5">
                        <Img src="images/img_image_16.png" alt="image_one" className="w-[100px] object-cover" />
                        <Img src="images/img_image_17.png" alt="image_three" className="w-[100px] object-cover" />
                      </div>
                      <Img src="images/img_image_15.png" alt="image_one" className="w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                    <Heading as="h5" className="!text-gray-900 !font-josefinsans">
                      Tags
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                      <div className="flex flex-row justify-start w-full gap-2.5">
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
                      <div className="flex flex-row justify-start w-full gap-2.5">
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
                      <div className="flex flex-row justify-start w-full px-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-[1291px]">
              <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
                <Heading size="3xl" as="h2" className="tracking-[-0.50px] text-center !font-semibold">
                  Other blogs
                </Heading>
                <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                  We write various things related to furniture, from tips and what things I need to pay attention to
                  when choosing furniture
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
        <footer className="flex flex-col items-center justify-center w-full">
          <CartSection className="flex flex-row justify-start w-full pl-[46px] gap-11 py-[46px] mx-auto bg-gradient max-w-[1291px]" />
          <DetailReviewSectionfooter className="flex flex-row justify-end w-full mt-[501px] ml-[-1366px] p-12 bg-black-900" />
        </footer>
      </div>
    </>
  );
}
