import React from "react";
import { Button } from "@/components/ui/button";
import { type CustomCartProduct } from "./renderItems";

type Props = {
  setCartItems: React.Dispatch<React.SetStateAction<CustomCartProduct[]>>;
};

export default function HeaderActions({ setCartItems }: Props) {
  function handleSelectAll() {
    setCartItems((prev) => prev.map((item) => ({ ...item, isSelected: true })));
  }

  function handleReset() {
    setCartItems((prev) =>
      prev.map((item) => ({ ...item, isSelected: false })),
    );
  }

  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => handleSelectAll()}
        className="hover:scale-105"
      >
        Select All
      </Button>
      <Button
        variant={"outline"}
        onClick={() => handleReset()}
        className="hover:scale-105"
      >
        Reset
      </Button>
    </>
  );
}
