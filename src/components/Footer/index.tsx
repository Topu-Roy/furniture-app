import React from "react";
import { Text, Heading } from "./..";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex justify-center items-center mx-auto w-[80rem] bg-gradient pt-10 rounded">
        <div className="flex flex-1 flex-col justify-center items-center w-full px-10 space-y-4">
          <div className="flex flex-col items-center justify-start w-full gap-2.5">
            <Heading size="3xl" className="!text-gray-50_01 tracking-[-0.50px] leading-[60px]">
              Subscribe now and get 10% off all items
            </Heading>
            <Text size="md" className="!text-gray-50_01 tracking-[-0.50px] !leading-[35px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text.
            </Text>
          </div>
          <div className="flex w-full gap-2">
            <input name="email" placeholder="Your email here.." className="w-[74%] rounded px-2" />
            <Button size="6xl" className="flex-1 !text-yellow-100 tracking-[-0.50px] font-bold min-w-[157px] rounded">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Image height={1000} width={1000} src="/images/img_pexels_photo_by.png" alt="pexelsphotoby" className="object-cover" />
        </div>
      </div>

      <div className="bg-black w-full py-10 mt-20">
        <div className="w-[80rem] mx-auto flex flex-row gap-4">
          <div className="w-1/2">
            <Heading size="3xl" className={cn("text-gray-50_01 tracking-[-0.50px]")}>
              Furnit.
            </Heading>
            <Text size="md" className={cn("text-gray-50_a3 tracking-[-0.50px] opacity-0.81 !leading-[35px] pr-4")}>
              Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel
              alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
            </Text>
            <div className="flex justify-start items-center gap-4 pt-16">
              <Button color="yellow_100" className="w-10 h-10 rounded-full p-2 bg-white">
                <Image width={50} height={50} alt="" src="images/img_bxl_instagram.svg" />
              </Button>
              <Button color="yellow_100" className="w-10 h-10 rounded-full p-2 bg-white">
                <Image width={50} height={50} alt="" src="images/img_bxl_facebook.svg" />
              </Button>
              <Button color="yellow_100" className="w-10 h-10 rounded-full p-2 bg-white">
                <Image width={50} height={50} alt="" src="images/img_bxl_twitter.svg" />
              </Button>
              <Button color="yellow_100" className="w-10 h-10 rounded-full p-2 bg-white">
                <Image width={50} height={50} alt="" src="images/img_bxl_tiktok.svg" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex flex-row pt-16">
            <div className="flex-1">
              <Heading size="lg" className={cn("text-white/70 pb-4")}>
                Customer
              </Heading>
              <div className="space-y-3">
                <Text size="md" className={cn("text-white/60 tracking-[-0.50px] opacity-0.81")}>
                  <Link href={'/'}>
                    Order Status
                  </Link>
                </Text>
                <Text size="md" className={cn("text-white/60 tracking-[-0.50px] opacity-0.81")}>
                  <Link href={'/'}>
                    Collections
                  </Link>
                </Text>
                <Text size="md" className={cn("text-white/60 tracking-[-0.50px] opacity-0.81")}>
                  <Link href={'/'}>
                    Our Story
                  </Link>
                </Text>
                <Text size="md" className={cn("text-white/60 tracking-[-0.50px] opacity-0.81")}>
                  <Link href={'/'}>
                    Affiliates
                  </Link>
                </Text>
                <Text size="md" className={cn("text-white/60 tracking-[-0.50px] opacity-0.81")}>
                  <Link href={'/'}>
                    Security
                  </Link>
                </Text>
              </div>
            </div>
            <div className="flex-1">
              <Heading size="lg" className={cn("text-white/70 pb-4")}>
                Information
              </Heading>
              <div className="space-y-3">
                <Text size="md" className={cn("text-white/60 tracking-[-0.50px] opacity-0.81")}>
                  <Link href={'/'}>
                    Customer Service
                  </Link>
                </Text>

                <Text size="md" className={cn("text-white/60 tracking-[-0.50px] opacity-0.81")}>
                  <Link href={'/'}>
                    Careers
                  </Link>
                </Text>

                <Text size="md" className={cn("text-white/60 tracking-[-0.50px] opacity-0.81")}>
                  <Link href={'/'}>
                    FAQ
                  </Link>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full bg-black py-4 border-t border-white/40">
        <div className="flex flex-row justify-between w-auto pr-[3px] gap-3">
          <Text size="md" className={cn("text-white/65 tracking-[-0.50px] opacity-0.81")}>
            © Copyright 2022. All Rights Reserved
          </Text>
          <Text size="md" className={cn("text-white/65 mb-px tracking-[-0.50px] opacity-0.81")}>
            |
          </Text>
          <Text size="md" className={cn("text-white/65 mb-px tracking-[-0.50px] opacity-0.81")}>
            <Link href={'/'}>
              Terms of condition
            </Link>
          </Text>
          <Text size="md" className={cn("text-white/65 mb-px tracking-[-0.50px] opacity-0.81")}>
            |
          </Text>
          <Text size="md" className={cn("text-white/65 mb-px tracking-[-0.50px] opacity-0.81")}>
            <Link href={'/'}>
              Privacy Policy
            </Link>
          </Text>
        </div>
      </div>
    </footer >
  );
}