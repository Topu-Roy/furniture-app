"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { type CartProduct } from "@prisma/client";
import { useCartStore } from "@/zustand/cart/cartStore";
import Link from "next/link";

export default function CartCheckout() {
  const [productsToRender, setProductsToRender] = useState<CartProduct[]>([]);
  const [checkoutPrice, setCheckoutPrice] = useState<number>(0);

  const products_store = useCartStore((store) => store.products);

  useEffect(() => {
    let checkOut = 0;
    const selectedProducts = products_store.filter(
      (product) => product.isSelected === true,
    );
    selectedProducts.forEach((item) => {
      const priceWithQuantity = item.price * item.quantity;
      checkOut += priceWithQuantity;
    });

    setProductsToRender(selectedProducts);
    setCheckoutPrice(checkOut);
  }, [products_store]);

  return (
    <>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Order summary
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              {productsToRender.length > 0 ? (
                productsToRender.map((item) => (
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="truncate text-base font-normal text-gray-500">
                      {item.productTitle}
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${item.price * item.quantity}
                    </dd>
                  </dl>
                ))
              ) : (
                <p className="text-rose-400">* No products selected</p>
              )}
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">
                Total
              </dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
                ${checkoutPrice}
              </dd>
            </dl>
          </div>

          <Button className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4">
            Proceed to Checkout
          </Button>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {" "}
              or{" "}
            </span>
            <Link href="/shop">
              <div className="text-primary-700 dark:text-primary-500 inline-flex items-center gap-2 text-sm font-medium underline hover:no-underline">
                <span>Continue Shopping</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="voucher"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                {" "}
                Do you have a voucher or gift card?{" "}
              </label>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder="coupon code"
                required
              />
            </div>
            <Button
              type="submit"
              variant={"outline"}
              className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4"
            >
              Apply Code
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
