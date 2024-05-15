"use client";
import React, { useEffect, useState } from "react";
import Product from "@/app/_components/product/productCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Product as ProductType } from "@prisma/client";

type props = {
  products: ProductType[];
};

export default function WideScreenProductCarousel(props: props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const [productsListOne, setProductsListOne] = useState<ProductType[]>([]);
  const [productsListTwo, setProductsListTwo] = useState<ProductType[]>([]);
  const [productsListThree, setProductsListThree] = useState<ProductType[]>([]);
  const [productsListFour, setProductsListFour] = useState<ProductType[]>([]);

  useEffect(() => {
    setProductsListOne(props.products.slice(0, 4));
    setProductsListTwo(props.products.slice(6, 10));
    setProductsListThree(props.products.slice(10, 14));
    setProductsListFour(props.products.slice(20, 24));
  }, [props.products]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const pageNumbers = Array.from({ length: count }, (_, i) => (
    <Button
      variant={i === current - 1 ? "default" : "ghost"}
      key={i}
      className={cn("h-8 w-8 cursor-pointer rounded-full text-sm")}
      onClick={() => api?.scrollTo(i)}
    >
      {i + 1}
    </Button>
  ));

  console.log(props.products);

  return (
    <Carousel
      setApi={setApi}
      className="mx-auto w-[78rem]"
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent className="mx-auto">
        <CarouselItem>
          <div className="flex w-full flex-col justify-start gap-4">
            <div className="flex items-center justify-center gap-4">
              {productsListOne.map((item) => (
                <div key={item.id}>
                  <Product product={item} />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-row justify-start gap-4">
              {productsListTwo.map((item) => (
                <div key={item.id}>
                  <Product product={item} />
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex w-full flex-col justify-start gap-4">
            <div className="flex w-full flex-row justify-start gap-4">
              {productsListThree.map((item) => (
                <div key={item.id}>
                  <Product product={item} />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              {productsListFour.map((item) => (
                <div key={item.id}>
                  <Product product={item} />
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="flex items-center justify-center gap-2 py-4">
        <div className="flex items-center justify-center gap-2 py-2 text-center text-sm text-muted-foreground">
          {pageNumbers}
        </div>
      </div>
    </Carousel>
  );
}
