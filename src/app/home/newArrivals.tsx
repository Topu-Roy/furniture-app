import React from "react";
import { Heading } from "@/components";
import { type ProductType } from "@/zustand/shop/shopStore";
import Product from "@/components/product/productCard";

type props = {
  products: ProductType[];
};

export default function NewArrivals(props: props) {
  const newProducts = props.products.filter((item) => item.status === "new");
  const newProductsOne = newProducts.slice(0, 4);
  const newProductsTwo = newProducts.slice(5, 9);

  return (
    <div className="flex w-full items-center justify-center py-20">
      <div className="flex w-[80rem] flex-row justify-center">
        <div className="flex w-full max-w-[1290px] flex-col items-center justify-start gap-[67px]">
          <Heading
            size="2xl"
            className="text-center tracking-[-0.50px] !text-blue_gray-900_01"
          >
            New Arrival
          </Heading>
          <div className="flex w-full flex-col gap-[47px]">
            <div className="flex w-full flex-row justify-start gap-[19px]">
              {newProductsOne.map((item) => (
                <Product
                  id={item.id}
                  category={item.category}
                  color={item.color}
                  image={item.image}
                  price={item.price}
                  productTitle={item.productTitle}
                  tag={item.tag}
                  className={item.className}
                  key={item.productTitle + item.tag}
                  status={item.status}
                />
              ))}
            </div>
            <div className="flex w-full flex-row gap-[19px]">
              {newProductsTwo.map((item) => (
                <Product
                  id={item.id}
                  category={item.category}
                  color={item.color}
                  image={item.image}
                  price={item.price}
                  productTitle={item.productTitle}
                  tag={item.tag}
                  className={item.className}
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
