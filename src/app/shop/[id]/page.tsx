import React from "react";
import RenderProduct from "./_components/renderProduct";
import DetailsAndReview from "./_components/detailsAndReview";
import RelatedProductCarousel from "./_components/relatedProductCarousel";
import { Heading } from "@/app/_components/heading";
import { singleProductResponseSchema } from "@/zod/schema";
import { Text } from "@/app/_components/text";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const productID = params.id;

  const res = await fetch(
    `http://localhost:3000/api/product/getProductById?id=${productID}`,
  );

  if (!res.ok) {
    return (
      <Text className="mx-auto mt-[6rem] w-full max-w-7xl text-center">
        Product Not Found
      </Text>
    );
  }

  const productJson: unknown = await res.json();
  const product = singleProductResponseSchema.safeParse(productJson);

  if (!product.success) {
    console.log(product.error);
    return (
      <Text className="mx-auto mt-[6rem] w-full max-w-7xl text-center">
        Product Not Found
      </Text>
    );
  }

  return (
    <div className="w-full bg-stone-200 sm:pb-8">
      <div className="mx-auto mt-[5rem] max-w-7xl space-y-4 py-4 md:space-y-8 md:py-6">
        {product ? (
          <>
            <RenderProduct product={product.data} />
            <div className="flex max-w-7xl flex-col items-start justify-start px-2 md:flex-row">
              <DetailsAndReview
                product={product.data}
                className="w-full rounded-xl bg-white p-2 md:w-[50%]"
              />
              <RelatedProductCarousel
                productId={product.data.id}
                productCategory={product.data.category}
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
