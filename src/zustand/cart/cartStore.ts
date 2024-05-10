import { CartProduct } from "@prisma/client";
import { create } from "zustand";

type UseShopStoreType = {
    products: CartProduct[]
};

export const useCartStore = create<UseShopStoreType>()(() => ({ products: [] }));