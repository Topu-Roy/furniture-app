"use client";

import React, { useEffect, useState } from "react";
import { scrollToTop } from "@/lib/utils";
import Product from "@/app/_components/product/productCard";
import { Button } from "@/components/ui/button";
import { Heading } from "@/app/_components/heading";
import { type Product as ProductType } from "@prisma/client";
import { Frown, LoaderCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useShopStore } from "@/zustand/shop/shopStore";

type Props = {
  products: ProductType[];
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RenderProducts(props: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedColor = searchParams.get("color") ?? "All";
  const selectedCategory = searchParams.get("category") ?? "All";
  const selectedTag = searchParams.get("tag") ?? "All";

  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const searchInputText = useShopStore((state) => state.searchInputText);
  const selectedSorting = useShopStore((state) => state.selectedSorting);

  // Filtering Logic
  useEffect(() => {
    let tempFilteredProducts = [...props.products];

    if (selectedCategory !== "All") {
      tempFilteredProducts = tempFilteredProducts.filter(
        (item) => item.category === selectedCategory,
      );
    }

    if (selectedColor !== "All") {
      tempFilteredProducts = tempFilteredProducts.filter(
        (item) => item.color === selectedColor,
      );
    }

    if (selectedTag !== "All") {
      tempFilteredProducts = tempFilteredProducts.filter(
        (item) => item.tag === selectedTag,
      );
    }

    if (selectedSorting === "price") {
      tempFilteredProducts.sort((a, b) => {
        if (a.price === undefined && b.price === undefined) return 0;
        if (a.price === undefined) return 1;
        if (b.price === undefined) return -1;
        return a.price - b.price;
      });
    }

    if (searchInputText !== "") {
      tempFilteredProducts = tempFilteredProducts.filter(
        (item) =>
          item.productTitle
            .toLowerCase()
            .includes(searchInputText.toLowerCase()) ||
          item.category.toLowerCase().includes(searchInputText.toLowerCase()),
      );
    }

    props.setSheetOpen((prev) => (prev === true ? !prev : prev)); //* Close the side panel whenever any filtering is done

    setFilteredProducts(tempFilteredProducts);
    setCurrentPage(1);
  }, [
    searchInputText,
    selectedSorting,
    selectedColor,
    selectedTag,
    selectedCategory,
    props.products,
  ]);

  // Pagination
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const productsToRender = filteredProducts.slice(
    indexOfLastProduct - productsPerPage,
    indexOfLastProduct,
  );

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const PaginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    PaginationButtons.push(
      <Button
        key={i}
        variant={currentPage === i ? "default" : "outline"}
        onClick={() => handlePaginationClick(i)}
      >
        {i}
      </Button>,
    );
  }

  function handleResetAll() {
    router.push("/shop");
  }

  // Render Products and handle empty and loading states
  function Products() {
    if (props.products.length === 0) {
      // loading
      return (
        <div className="col-span-3 flex w-full flex-col items-center justify-center gap-4 pt-14">
          <Heading>Hold Tight, Products are loading...</Heading>
          <LoaderCircle className="animate-spin p-2 text-gray-700" />
        </div>
      );
    }
    if (filteredProducts.length === 0) {
      // No products
      return (
        <div className="col-span-3 flex w-full flex-col items-center justify-center gap-4 pt-14">
          <Frown />
          <Heading>Oops! No products found...</Heading>
          <Button onClick={handleResetAll} variant={"outline"}>
            Reset all filters
          </Button>
        </div>
      );
    }

    return productsToRender.map((item) => (
      <Product key={item.id} product={item} />
    ));
  }

  return (
    <div className="w-full">
      <div className="grid h-full w-full grid-cols-2 justify-center gap-2 md:grid-cols-3 md:gap-3">
        <Products />
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-2 pt-4">
        {PaginationButtons}
      </div>
    </div>
  );
}
