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
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  IoCheckmarkDoneCircleOutline,
  IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Text } from "@/app/_components/text";
import { Product } from "@prisma/client";
import { useToast } from "@/components/ui/use-toast";
import { useCartStore } from "@/zustand/cart/cartStore";
import { api } from "@/trpc/server";

type Props = {
  productId: string;
  isSelected: boolean;
  quantity: number;
  authId: string;
};

export default function CartItem(props: Props) {
  const [product, setProduct] = useState<Product>();
  const { toast } = useToast();

  const { productId, isSelected, quantity } = props;
  const ProductsFromStore = useCartStore().products;
//TODO: Fix this
  // async function getAllProducts() {
  //   const allCartProducts = await api.cart.getAllCartItems({
  //     authId: props.authId,
  //   });

  //   if (allCartProducts !== null) {
  //     useCartStore.setState({ products: allCartProducts });
  //   }
  // }
//TODO: Fix this
  // async function getProduct() {
  //   const productRes = await api.product.getProductById({ productId });

  //   if (!productRes || productRes === null) {
  //     return;
  //   }

  //   if (productRes.id) {
  //     setProduct(productRes);
  //   }
  // }

  //TODO: Fix this
  // useEffect(() => {
  //   getProduct();
  // }, [ProductsFromStore]);
//TODO: Fix this
  // async function handleRemove(id: string) {
  //   const deleteCartItem = await api.cart.deleteCartItem({ productId: id });

  //   if (!deleteCartItem || deleteCartItem === null) {
  //     return toast({
  //       title: "Something went wrong",
  //       description: "Product not removed from cart",
  //       variant: "destructive",
  //     });
  //   }

  //   if (deleteCartItem.id) {
  //     getAllProducts();
  //     return toast({
  //       title: "Success",
  //       description: "Product removed from cart",
  //     });
  //   }
  // }
//TODO: Fix this
  // function handleCheck(id: string) {
  //   useCartStore.setState({
  //     products: ProductsFromStore.map((item) =>
  //       item.id !== id ? item : { ...item, isSelected: !item.isSelected },
  //     ),
  //   });
  // }

  if (product === undefined) return null;

  return (
    <div
      className={cn(
        "grid w-full grid-cols-8 gap-2 rounded-lg bg-zinc-100 p-2 shadow-md",
        {
          "ring-2 ring-neutral-500/50": isSelected,
        },
      )}
    >
      <div className="relative col-span-1 flex flex-col items-center justify-center">
        <label className="flex flex-1 items-center justify-center">
          <input
            className="peer h-[2.5rem] w-[2.5rem] opacity-0"
            type="checkbox"
            checked={isSelected || false}
            //TODO: Fix this
            // onChange={() => handleCheck(product.id)}
          />
          <Button
            variant="ghost"
            className={cn(
              "pointer-events-none absolute h-[3.5rem] w-[3.5rem] bg-neutral-200 p-0 text-neutral-700 shadow-sm peer-hover:scale-105 peer-hover:bg-neutral-300 peer-hover:text-neutral-900",
              {
                "bg-green-200 peer-hover:bg-green-300/80": isSelected,
              },
            )}
            size={"lg"}
          >
            {isSelected ? (
              <IoCheckmarkDoneCircleSharp size={30} className="" />
            ) : (
              <IoCheckmarkDoneCircleOutline size={30} className="" />
            )}
          </Button>
        </label>

        <div className="h-0.5 w-[100%] rounded-full bg-black/10" />

        <div className="flex flex-1 items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-[3.5rem] w-[3.5rem] items-center justify-center p-0 text-rose-500 shadow-sm hover:scale-105 hover:bg-rose-300 hover:text-rose-800"
                size={"lg"}
              >
                <RiDeleteBin6Line size={30} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  Delete{" "}
                  <span className="font-semibold">{product.productTitle}</span>{" "}
                  from my cart.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button
                  type="submit"
                  variant="ghost"
                  //TODO: Fix this
                  // onClick={() => handleRemove(product.id)}
                  className="flex-1 rounded-full bg-rose-300 p-0 shadow-sm hover:bg-rose-400"
                  size={"lg"}
                >
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="col-span-2 max-w-[10rem] overflow-hidden rounded-md">
        <Image
          src={product.image || ""}
          height={1024}
          width={1024}
          alt={product.productTitle}
        />
      </div>
      <div className="col-span-3 space-y-2">
        <Text size="lg" className="font-semibold">
          {product.productTitle}
        </Text>

        <div className="flex items-center justify-start gap-4">
          {product.color ? <Chip text={product.color} /> : null}
          {product.category ? <Chip text={product.category} /> : null}
          {product.status ? <Chip text={product.status} /> : null}
          {product.tag ? <Chip text={product.tag} /> : null}
        </div>

        <Text className="font-semibold text-black/75">
          Price: ${product.price}
        </Text>
      </div>
      <div className="col-span-2 space-y-4">
        <UpdateQuantity productId={product.id} quantity={quantity} />

        <div className="flex items-center justify-between gap-2">
          <Text className="font-semibold text-black/75">Total price:</Text>
          <Text size="lg" className="font-semibold">
            ${product.price * quantity}
          </Text>
        </div>
      </div>
    </div>
  );
}
