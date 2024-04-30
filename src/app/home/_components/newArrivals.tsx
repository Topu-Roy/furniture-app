import React from "react";
import Link from "next/link";
import { type ProductType } from "@/zustand/shop/shopStore";
import Product from "@/app/_components/product/productCard";
import { Button } from "@/components/ui/button";
import { Heading } from "@/app/_components/heading";

type props = {
  products: ProductType[];
};

export default function NewArrivals(props: props) {
  const AllNewProducts = props.products.filter((item) => item.status === "new");
  const newProductsMobile = AllNewProducts.slice(0, 4);
  const newProductsTablet = AllNewProducts.slice(0, 6);
  const newProductsDesktop = AllNewProducts.slice(0, 8);

  return (
    <div className="flex w-full items-center justify-center bg-white py-10 lg:py-16">
      <div className="flex max-w-7xl flex-row justify-center">
        <div className="flex w-full flex-col items-center justify-start gap-[67px]">
          <Heading className="!text-blue_gray-900_01 text-center tracking-[-0.50px]">
            New Arrival
          </Heading>

          <div className="relative flex w-full flex-col gap-7">
            <Link
              href={`/shop`}
              className="absolute -top-14 right-4 z-40 md:right-0"
            >
              <Button variant={"ghost"}>View All</Button>
            </Link>
            <div className="flex w-full flex-row flex-wrap justify-center gap-4 md:hidden">
              {newProductsMobile.map((item) => (
                <Product
                  id={item.id}
                  category={item.category}
                  color={item.color}
                  image={item.image}
                  price={item.price}
                  productTitle={item.productTitle}
                  tag={item.tag}
                  className={"max-w-[45%]"}
                  key={item.productTitle + item.tag}
                  status={item.status}
                />
              ))}
            </div>
            <div className="hidden w-full flex-row flex-wrap justify-center gap-4 md:flex lg:hidden">
              {newProductsTablet.map((item) => (
                <Product
                  id={item.id}
                  category={item.category}
                  color={item.color}
                  image={item.image}
                  price={item.price}
                  productTitle={item.productTitle}
                  tag={item.tag}
                  className={"max-w-[31%]"}
                  key={item.productTitle + item.tag}
                  status={item.status}
                />
              ))}
            </div>
            <div className="hidden w-full flex-row flex-wrap justify-center gap-4 lg:flex">
              {newProductsDesktop.map((item) => (
                <Product
                  id={item.id}
                  category={item.category}
                  color={item.color}
                  image={item.image}
                  price={item.price}
                  productTitle={item.productTitle}
                  tag={item.tag}
                  className={"max-w-[23%]"}
                  key={item.productTitle + item.tag}
                  status={item.status}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
