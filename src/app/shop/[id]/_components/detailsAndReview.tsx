import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productReviews } from "@/assets/productReviewArray";
import { MdStar } from "react-icons/md";
import { Text } from "@/app/_components/text";
import { type Product } from "@prisma/client";

type props = {
  product: Product;
  className?: string;
};

export default function DetailsAndReview({ product, className }: props) {
  return (
    <Tabs defaultValue="Details" className={className}>
      <TabsList className="grid w-full grid-cols-2 bg-black/10">
        <TabsTrigger value="Details">Details</TabsTrigger>
        <TabsTrigger value="Reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="Details" className="space-y-4 pb-8 pt-4">
        <div className="flex items-center justify-start gap-4">
          <div className="rounded-xl bg-black/[0.15] p-1 px-2 ">
            <Text className="text-black/[0.8]">{product.category}</Text>
          </div>
          <div className="rounded-xl bg-black/[0.15] p-1 px-2 ">
            <Text className="text-black/[0.8]">{product.color}</Text>
          </div>
          <div className="rounded-xl bg-black/[0.15] p-1 px-2 ">
            <Text className="text-black/[0.8]">{product.status}</Text>
          </div>
          <div className="rounded-xl bg-black/[0.15] p-1 px-2 ">
            <Text className="text-black/[0.8]">{product.tag}</Text>
          </div>
        </div>
        <div className="space-y-2">
          <Text size="md" className="underline">
            Description:
          </Text>
          <Text size="s">{product.description}</Text>
        </div>
      </TabsContent>
      <TabsContent value="Reviews">
        <div className="space-y-2 py-4">
          <div className="">
            <div className="flex items-center justify-center gap-4 pb-4">
              <div className="flex items-center justify-center gap-2">
                <MdStar size={20} className="text-yellow-500" />
                <MdStar size={20} className="text-yellow-500" />
                <MdStar size={20} className="text-yellow-500" />
                <MdStar size={20} className="text-yellow-500" />
                <MdStar size={20} className="text-gray-600" />
              </div>
              <Text size="s" className="text-slate-600">
                Review (5)
              </Text>
            </div>
          </div>

          {productReviews.map((item) => (
            <div
              key={`${item.id}-product-review`}
              className="rounded-xl bg-zinc-200/80 p-2 shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  <Image
                    src={item.imageURL}
                    width={50}
                    height={50}
                    alt={item.name}
                  />
                  <div className="flex flex-col items-start justify-center gap-1">
                    <Text size="md" className="font-semibold text-black/90">
                      {item.name}
                    </Text>
                    <Text size="xs">{item.date}</Text>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MdStar size={20} className="text-yellow-500" />
                  <MdStar size={20} className="text-yellow-500" />
                  <MdStar size={20} className="text-yellow-500" />
                  <MdStar size={20} className="text-yellow-500" />
                  <MdStar size={20} className="text-gray-600" />
                  <Text size="s" className="text-slate-600">
                    (4/5)
                  </Text>
                </div>
              </div>
              <div className="py-2 pl-14">
                <Text size="s">{item.text}</Text>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
