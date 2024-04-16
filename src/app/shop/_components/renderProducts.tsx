import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { scrollToTop } from "@/lib/utils";
import { type ProductType, useShopStore } from "@/zustand/shop/shopStore";
import Product from "@/app/_components/product/productCard";
import { Button } from "@/components/ui/button";
import { VscLoading } from "react-icons/vsc";
import { MdRunningWithErrors } from "react-icons/md";
import { Heading } from "@/app/_components/heading";

type Props = {
  products: ProductType[];
  setSheetOpen: Dispatch<SetStateAction<boolean>>;
};

export default function RenderProducts(props: Props) {
  // Zustand
  const {
    setProductsBackup,
    selectedCategory,
    selectedColor,
    selectedTag,
    selectedMinPrice,
    selectedMaxPrice,
    selectedSliderPrice,
    selectedSorting,
    searchInputText,
  } = useShopStore();

  // Local state
  const [filteredProducts, setFilteredProducts] = useState(props.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Filtering Logic
  useEffect(() => {
    let tempFilteredProducts = [...props.products];

    if (selectedCategory !== "All")
      tempFilteredProducts = tempFilteredProducts.filter(
        (item) => item.category === selectedCategory,
      );
    if (selectedColor !== undefined)
      tempFilteredProducts = tempFilteredProducts.filter(
        (item) => item.color === selectedColor,
      );
    if (selectedTag !== "All")
      tempFilteredProducts = tempFilteredProducts.filter(
        (item) => item.tag === selectedTag,
      );

    if (selectedMinPrice !== 0 && selectedMaxPrice !== 2000) {
      tempFilteredProducts = tempFilteredProducts.filter((item) => {
        if (item.price !== undefined) {
          return (
            item.price <= selectedMinPrice && item.price <= selectedMaxPrice
          );
        } else {
          return true;
        }
      });
    }

    if (selectedSliderPrice !== 2000) {
      tempFilteredProducts = tempFilteredProducts.filter((item) => {
        if (item.price !== undefined) {
          return item.price <= selectedSliderPrice;
        } else {
          return true;
        }
      });
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
    selectedCategory,
    selectedColor,
    selectedTag,
    selectedMinPrice,
    selectedMinPrice,
    selectedSliderPrice,
    selectedSorting,
    searchInputText,
  ]);

  useEffect(() => {
    setProductsBackup(props.products);
  }, [props.products]);

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

  // Render Products and handle empty and loading states
  function Products() {
    if (props.products.length === 0) {
      // loading
      return (
        <div className="col-span-3 flex w-full flex-col items-center justify-center gap-4 pt-14">
          <Heading>Hold Tight, Products are loading...</Heading>
          <VscLoading className="animate-spin p-2 text-gray-700" size={20} />
        </div>
      );
    }
    if (filteredProducts.length === 0) {
      // No products
      return (
        <div className="col-span-3 flex w-full flex-col items-center justify-center gap-4 pt-14">
          <MdRunningWithErrors className="p-2 text-gray-700" size={20} />
          <Heading>Oops! No products found...</Heading>
          <Button onClick={handleResetAll} variant={"outline"}>
            Reset all filters
          </Button>
        </div>
      );
    }

    return productsToRender.map((item) => (
      <Product
        id={item.id}
        productTitle={item.productTitle}
        image={item.image}
        category={item.category}
        color={item.color}
        price={item.price}
        tag={item.tag}
        key={item.productTitle + item.image}
        status={item.status}
      />
    ));
  }

  function handleResetAll() {
    useShopStore.setState({ selectedCategory: "All" });
    useShopStore.setState({ selectedMinPrice: 0 });
    useShopStore.setState({ selectedMaxPrice: 2000 });
    useShopStore.setState({ selectedSliderPrice: 2000 });
    useShopStore.setState({ selectedColor: undefined });
    useShopStore.setState({ selectedSorting: "default" });
    useShopStore.setState({ selectedTag: "All" });
    useShopStore.setState({ searchInputText: "" });
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
