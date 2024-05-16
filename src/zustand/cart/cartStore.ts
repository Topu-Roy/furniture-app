import { CartProduct } from "@prisma/client";
import { create } from "zustand";
import { createStore } from 'zustand/vanilla'

type CartState = {
    products: CartProduct[],
}

type CartAction = {
    setProducts: (products: CartProduct[]) => void,
}

export type CartStoreType = CartState & CartAction

const defaultInitState: CartState = {
    products: []
}

export const createCartStore = (
    initState: CartState = defaultInitState,
) => {
    return createStore<CartStoreType>()((set) => ({
        ...initState,
        setProducts: (products) => set(() => ({ products: products }))
    }))
}

// export const useCartStore = create<CartStoreType>()((set) => ({
//     products: [],
//     setProducts: (products) => set(() => ({ products: products }))
// }));