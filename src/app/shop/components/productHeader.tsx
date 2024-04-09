"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useShopStore } from "@/zustand/shop/shopStore";
import useDebounce from "@/hooks/debounce";

type SortingMethodType = "default" | "price";

export default function ProductHeader() {
  const { searchInputText } = useShopStore();
  const [searchText, setSearchText] = useState("");
  const debouncedText = useDebounce(searchText);
  const [sortingMethod, setSortingMethod] =
    useState<SortingMethodType>("default");

  const sortingOptions: SortingMethodType[] = ["default", "price"];

  function handleClearSearch() {
    setSearchText("");
  }

  useEffect(() => {
    useShopStore.setState({ searchInputText: debouncedText });
  }, [debouncedText]);

  useEffect(() => {
    setSearchText(searchInputText);
  }, [searchInputText]);

  useEffect(() => {
    useShopStore.setState({ selectedSorting: sortingMethod });
  }, [sortingMethod]);

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <div className="flex w-[43%] flex-row justify-center">
        <div className="flex w-full flex-row justify-center gap-2">
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Office Chair"
            className="h-12 w-[74%] rounded-sm px-8 text-sm"
          />
          <Button
            onClick={handleClearSearch}
            variant={"outline"}
            size="6xl"
            className="h-12 rounded-sm font-semibold tracking-[-0.50px]"
          >
            Clear
          </Button>
        </div>
      </div>

      <div className="flex w-[20%] items-center justify-center gap-2">
        <span className="text-sm font-medium">Sort by</span>
        <div className="w-[70%]">
          <Select
            onValueChange={(value: SortingMethodType) =>
              setSortingMethod(value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sortingOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt.slice(0, 1).toUpperCase() + opt.slice(1, opt.length)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
