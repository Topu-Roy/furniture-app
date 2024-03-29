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
import Product from "@/components/product/productCard";
import { Text } from "@/components";

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
          `${className} flex w-[50%] flex-col items-center justify-center`,
        )}
      >
        <Text
          size="xl"
          className="flex w-full items-start justify-start pb-4 pl-[4.7rem] font-semibold text-gray-900/80"
        >
          Related products
        </Text>
        <Carousel className="mx-auto w-[80%] pb-8">
          <CarouselContent>
            {productsToRender.map((item) => (
              <CarouselItem>
                <div key={item.id} className="mx-auto max-w-[30rem]">
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
