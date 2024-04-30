"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { UploadButton } from "@/lib/uploadthing";
import React, { useState } from "react";

export default function CreateProduct() {
  const [productID, setProductID] = useState<string | undefined>();
  const product = {
    productTitle: "Adjustable Office Chair",
    price: 159,
    category: "Chair",
    tag: "Modern",
    color: "black",
  };

  async function handleClick() {
    const res = await fetch("/create-product");
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
