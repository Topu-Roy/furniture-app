import { create } from "zustand";

type UseShopStoreType = {
  selectedColor: SelectedColor | undefined;
  setSelectedColor: (color: SelectedColor) => void;
};

export type SelectedColor =
  | "black"
  | "white"
  | "red"
  | "orange"
  | "green"
  | "purple"
  | "blue"
  | "cyan";

export const useShopStore = create<UseShopStoreType>((set) => ({
  selectedColor: undefined,
  setSelectedColor: (color) => set({ selectedColor: color }),
}));
