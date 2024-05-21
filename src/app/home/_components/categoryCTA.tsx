import React from "react";
import { products } from "@/assets/productArray";
import ThreeDCard from "@/components/aceternity/3d/threeDCard";
import { Heading } from "@/app/_components/heading";

export default function CategoryCTA() {
  const chair = products.filter((item) => item.category === "Chair")[2];
  const lamp = products.filter((item) => item.category === "Lamp")[4];
  return (
    <div className="mx-auto w-full max-w-7xl py-10 lg:py-16">
      <Heading className={"px-8 text-center"}>
        Find a variety of <br className="hidden md:block lg:hidden" /> home
        furniture&apos;s
      </Heading>
      <div className="flex w-full flex-col items-center justify-center gap-2 px-3 py-8 sm:px-0 md:flex-row lg:gap-4">
        <ThreeDCard
          heading="Try new our chairs"
          subHeading="Brand new collection of chairs and modern design."
          imageURL={chair?.image || ""}
          imageAlt={chair?.productTitle || ""}
          link="/shop"
          linkName="Shop Now"
        />
        <ThreeDCard
          heading="Check out our new Lamps"
          subHeading="Brand new collection of Lamps with minimal design."
          imageURL={lamp?.image || ""}
          imageAlt={lamp?.productTitle || ""}
          link="/shop"
          linkName="Shop Now"
        />
      </div>
    </div>
  );
}
