"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import { createCartStore, type CartStoreType } from "./cartStore";

export const CartStoreContext = createContext<StoreApi<CartStoreType> | null>(
  null,
);

export interface cartStoreProviderProps {
  children: ReactNode;
}

export const CartStoreProvider = ({ children }: cartStoreProviderProps) => {
  const storeRef = useRef<StoreApi<CartStoreType>>();
  if (!storeRef.current) {
    storeRef.current = createCartStore();
  }

  //! Implement this method to prevent hydration errors
  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = <T,>(selector: (store: CartStoreType) => T): T => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be use within CartStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};
