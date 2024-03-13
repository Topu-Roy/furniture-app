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
      <div className="flex mt-[5rem] py-8 flex-col items-center justify-start w-full gap-[100px] bg-stone-100">

        <div className="flex flex-col items-center justify-start w-full">
          <div className="relative flex flex-row justify-start items-start w-full gap-5 max-w-[1290px]">

            <div className="sticky top-[5rem] pt-4 flex flex-col items-center justify-start w-[24%] gap-[60px]">
              <ColorSelector />
              <FilterByPrice />
              <Catagories />
              <ProductTag />
            </div>

            <Products />
          </div>
        </div>
      </div >
      <Footer className="pt-10" />
    </>
  );
}
