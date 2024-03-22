import React from "react";
import { products } from "@/assets/productArray";
import { ProductType } from "@/zustand/shop/shopStore";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const productID = parseInt(params.id);
  const product: ProductType | undefined = products.find(
    (item) => item.id === productID,
  );

  return (
    <>
      <div className="mx-auto mt-[5rem] max-w-7xl">
        {product ? (
          <div className="">{product.productTitle}</div>
        ) : (
          <div className="">
            <p>Product Not Found</p>
          </div>
        )}
      </div>
    </>
  );
}
