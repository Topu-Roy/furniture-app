import { CartProduct } from "@prisma/client";
import { create } from "zustand";

type UseShopStoreType = {
    products: CartProduct[],
    setProducts: (products: CartProduct[]) => void,
};

export const useCartStore = create<UseShopStoreType>()((set) => ({
    products: [],
    setProducts: (products) => set(() => ({ products: products }))
}));