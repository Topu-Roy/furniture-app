import React from "react";
import { Category, ProductType } from "@/zustand/shop/shopStore";
import { products } from "@/assets/productArray";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Product from "@/app/_components/product/productCard";
import { Text } from "@/app/_components/text";
import { Heading } from "@/app/_components/heading";

type props = {
  productId: number;
  productCategory: Category;
  className?: string;
};

export default function RelatedProductCarousel({
  productId,
  className,
  productCategory,
}: props) {
  const moreProductsOfSameCategory = products.filter(
    (product) => product.category === productCategory,
  );
  const moreProductsOfSameCategoryWithoutCurrentOne =
    moreProductsOfSameCategory.filter((product) => product.id !== productId);

  function shuffleArray(array: ProductType[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const productsToRender = shuffleArray(
    moreProductsOfSameCategoryWithoutCurrentOne,
  );
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center md:justify-start",
          className,
        )}
      >
        <Heading className="py-6 text-center md:pt-0">Related products</Heading>
        <Carousel className="mx-auto w-[80%] pb-8">
          <CarouselContent>
            {productsToRender.map((item) => (
              <CarouselItem key={`${item.id}-related-products`}>
                <div className="mx-auto max-w-[30rem]">
                  <Product
                    className="w-full"
                    category={item.category}
                    color={item.color}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    productTitle={item.productTitle}
                    tag={item.tag}
                    status={item.status}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
