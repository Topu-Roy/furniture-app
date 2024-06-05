"use client";

import React, { useCallback, useEffect, useState } from "react";
import { cn, scrollToTop } from "@/lib/utils";
import HeadingAndReset from "./headingAndReset";
import { Button } from "@/components/ui/button";
import { Text } from "@/app/_components/text";
import { type Product, type Category } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ProductCatagoriesType = {
  productName: Category | "All";
  quantity: number;
}[];

export default function Catagories({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All",
  );

  useEffect(() => {
    const category: Category | "All" =
      selectedCategoryParam === "Chair" ||
      selectedCategoryParam === "Table" ||
      selectedCategoryParam === "Lamp" ||
      selectedCategoryParam === "Drawer" ||
      selectedCategoryParam === "Bed" ||
      selectedCategoryParam === "Bookshelf" ||
      selectedCategoryParam === "Sofa"
        ? (selectedCategoryParam as Category)
        : "All";
        
    setSelectedCategory(category);
  }, [selectedCategoryParam]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const [productCategories, setProductCategories] =
    useState<ProductCatagoriesType>([]);

  useEffect(() => {
    const categories: ProductCatagoriesType = [
      {
        productName: "All",
        quantity: products.length,
      },
      {
        productName: "Chair",
        quantity: products.filter((item) => item.category === "Chair").length,
      },
      {
        productName: "Table",
        quantity: products.filter((item) => item.category === "Table").length,
      },
      {
        productName: "Lamp",
        quantity: products.filter((item) => item.category === "Lamp").length,
      },
      {
        productName: "Drawer",
        quantity: products.filter((item) => item.category === "Drawer").length,
      },
      {
        productName: "Bed",
        quantity: products.filter((item) => item.category === "Bed").length,
      },
      {
        productName: "Bookshelf",
        quantity: products.filter((item) => item.category === "Bookshelf")
          .length,
      },
      {
        productName: "Sofa",
        quantity: products.filter((item) => item.category === "Sofa").length,
      },
    ];

    setProductCategories(categories);
  }, [products]);

  function handleCategory(category: Category | "All") {
    setSelectedCategory(category);

    scrollToTop();
  }

  function handleReset() {
    setSelectedCategory("All");

    scrollToTop();
  }

  useEffect(() => {
    router.push(
      pathname + "?" + createQueryString("category", selectedCategory),
    );
  }, [selectedCategory]);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <HeadingAndReset handleReset={handleReset} title={"Product Categories"} />
      <div className="flex w-full flex-row flex-wrap items-start gap-2">
        {productCategories.map((category) => (
          <Button
            key={category.productName}
            asChild
            onClick={() => handleCategory(category.productName)}
            variant={"link"}
            className={cn(
              "min-w-[3rem] cursor-pointer rounded-full bg-slate-200/90 px-3 py-1 tracking-[-0.50px]",
              {
                "ring-[2px] ring-black/20":
                  selectedCategory === category.productName,
              },
            )}
          >
            <Text
              size="s"
              className={cn("tracking-[-0.50px] !text-gray-700/90", {
                "!text-black": selectedCategory === category.productName,
              })}
            >
              {category.productName} ({category.quantity})
            </Text>
          </Button>
        ))}
      </div>
    </div>
  );
}
