import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 flex h-[5rem] w-full items-center justify-center bg-white">
      <div className="mx-auto flex w-[85rem] flex-row justify-between">
        <Link href="/homePage">
          <Image
            src="images/img_frame_146.svg"
            height={146}
            width={146}
            alt="image"
            className="h-[30px] w-auto"
          />
        </Link>

        <div className="flex items-center justify-center gap-4 font-semibold">
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

        <div className="flex w-auto flex-row justify-between gap-2">
          <Button variant={"ghost"}>
            <Image
              height={50}
              width={50}
              src="images/img_search.svg"
              alt="search_one"
              className="h-6 w-6"
            />
          </Button>

          <Button variant={"ghost"}>
            <Image
              height={50}
              width={50}
              src="images/img_list_black_900.svg"
              alt="list_one"
              className="h-6 w-6"
            />
          </Button>

          <Link href={"/cart"}>
            <Button variant={"ghost"}>
              <Image
                height={50}
                width={50}
                src="images/img_list.svg"
                alt="list_three"
                className="h-6 w-6"
              />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
