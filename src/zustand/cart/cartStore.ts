import { Category, Color, Tag } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export type CartProductType = {
    id: number;
    productTitle: string;
    image: string;
    price: number;
    status?: "new" | "popular" | "out of stock";
    category: Category;
    tag: Tag;
    color: Color;
    quantity: number;
    isSelected: boolean
};

type UseShopStoreType = {
    products: CartProductType[]
    addToCart: (product: CartProductType) => void
    removeFromCart: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
};

export const useCartStore = create<UseShopStoreType>()(
    persist(
        (set, get) => ({
            products: [],
            isSelected: false,
            addToCart: (product) => set(() => {
                const isExist = get().products.find(item => item.id === product.id);

                if (isExist) {
                    return { products: get().products };
                }

                return { products: [...get().products, product] };
            }),
            removeFromCart: (id) => set(() => ({ products: get().products.filter(item => item.id !== id) })),
            increaseQuantity: (id) => set(() => ({
                products: get().products.map(item => (
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                ))
            })),
            decreaseQuantity: (id) => set(() => ({
                products: get().products.map(item => (
                    item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item
                ))
            }))
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({
                products: state.products.map(({ isSelected, ...rest }) => rest)             //* Excluding the isSelected field from the local storage 
            }),
        }
    )
);