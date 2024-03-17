import { create } from "zustand";

export type Color = "black" | "white" | "red" | "brown" | "green";
export type Category = "All" | "Chair" | "Table" | "Lamp" | "Drawer" | "Bed" | "Bookshelf" | "Sofa";
export type Tag = "All" | "Minimalistic" | "Modern" | "Stylish" | "Elegant" | "Ambient" | "Luxurious";

export type ProductType = {
  className?: string;
  productTitle: string;
  image: string;
  price: number | undefined;
  status?: "new" | "popular" | "out of stock";
  category: Omit<Category, "All">;
  tag: Omit<Tag, '"All"'>;
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
  selectedCategory: Category;
  selectedTag: Tag;
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