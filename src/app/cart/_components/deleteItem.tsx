"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteCartItem } from "@/actions/cartAction";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function DeleteItem({
  cartItemId,
  productTitle,
}: {
  cartItemId: string;
  productTitle: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  async function handleRemove() {
    setIsLoading(true);
    const response = await deleteCartItem({ id: cartItemId }).finally(() => {
      setIsLoading(false);
      dialogOpen && setDialogOpen(!dialogOpen);
    });

    if (response.success === true) {
      router.refresh();
      return toast({
        title: "Removed from cart",
        description: "Product successfully removed from cart",
      });
    }

    if (response.success === false) {
      return toast({
        variant: "destructive",
        title: "Failed to remove from cart",
        description: "Failed to remove product from cart",
      });
    }
  }
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant={"link"}
          className="flex w-[45%] items-center justify-center gap-2 text-sm font-medium text-red-600 hover:bg-red-200 hover:text-red-600 hover:underline sm:w-[11rem]"
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
      </DialogTrigger>
      <DialogContent className="w-[95%] rounded-md sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Delete <span className="font-semibold">{productTitle}</span> from
            the cart.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            type="submit"
            variant="ghost"
            onClick={() => handleRemove()}
            className="flex-1 rounded-full bg-rose-300 py-2 shadow-sm hover:bg-rose-400"
            size={"lg"}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
