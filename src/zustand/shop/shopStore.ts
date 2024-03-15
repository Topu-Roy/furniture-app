import { create } from "zustand";

export type Color = "black" | "white" | "red" | "brown" | "green";

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

type TagsWithoutAll = Omit<Tag, '"All"'>;
type CategoryWithoutAll = Omit<Category, "All">;

export type ProductType = {
  className?: string;
  productTitle: string;
  image: string;
  price: number | undefined;
  status?: "new" | "popular" | "out of stock";
  category: CategoryWithoutAll;
  tag: TagsWithoutAll;
  color: Color;
};

type UseShopStoreType = {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  selectedColor: Color | undefined;
  selectedCategory: Category;
  selectedTag: Tag;
};

export const useShopStore = create<UseShopStoreType>((set) => ({
  products: [],
  setProducts: (props: ProductType[]) => set(() => ({ products: props })),
  selectedColor: undefined,
  selectedCategory: "All",
  selectedTag: "All",
}));
