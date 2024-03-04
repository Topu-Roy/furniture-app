import { create } from "zustand";

type UseBearStoreType = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<UseBearStoreType>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
