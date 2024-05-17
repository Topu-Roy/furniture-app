"use client";
import React, { useEffect, useState } from "react";
import Chip from "./chip";
import UpdateQuantity from "./updateQuantity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  IoCheckmarkDoneCircleOutline,
  IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { cn } from "@/lib/utils";
import { CartProduct, type Product } from "@prisma/client";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/trpc/react";
import { useCartStore } from "@/zustand/cart/cartStore";
import Link from "next/link";

type Props = {
  cartItemId: string;
  productId: string;
  isSelected: boolean;
  quantity: number;
  setProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
};

export default function CartItem(props: Props) {
  const { productId, isSelected, quantity, cartItemId, setProducts } = props;
  const [product, setProduct] = useState<Product>();
  const [totalPrice, setTotalPrice] = useState(product?.price);
  const [dialogOpen, setDialogOpen] = useState(false);

  //* Zustand
  const products_store = useCartStore((store) => store.products);
  const setProducts_store = useCartStore((store) => store.setProducts);
  const removeProductById_store = useCartStore(
    (store) => store.removeProductById,
  );

  const { toast } = useToast();

  const data = api.cart.getCartItemById.useQuery({
    productId: productId,
  }).data;

  useEffect(() => {
    setProducts(products_store);
  }, [products_store]);

  useEffect(() => {
    if (data && data !== null) {
      setProduct(data.product);
    }
  }, [data]);

  const { mutate, isPending } = api.cart.deleteCartItem.useMutation({
    onSuccess: () => {
      removeProductById_store(productId);
      toast({
        title: "Removed from cart",
        description: "Product successfully removed from cart",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Failed to remove from cart",
        description: "Failed to remove product from cart",
      });
    },
    onSettled() {
      dialogOpen && setDialogOpen(!dialogOpen);
    },
  });

  function handleRemove() {
    mutate({ productId: cartItemId });
  }

  function handleCheck() {
    setProducts_store(
      products_store.map((item) =>
        item.id !== cartItemId
          ? item
          : { ...item, isSelected: !item.isSelected },
      ),
    );
  }

  if (product === undefined) return <div className="mt-[5rem]">Loading...</div>;
  if (product === null) return null;

  return (
    <>
      <div
        className={cn(
          "rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6",
          isSelected ? "ring-2 ring-primary/90" : "",
        )}
      >
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <Link href="#">
            <div className="shrink-0 md:order-1">
              <Image
                className="size-36 rounded-md"
                src={product.image || ""}
                alt={product.productTitle}
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
              <UpdateQuantity
                price={product.price}
                setTotalPrice={setTotalPrice}
                cartItemId={cartItemId}
                quantity={quantity}
              />
            </div>
            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 dark:text-white">
                ${totalPrice}
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <div className="space-y-2">
              <Link href={`/cart/${product.id}`}>
                <p className="line-clamp-2 text-base font-medium text-gray-900 hover:underline dark:text-white">
                  {product.productTitle}
                </p>
              </Link>
              <div className="flex items-center justify-start gap-2">
                {product.color ? <Chip text={product.color} /> : null}
                {product.category ? <Chip text={product.category} /> : null}
                {product.status ? <Chip text={product.status} /> : null}
                {product.tag ? <Chip text={product.tag} /> : null}
              </div>
              <p className="text-base font-bold text-gray-900 dark:text-white">
                ${product.price}
              </p>
            </div>

            <div className="flex items-center gap-16 px-2">
              <label className="flex items-center justify-center">
                <input
                  className="peer h-[2.5rem] w-[2.5rem] opacity-0"
                  type="checkbox"
                  checked={isSelected || false}
                  onChange={() => handleCheck()}
                />
                <Button
                  variant="link"
                  className={cn(
                    "pointer-events-none absolute text-sm font-medium text-green-600 hover:underline peer-hover:scale-105",
                    {
                      "bg-green-200 peer-hover:bg-green-300/80": isSelected,
                    },
                  )}
                  size={"sm"}
                >
                  {isSelected ? (
                    <IoCheckmarkDoneCircleSharp
                      size={30}
                      className={cn(
                        isSelected
                          ? "bg-green-200 text-green-900 peer-hover:bg-green-300/80"
                          : "",
                      )}
                    />
                  ) : (
                    <IoCheckmarkDoneCircleOutline size={30} className="" />
                  )}
                  {isSelected ? "Selected" : "Select"}
                </Button>
              </label>

              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                      Delete{" "}
                      <span className="font-semibold">
                        {product.productTitle}
                      </span>{" "}
                      from the cart.
                    </DialogDescription>
                  </DialogHeader>

                  <DialogFooter>
                    <Button
                      type="submit"
                      variant="ghost"
                      onClick={() => handleRemove()}
                      className="flex-1 rounded-full bg-rose-300 p-0 shadow-sm hover:bg-rose-400"
                      size={"lg"}
                    >
                      {isPending ? "Deleting..." : "Delete"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
