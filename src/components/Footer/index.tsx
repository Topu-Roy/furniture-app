import React from "react";
import { Text, Heading } from "./..";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <footer className={cn(`${className} pt-14`)}>
      <div className="bg-gradient mx-auto flex max-w-7xl items-center justify-center rounded bg-gray-50 pt-10">
        <div className="flex w-full flex-1 flex-col items-center justify-center space-y-4 px-10">
          <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <Heading className="!text-gray-50_01 leading-[60px] tracking-[-0.50px]">
              Subscribe now and get 10% off all items
            </Heading>
            <Text
              size="md"
              className="!text-gray-50_01 !leading-[35px] tracking-[-0.50px]"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text.
            </Text>
          </div>
          <div className="flex w-full gap-2">
            <input
              name="email"
              placeholder="Your email here.."
              className="w-[74%] rounded bg-white px-2"
            />
            <Button
              size="6xl"
              className="min-w-[157px] flex-1 rounded font-bold tracking-[-0.50px]"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            height={1000}
            width={1000}
            src="/images/img_pexels_photo_by.png"
            alt="pexelsphotoby"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-14 w-full bg-black py-10">
        <div className="mx-auto flex w-[80rem] flex-row gap-4">
          <div className="w-1/2">
            <Link href={"/home"}>
              <Heading className={cn("text-gray-50_01 tracking-[-0.50px]")}>
                Furnit.
              </Heading>
            </Link>
            <Text
              size="md"
              className={cn(
                "!text-gray-50_a3 opacity-0.81 pr-4 !leading-[35px] tracking-[-0.50px]",
              )}
            >
              Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
              facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
              facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
            </Text>
            <div className="flex items-center justify-start gap-4 pt-16">
              <Button color="yellow_100" className="h-10 w-10 rounded-full p-2">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src="images/img_bxl_instagram.svg"
                />
              </Button>
              <Button color="yellow_100" className="h-10 w-10 rounded-full p-2">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src="images/img_bxl_facebook.svg"
                />
              </Button>
              <Button color="yellow_100" className="h-10 w-10 rounded-full p-2">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src="images/img_bxl_twitter.svg"
                />
              </Button>
              <Button color="yellow_100" className="h-10 w-10 rounded-full p-2">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src="images/img_bxl_tiktok.svg"
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-row pt-16">
            <div className="flex-1">
              <Heading className={cn("pb-4 text-white/70")}>Customer</Heading>
              <div className="space-y-3">
                <Text
                  size="md"
                  className={cn(
                    "opacity-0.81 tracking-[-0.50px] text-white/60",
                  )}
                >
                  <Link href={"/"}>Order Status</Link>
                </Text>
                <Text
                  size="md"
                  className={cn(
                    "opacity-0.81 tracking-[-0.50px] text-white/60",
                  )}
                >
                  <Link href={"/"}>Collections</Link>
                </Text>
                <Text
                  size="md"
                  className={cn(
                    "opacity-0.81 tracking-[-0.50px] text-white/60",
                  )}
                >
                  <Link href={"/"}>Our Story</Link>
                </Text>
                <Text
                  size="md"
                  className={cn(
                    "opacity-0.81 tracking-[-0.50px] text-white/60",
                  )}
                >
                  <Link href={"/"}>Affiliates</Link>
                </Text>
                <Text
                  size="md"
                  className={cn(
                    "opacity-0.81 tracking-[-0.50px] text-white/60",
                  )}
                >
                  <Link href={"/"}>Security</Link>
                </Text>
              </div>
            </div>
            <div className="flex-1">
              <Heading className={cn("pb-4 text-white/70")}>
                Information
              </Heading>
              <div className="space-y-3">
                <Text
                  size="md"
                  className={cn(
                    "opacity-0.81 tracking-[-0.50px] text-white/60",
                  )}
                >
                  <Link href={"/"}>Customer Service</Link>
                </Text>

                <Text
                  size="md"
                  className={cn(
                    "opacity-0.81 tracking-[-0.50px] text-white/60",
                  )}
                >
                  <Link href={"/"}>Careers</Link>
                </Text>

                <Text
                  size="md"
                  className={cn(
                    "opacity-0.81 tracking-[-0.50px] text-white/60",
                  )}
                >
                  <Link href={"/"}>FAQ</Link>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-center border-t border-white/40 bg-black py-4">
        <div className="flex w-auto flex-row justify-between gap-3 pr-[3px]">
          <Text
            size="md"
            className={cn("opacity-0.81 tracking-[-0.50px] text-white/65")}
          >
            © Copyright 2022. All Rights Reserved
          </Text>
          <Text
            size="md"
            className={cn(
              "opacity-0.81 mb-px tracking-[-0.50px] text-white/65",
            )}
          >
            |
          </Text>
          <Text
            size="md"
            className={cn(
              "opacity-0.81 mb-px tracking-[-0.50px] text-white/65",
            )}
          >
            <Link href={"/"}>Terms of condition</Link>
          </Text>
          <Text
            size="md"
            className={cn(
              "opacity-0.81 mb-px tracking-[-0.50px] text-white/65",
            )}
          >
            |
          </Text>
          <Text
            size="md"
            className={cn(
              "opacity-0.81 mb-px tracking-[-0.50px] text-white/65",
            )}
          >
            <Link href={"/"}>Privacy Policy</Link>
          </Text>
        </div>
      </div>
    </footer>
  );
}
