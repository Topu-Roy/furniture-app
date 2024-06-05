"use client";

import React, { useCallback, useEffect, useState } from "react";
import { cn, scrollToTop } from "@/lib/utils";
import HeadingAndReset from "./headingAndReset";
import { type Product, type Color } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ColorNQuantity = {
  color: Color;
  quantity: number;
};

export default function ColorSelector({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedColorParam = searchParams.get("color");

  const [colors, setColors] = useState<ColorNQuantity[]>([]);
  const [selectedColor, setSelectedColor] = useState<Color | "All">("All");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const color: Color | "All" =
      selectedColorParam === "Black" ||
      selectedColorParam === "White" ||
      selectedColorParam === "Red" ||
      selectedColorParam === "Brown" ||
      selectedColorParam === "Green"
        ? (selectedColorParam as Color)
        : "All";

    setSelectedColor(color);
  }, [selectedColorParam]);

  function handleColorChange(color: Color) {
    if (color === selectedColor) {
      setSelectedColor("All");
    } else {
      setSelectedColor(color);
    }

    scrollToTop();
  }

  function handleReset() {
    setSelectedColor("All");

    scrollToTop();
  }

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("color", selectedColor));
  }, [selectedColor]);

  useEffect(() => {
    const colors: ColorNQuantity[] = [
      {
        color: "Black",
        quantity: products.filter((item) => item.color === "Black").length,
      },
      {
        color: "White",
        quantity: products.filter((item) => item.color === "White").length,
      },
      {
        color: "Red",
        quantity: products.filter((item) => item.color === "Red").length,
      },
      {
        color: "Green",
        quantity: products.filter((item) => item.color === "Green").length,
      },
      {
        color: "Brown",
        quantity: products.filter((item) => item.color === "Brown").length,
      },
    ];

    setColors(colors);
  }, [products]);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-[21px]">
      <HeadingAndReset title="Filter By Color" handleReset={handleReset} />
      <div className="flex w-full flex-row flex-wrap items-start justify-start gap-3">
        {colors.map((item) => (
          <button
            key={item.color}
            onClick={() => handleColorChange(item.color)}
            className={cn(
              `h-10 w-10 rounded-full p-6 text-xs bg-${item.color}-500/80 flex items-center justify-center`,
              {
                "bg-black/80 text-white": item.color === "Black",
                "bg-white text-black": item.color === "White",
                "bg-red-500/80": item.color === "Red",
                "bg-green-500/80": item.color === "Green",
                "bg-[#964B00]/80": item.color === "Brown",
                "ring-[3px] ring-stone-700": selectedColor === item.color,
              },
            )}
          >
            <span>{item.quantity}</span>
          </button>
        ))}
      </div>
      <div className="hidden">
        <div className="bg-red-500/80"></div>
        <div className="bg-orange-500/80"></div>
        <div className="bg-green-500/80"></div>
      </div>
    </div>
  );
}
