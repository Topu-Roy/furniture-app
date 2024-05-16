"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import { createShopStore, type ShopStoreType } from "./shopStore";

export const ShopStoreContext = createContext<StoreApi<ShopStoreType> | null>(
  null,
);

export interface ShopStoreProviderProps {
  children: ReactNode;
}

export const ShopStoreProvider = ({ children }: ShopStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ShopStoreType>>();
  if (!storeRef.current) {
    storeRef.current = createShopStore();
  }

  //! Implement this method to prevent hydration errors
  return (
    <ShopStoreContext.Provider value={storeRef.current}>
      {children}
    </ShopStoreContext.Provider>
  );
};

export const useShopStore = <T,>(selector: (store: ShopStoreType) => T): T => {
  const shopStoreContext = useContext(ShopStoreContext);

  if (!shopStoreContext) {
    throw new Error(`useShopStore must be use within createShopStoreProvider`);
  }

  return useStore(shopStoreContext, selector);
};
