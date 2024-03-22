import { products } from "@/assets/productArray";
import React from "react";

export default function ProductDetails({ params }: { params: { id: string } }) {
  // const product = products.filter(item => item. );
  return <div>{params.id}</div>;
}
