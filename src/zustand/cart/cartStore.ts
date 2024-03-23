import { create } from "zustand";

type Color = "black" | "white" | "red" | "brown" | "green";
type Category = "Chair" | "Table" | "Lamp" | "Drawer" | "Bed" | "Bookshelf" | "Sofa";
type Tag = "Minimalistic" | "Modern" | "Stylish" | "Elegant" | "Ambient" | "Luxurious";

export type CartProductType = {
    id: number;
    productTitle: string;
    image: string;
    price: number | undefined;
    status?: "new" | "popular" | "out of stock";
    category: Category;
    tag: Tag;
    color: Color;
    quantity: number
};

type UseShopStoreType = {
    products: CartProductType[];
    addToCart: (product: CartProductType) => void
    removeFromCart: (id: number) => void
};

export const useCartStore = create<UseShopStoreType>((set) => ({
    products: [],
    addToCart: (product) => set((state) => {
        return { products: { ...state.products, product } }
    }),
    removeFromCart: (id) => set((state) => {
        return { products: state.products.filter(item => item.id !== id) }
    })
}));