import { Category, Color, Product, Status, Tag } from "@prisma/client";
import { create } from "zustand";

type UseShopStoreType = {
  productsBackup: Product[];
  setProductsBackup: (products: Product[]) => void;
  selectedMinPrice: number;
  selectedMaxPrice: number;
  selectedSliderPrice: number;
  selectedSorting: "default" | "price";
  selectedColor: Color | undefined;
  selectedCategory: Category | "All";
  selectedTag: Tag | "All";
  searchInputText: string;
};

export const useShopStore = create<UseShopStoreType>((set) => ({
  productsBackup: [],
  setProductsBackup: (props: Product[]) => set(() => ({ productsBackup: props })),
  selectedMinPrice: 0,
  selectedMaxPrice: 2000,
  selectedSliderPrice: 2000,
  selectedSorting: 'default',
  selectedColor: undefined,
  selectedCategory: "All",
  selectedTag: "All",
  searchInputText: '',
}));