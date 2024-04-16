"use client";
import React, { useEffect, useState } from "react";
import Product from "@/components/product/productCard";
import { type ProductType } from "@/zustand/shop/shopStore";
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

type props = {
  products: ProductType[];
};

export default function MobileProductCarousel(props: props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const [productsList, setProductsList] = useState<ProductType[]>([]);

  useEffect(() => {
    setProductsList(props.products.slice(0, 5));
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

  return (
    <Carousel
      className="w-[75dvw]"
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent className="mx-auto w-full gap-2 p-1">
        {productsList.map((item) => (
          <CarouselItem className="flex flex-col items-center justify-center rounded-md bg-white p-2">
            <Product
              key={`${item.id}-home-carousel`}
              category={item.category}
              color={item.color}
              id={item.id}
              image={item.image}
              price={item.price}
              productTitle={item.productTitle}
              tag={item.tag}
              className={item.className}
              status={item.status}
            />
          </CarouselItem>
        ))}
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
