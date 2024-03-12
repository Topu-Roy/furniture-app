import { create } from "zustand";

type UseShopStoreType = {
  selectedColor: Color | undefined;
  selectedCategory: Category;
  selectedTag: Tag;
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

export type Tag =
  | "All"
  | "Minimalistic"
  | "Modern"
  | "Stylish"
  | "Elegant"
  | "Ambient"
  | "Luxurious";

export const useShopStore = create<UseShopStoreType>((set) => ({
  selectedColor: undefined,
  selectedCategory: "All",
  selectedTag: "All",
}));
