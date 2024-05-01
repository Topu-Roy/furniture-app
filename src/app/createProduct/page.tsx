"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { UploadButton } from "@/lib/uploadthing";
import { carateProductPostBodyType } from "@/zod/schema";
import React, { useState } from "react";

export default function CreateProduct() {
  const [productID, setProductID] = useState<string | undefined>();

  async function handleClick() {
    const productDetails: carateProductPostBodyType = {
      productTitle: "",
      category: "Bed",
      color: "Black",
      price: 999,
      tag: "Ambient",
    };

    const res = await fetch("http://localhost:3000/create-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productDetails),
    });

    const productId: unknown = res.json();

    if (productId) {
      setProductID(productId as string);
    }
  }

  return (
    <div className="mt-[5rem] bg-slate-600 py-24">
      {productID === undefined ? (
        <Button onClick={() => handleClick()}>Create Product</Button>
      ) : (
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={async (res) => {
            console.log(res);

            try {
              await db.product.update({
                where: {
                  id: productID,
                },
                data: {
                  image: res[0].url,
                },
              });
            } catch (error) {
              console.log(error);
            }
          }}
        />
      )}
    </div>
  );
}
