"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function CartItem() {
  const [quantity, setQuantity] = useState(1);

  function updateQuantity({ action }: { action: "increment" | "decrement" }) {
    if (action === "decrement" && quantity === 1) {
      return;
    }

    if (action === "increment") {
      setQuantity(quantity + 1);
    }

    if (action === "decrement") {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link href="#">
          <div className="shrink-0 md:order-1">
            <Image
              className="h-20 w-20"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt=""
              height={300}
              width={300}
            />
          </div>
        </Link>

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
              value={quantity}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </Button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              $1,499
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <div className="space-y-2">
            <a
              href="#"
              className="line-clamp-2 text-base font-medium text-gray-900 hover:underline dark:text-white"
            >
              PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24"
              Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT
            </a>
            <p className="text-base font-bold text-gray-900 dark:text-white">
              $1,499
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Add to Favorites
            </button>

            <Button
              type="button"
              variant={"link"}
              className="flex items-center justify-between text-sm font-medium text-red-600 hover:underline"
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
