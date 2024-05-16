"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import { createCartStore, type CartStoreType } from "../cart/cartStore";

export const CounterStoreContext =
  createContext<StoreApi<CartStoreType> | null>(null);

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
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCartStore = <T,>(selector: (store: CartStoreType) => T): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be use within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
