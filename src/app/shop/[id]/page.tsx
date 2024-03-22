import React from "react";
import { products } from "@/assets/productArray";
import { ProductType } from "@/zustand/shop/shopStore";
import RenderProduct from "./renderProduct";
import DetailsAndReview from "./detailsAndReview";
import RelatedProductCarousel from "./relatedProductCarousel";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const productID = parseInt(params.id);
  const product: ProductType | undefined = products.find(
    (item) => item.id === productID,
  );

  return (
    <>
      <div className="mx-auto mt-[5rem] max-w-7xl">
        {product ? (
          <>
            <RenderProduct product={product} />
            <div className="flex max-w-7xl items-start justify-start">
              <DetailsAndReview product={product} className="w-[50%] flex-1" />
              <RelatedProductCarousel className="w-[50%] flex-1" />
            </div>
          </>
        ) : (
          <div className="">
            <p>Product Not Found</p>
          </div>
        )}
      </div>
    </>
  );
}
