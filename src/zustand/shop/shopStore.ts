import { create } from "zustand";

type ShopState = {
  selectedSorting: "default" | "price";
  searchInputText: string;
};

type ShopAction = {
  setSelectedSorting: (sort: "default" | "price") => void;
  setSearchInputText: (text: string) => void;
};

export type ShopStoreType = ShopState & ShopAction;

const defaultInitState: ShopState = {
  selectedSorting: "default",
  searchInputText: "",
};

export const useShopStore = create<ShopStoreType>((set) => ({
  ...defaultInitState,
  setSelectedSorting: (sort) => set(() => ({ selectedSorting: sort })),
  setSearchInputText: (text) => set(() => ({ searchInputText: text }))
}))