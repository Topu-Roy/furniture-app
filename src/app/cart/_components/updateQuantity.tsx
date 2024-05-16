"use client";
import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Text } from "@/app/_components/text";
import { api } from "@/trpc/react";
import { useToast } from "@/components/ui/use-toast";
import useDebounce from "@/hooks/debounce";

type Props = {
  cartItemId: string;
  quantity: number;
  price: number;
  setTotalPrice: Dispatch<SetStateAction<number | undefined>>;
};

export default function UpdateQuantity({
  cartItemId,
  quantity,
  price,
  setTotalPrice,
}: Props) {
  const [quantityState, setQuantityState] = useState(quantity);
  const [prevQuantity, setPrevQuantity] = useState(quantity);
  const debouncedQuantity = useDebounce(quantityState);

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
    },
  });

  async function handleClick(count: 1 | -1) {
    if (quantityState === 1 && count === -1) return;
    setQuantityState((prev) => prev + count);
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
    <div className="flex items-center justify-between gap-2">
      <Text className="font-semibold text-black/75">Quantity:</Text>
      <div className="flex h-14 items-center justify-center gap-5 rounded-md border border-black/40 p-2">
        <Button
          onClick={() => handleClick(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-full p-2"
          variant={"outline"}
        >
          <TiMinus size={20} className="text-black" />
        </Button>
        <span className="">{quantityState}</span>
        <Button
          onClick={() => handleClick(1)}
          className="flex h-8 w-8 items-center justify-center rounded-full p-2"
          variant={"outline"}
        >
          <TiPlus size={20} className="text-black" />
        </Button>
      </div>
    </div>
  );
}
