import React from "react";
import { products } from "@/assets/productArray";
import ThreeDCard from "@/components/3d/ThreeDCard";
import { Heading, Text } from "@/components";
import { cn } from "@/lib/utils";

export default function CategoryCTA() {
  const chair = products.filter((item) => item.category === "Chair")[2];
  const lamp = products.filter((item) => item.category === "Lamp")[4];
  return (
    <div className="mx-auto w-full max-w-7xl py-14">
      <Heading size="3xl" className={cn("text-center text-gray-900")}>
        Find a variety of home furniture's
      </Heading>
      <div className="flex w-full items-center justify-center gap-8">
        <ThreeDCard
          heading="Try new our chairs"
          subHeading="Brand new collection of chairs and modern design."
          imageURL={chair.image}
          imageAlt={chair.productTitle}
          link="/shop"
          linkName="Shop Now"
        />
        <ThreeDCard
          heading="Check out our new Lamps"
          subHeading="Brand new collection of Lamps with minimal design."
          imageURL={lamp.image}
          imageAlt={lamp.productTitle}
          link="/shop"
          linkName="Shop Now"
        />
      </div>
    </div>
  );
}
