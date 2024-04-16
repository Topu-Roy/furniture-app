import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import MobileMenu from "./mobileMenu";

export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 flex h-[5rem] w-[100vw] items-center justify-center bg-white px-2">
      <div className="mx-auto flex w-[98vw] max-w-[85rem] flex-row justify-between">
        <div className="relative flex items-center justify-between gap-2">
          <MobileMenu />

          <Link href="/home">
            <Image
              src="images/img_frame_146.svg"
              height={146}
              width={146}
              alt="image"
              className="h-[30px] w-auto"
            />
          </Link>
        </div>

        <div className="hidden items-center justify-center gap-4 font-semibold md:flex">
          <Link href="/home">
            <Button variant={"ghost"}>Home</Button>
          </Link>

          <Link href="/shop">
            <Button variant={"ghost"}>Shop</Button>
          </Link>

          <Link href="/blog">
            <Button variant={"ghost"}>Blog</Button>
          </Link>

          <Link href="/aboutUs">
            <Button variant={"ghost"}>About Us</Button>
          </Link>

          <Link href="/team">
            <Button variant={"ghost"}>Team</Button>
          </Link>
        </div>

        <div className="flex w-auto flex-row justify-between gap-3">
          <Button variant={"ghost"} className="p-1">
            <Image
              height={50}
              width={50}
              src="images/img_search.svg"
              alt="search_one"
              className="h-6 w-6"
            />
          </Button>

          <Link href={"/cart"}>
            <Button variant={"ghost"} className="p-1">
              <Image
                height={50}
                width={50}
                src="images/img_list.svg"
                alt="list_three"
                className="h-6 w-6"
              />
            </Button>
          </Link>

          <Button variant={"ghost"} className="p-1">
            <Image
              height={50}
              width={50}
              src="images/img_list_black_900.svg"
              alt="list_one"
              className="h-6 w-6"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
