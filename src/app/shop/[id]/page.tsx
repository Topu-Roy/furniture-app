import React from "react";
import { products } from "@/assets/productArray";
import { ProductType } from "@/zustand/shop/shopStore";
import RenderProduct from "./_components/renderProduct";
import DetailsAndReview from "./_components/detailsAndReview";
import RelatedProductCarousel from "./_components/relatedProductCarousel";
import { Heading } from "@/app/_components/heading";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const productID = parseInt(params.id);
  const product: ProductType | undefined = products.find(
    (item) => item.id === productID,
  );

  return (
    <div className="w-full bg-stone-200 sm:pb-8">
      <div className="mx-auto mt-[5rem] max-w-7xl space-y-4 py-4 md:space-y-8 md:py-6">
        {product ? (
          <>
            <RenderProduct product={product} />
            <div className="flex max-w-7xl flex-col items-start justify-start px-2 md:flex-row">
              <DetailsAndReview
                product={product}
                className="w-full rounded-xl bg-white p-2 md:w-[50%]"
              />
              <RelatedProductCarousel
                productId={product.id}
                productCategory={product.category}
                className="mx-auto w-[90%] md:w-[47.5%]"
              />
            </div>
          </>
        ) : (
          <div className="mx-auto flex max-w-7xl items-center justify-center py-10 md:py-14 lg:py-16">
            <Heading>Product Not Found</Heading>
          </div>
        )}
      </div>
    </div>
  );
}
