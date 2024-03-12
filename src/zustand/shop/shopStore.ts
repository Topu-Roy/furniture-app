import { create } from "zustand";

type UseShopStoreType = {
  selectedColor: Color | undefined;
  setSelectedColor: (color: Color) => void;
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
  | "Chair"
  | "Table"
  | "Lamp"
  | "Drawer"
  | "Bed"
  | "Bookshelf"
  | "Sofa";

export const useShopStore = create<UseShopStoreType>((set) => ({
  selectedColor: undefined,
  setSelectedColor: (color) => set({ selectedColor: color }),
}));
