"use client";
import React, { useState } from "react";
import ProductHeader from "./productHeader";
import { products } from "../../../assets/productArray";
import RenderProducts from "./renderProducts";

export default function Products() {
  const [sheetOpen, setSheetOpen] = useState(false); //* This state is for the filter sheet to close it if any filtering is done
  return (
    <div className="flex w-full flex-col items-center justify-start gap-8 px-2">
      <ProductHeader sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} />
      <RenderProducts products={products} setSheetOpen={setSheetOpen} />
    </div>
  );
}
