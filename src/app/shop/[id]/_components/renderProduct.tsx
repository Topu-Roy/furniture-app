import React from "react";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import ProductAddToCart from "./productAddToCart";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";
import { type Product } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type props = {
  product: Product;
};

export default function RenderProduct({ product }: props) {
  const user = auth();
  if (!user.userId)
    return (
      <div className="mx-auto mt-[6rem] flex max-w-7xl items-center justify-center">
        <Link href={"/authcallback"}>
          <Button>Sign up</Button>
        </Link>
      </div>
    );

  return (
    <>
      <div className="flex flex-col items-start justify-between gap-4 px-2 sm:flex-row sm:px-3">
        <div className="h-full flex-1 overflow-hidden rounded-lg sm:max-w-md">
          {/* // TODO: Make a default image url */}
          <Image
            src={product.image || ""}
            height={1024}
            width={1024}
            alt={product.productTitle}
            className="mx-auto h-full w-auto rounded-lg"
          />
        </div>
        <div className="flex h-[49dvw] max-h-[28.7rem] flex-1 flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-start space-y-4">
            <Heading>{product.productTitle}</Heading>
            <div className="flex items-center justify-center gap-4 ">
              <div className="flex items-center justify-center gap-2">
                <MdStar size={20} className="text-yellow-500" />
                <MdStar size={20} className="text-yellow-500" />
                <MdStar size={20} className="text-yellow-500" />
                <MdStar size={20} className="text-yellow-500" />
                <MdStar size={20} className="text-gray-600" />
              </div>
              <Text size="s" className="text-black/70">
                Review (102)
              </Text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Text size="lg" className="font-semibold text-black/70">
                Product Type :
              </Text>
              <Text size="xl" className="font-semibold">
                {product.category}
              </Text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Text size="lg" className="font-semibold text-black/70">
                Available Color(s) :
              </Text>
              <Text size="xl" className="font-semibold">
                {product.color}
              </Text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Text size="lg" className="font-semibold text-black/70">
                Theme :
              </Text>
              <Text size="xl" className="font-semibold">
                {product.tag}
              </Text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Text size="lg" className="font-semibold text-black/70">
                Price :
              </Text>
              <Text size="xl" className="font-semibold">
                ${product.price}
              </Text>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 sm:hidden lg:flex">
              <Text size="lg" className="font-semibold text-black/70">
                More Details :
              </Text>
              <Text size="s" className="mb-4 line-clamp-3 pr-6 text-black/70">
                {}
              </Text>
            </div>
          </div>

          <ProductAddToCart authId={user.userId} productId={product.id} />
        </div>
      </div>
      <div className="hidden w-full space-y-2 px-3 sm:block lg:hidden">
        <Text size="lg" className="font-semibold text-black/70">
          More Details :
        </Text>
        <Text className="line-clamp-3 text-black/70">
          {product.description}
        </Text>
      </div>
    </>
  );
}
