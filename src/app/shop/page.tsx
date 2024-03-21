import React from "react";
import Footer from "../../components/Footer";
import NavBar from "@/components/NavBar";
import ColorSelector from "./colorSelector";
import FilterByPrice from "./filterByPrice";
import Catagories from "./catagories";
import ProductTag from "./productTag";
import Products from "./products";

export default function ShopPage() {
  return (
    <>
      <NavBar />
      <div className="mt-[5rem] flex w-full flex-col items-center justify-start gap-[100px] bg-stone-100 py-8">
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
      <Footer className="pt-10" />
    </>
  );
}
