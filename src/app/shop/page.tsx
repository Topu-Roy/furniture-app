import React from "react";
import {
  ColorSelector,
  Catagories,
  FilterByPrice,
  ProductTag,
  Products,
} from "./components";

export default function ShopPage() {
  return (
    <>
      <div className="mt-[5rem] flex w-full flex-col items-center justify-start gap-[100px] bg-stone-100 pb-14 pt-8">
        <div className="flex w-full flex-col items-center justify-start">
          <div className="relative flex w-full max-w-[1290px] flex-row items-start justify-start gap-5">
            <div className="sticky top-[5rem] flex w-[24%] flex-col items-center justify-start gap-[60px] pt-4">
              <ColorSelector />
              <FilterByPrice />
              <Catagories />
              <ProductTag />
            </div>

            <Products />
          </div>
        </div>
      </div>
    </>
  );
}
