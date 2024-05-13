import React from "react";
import Product from "@/app/_components/product/productCard";
import { Heading } from "@/app/_components/heading";
import { Category, type Product as ProductType } from "@prisma/client";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  productId: string;
  productCategory: Category;
  className?: string;
};

export default async function RelatedProductCarousel(props: Props) {
  const { productId, className, productCategory } = props;
  // * Get all products
  // TODO: Fix url
  const res = await fetch("http://localhost:3000/api/product/getAllProducts");
  if (!res.ok) {
    return <p className="mt-[5rem]">Opps...! Something went wrong. (R)</p>;
  }
  const products: ProductType[] = await res.json();

  // * Get all products of the same category as the current product
  const moreProductsOfSameCategory = products.filter(
    (product) => product.category === productCategory,
  );
  const moreProductsOfSameCategoryWithoutCurrentOne =
    moreProductsOfSameCategory.filter((product) => product.id !== productId);

  // * Making products array random by shuffling
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
                  <Product className="w-full" product={item} />
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
