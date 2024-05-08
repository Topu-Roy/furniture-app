import { Category, Color, Tag } from "@prisma/client";
import { create } from "zustand";

export type ProductType = {
  id: number;
  className?: string;
  productTitle: string;
  image: string;
  price: number | undefined;
  status?: "new" | "popular" | "out of stock";
  category: Category;
  tag: Tag;
  color: Color;
};

type UseShopStoreType = {
  productsBackup: ProductType[];
  setProductsBackup: (products: ProductType[]) => void;
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
  setProductsBackup: (props: ProductType[]) => set(() => ({ productsBackup: props })),
  selectedMinPrice: 0,
  selectedMaxPrice: 2000,
  selectedSliderPrice: 2000,
  selectedSorting: 'default',
  selectedColor: undefined,
  selectedCategory: "All",
  selectedTag: "All",
  searchInputText: '',
}));