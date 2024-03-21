import React from "react";
import ProductHeader from "./productHeader";
import { products } from "./productArray";
import RenderProducts from "./renderProducts";

export default function Products() {
  return (
    <div className="flex w-3/4 flex-col items-center justify-start gap-[49px]">
      <ProductHeader />
      <RenderProducts products={products} />
    </div>
  );
}
