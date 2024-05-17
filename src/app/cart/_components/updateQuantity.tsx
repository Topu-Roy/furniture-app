"use client";
import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { useToast } from "@/components/ui/use-toast";
import useDebounce from "@/hooks/debounce";
import { useCartStore } from "@/zustand/cart/cartStore";

type Props = {
  cartItemId: string;
  quantity: number;
  price: number;
  setTotalPrice: Dispatch<SetStateAction<number | undefined>>;
};

export default function UpdateQuantity(props: Props) {
  const { cartItemId, quantity, price, setTotalPrice } = props;

  const [quantityState, setQuantityState] = useState(quantity);
  const [prevQuantity, setPrevQuantity] = useState(quantity);
  const debouncedQuantity = useDebounce(quantityState);

  const products_store = useCartStore((store) => store.products);
  const setProducts_store = useCartStore((store) => store.setProducts);

  const { toast } = useToast();
  const { mutate } = api.cart.updatedCartItem.useMutation({
    onError() {
      setQuantityState(prevQuantity);
      return toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Something went wrong while updating the quantity",
      });
    },
    onSuccess() {
      setPrevQuantity(quantityState);
      setProducts_store(
        products_store.map((product) =>
          product.id === cartItemId
            ? { ...product, quantity: quantityState }
            : product,
        ),
      );
    },
  });

  function updateQuantity({ action }: { action: "increment" | "decrement" }) {
    if (action === "decrement" && quantity === 1) {
      return;
    }

    if (action === "increment") {
      setQuantityState(quantityState + 1);
    }

    if (action === "decrement") {
      setQuantityState(quantityState - 1);
    }
  }

  useEffect(() => {
    mutate({
      cartItemId,
      quantity: debouncedQuantity,
    });
  }, [debouncedQuantity]);

  useEffect(() => {
    setTotalPrice(quantityState * price);
  }, [quantityState]);

  return (
    <div className="flex items-center">
      <Button
        onClick={() => updateQuantity({ action: "decrement" })}
        className="flex size-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 p-0 hover:bg-gray-200"
      >
        <svg
          className="size-3 text-gray-900/75"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h16"
          />
        </svg>
      </Button>
      <input
        type="text"
        id="counter-input"
        data-input-counter
        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
        placeholder=""
        value={quantityState}
        required
      />
      <Button
        onClick={() => updateQuantity({ action: "increment" })}
        className="flex size-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 p-0 hover:bg-gray-200"
      >
        <svg
          className="size-3 text-gray-900/75"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </Button>
    </div>
  );
}
