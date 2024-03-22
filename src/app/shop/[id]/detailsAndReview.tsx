import React from "react";
import { ProductType } from "@/zustand/shop/shopStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components";
import { productReviews } from "@/assets/productReviewArray";
import Image from "next/image";
import { MdStar } from "react-icons/md";

type props = {
  product: ProductType;
  className?: string;
};

export default function DetailsAndReview({ product, className }: props) {
  return (
    <Tabs defaultValue="Details" className={className}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Details">Details</TabsTrigger>
        <TabsTrigger value="Review">Review</TabsTrigger>
      </TabsList>
      <TabsContent value="Details" className="space-y-4 pb-8 pt-4">
        <div className="flex items-center justify-start gap-4">
          <div className="rounded-xl bg-gray-300 p-1 px-2">
            <Text>{product.category}</Text>
          </div>
          <div className="rounded-xl bg-gray-300 p-1 px-2">
            <Text>{product.color}</Text>
          </div>
          <div className="rounded-xl bg-gray-300 p-1 px-2">
            <Text>{product.status}</Text>
          </div>
          <div className="rounded-xl bg-gray-300 p-1 px-2">
            <Text>{product.tag}</Text>
          </div>
        </div>
        <div className="space-y-2">
          <Text size="md" className="underline">
            Description:
          </Text>
          <Text size="s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem et tenetur id quod, in cupiditate voluptatem iste
            iusto sequi non! Quasi laudantium deserunt ea. Quod nulla sapiente
            fuga expedita possimus corrupti incidunt velit a. Architecto vero
            beatae, totam laboriosam voluptate, aliquam molestiae labore quam
            sint possimus in sit aspernatur numquam sed eaque tempora. Quis,
            alias! Voluptatem, sequi nihil error nemo vel veritatis obcaecati
            reprehenderit, beatae a, molestias exercitationem? Blanditiis,
            excepturi distinctio nemo minima, corporis optio accusamus aperiam
            cum, at aliquid illo? Illo nisi iste dolores, voluptatibus, esse,
            nobis nulla consequatur atque officia explicabo sint. Aliquam nihil
            natus minima voluptatum pariatur est eius reprehenderit quidem vel
            similique hic fuga nemo necessitatibus, non earum sed molestias
            accusamus iure autem. Nisi laborum a tempora laudantium temporibus
            ipsum illo ipsam laboriosam eligendi at necessitatibus nemo
            reiciendis maxime maiores, doloribus esse obcaecati deserunt unde
            aspernatur error numquam consequatur atque. Sapiente tenetur sequi
            exercitationem aliquid. Inventore facilis, corrupti ratione pariatur
            reprehenderit cumque optio nam quibusdam possimus aliquid. Aperiam,
            consectetur. Est fugiat a quos itaque reprehenderit distinctio
            facere dolorum dolor, cumque dolore, consequatur vitae deleniti
            autem maiores minus! Nihil, cupiditate a debitis iusto dolorum sint
            quae reprehenderit aperiam quisquam, numquam libero soluta vitae
            impedit doloremque, adipisci beatae?
          </Text>
        </div>
      </TabsContent>
      <TabsContent value="Review">
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
            <div className="rounded-md border p-2">
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
