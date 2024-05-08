"use client";
import React, { useState } from "react";
import ProductHeader from "./productHeader";
// import { products } from "../../../assets/productArray";
import RenderProducts from "./renderProducts";
import { productResponseType } from "@/zod/schema";

type Props = {
  products: productResponseType;
};

export default function Products(props: Props) {
  const [sheetOpen, setSheetOpen] = useState(false); //* This state is for the filter sheet to close it if any filtering is done
  return (
    <div className="flex w-full flex-col items-center justify-start gap-8 px-2">
      <ProductHeader sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} />
      <RenderProducts products={props.products} setSheetOpen={setSheetOpen} />
    </div>
  );
}
