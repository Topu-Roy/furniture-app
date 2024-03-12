import { create } from "zustand";

type UseShopStoreType = {
  selectedColor: Color | undefined;
  selectedCategory: Category;
};

export type Color =
  | "black"
  | "white"
  | "red"
  | "orange"
  | "green"
  | "purple"
  | "blue"
  | "cyan";

export type Category =
  | "All"
  | "Chair"
  | "Table"
  | "Lamp"
  | "Drawer"
  | "Bed"
  | "Bookshelf"
  | "Sofa";

export const useShopStore = create<UseShopStoreType>((set) => ({
  selectedColor: undefined,
  selectedCategory: "All",
}));
