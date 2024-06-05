"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useDebounce from "@/hooks/debounce";
import { updateCartItemQuantity } from "@/actions/cartAction";
import { useRouter } from "next/navigation";

type Props = {
    cartItemId: string;
    quantity: number;
};

export default function UpdateQuantity(props: Props) {
    const { cartItemId, quantity } = props;

    const [quantityState, setQuantityState] = useState(quantity);
    const [prevQuantity, setPrevQuantity] = useState(quantity);
    const [isUpdating, setIsUpdating] = useState(false);
    const debouncedQuantity = useDebounce(quantityState, 500);
    const { toast } = useToast();
    const router = useRouter();

    function handleQuantityChange({ action }: { action: "increment" | "decrement" }) {
        if (action === "decrement" && quantityState <= 1) {
            return;
        }

        if (action === "increment") setQuantityState(quantityState + 1);
        if (action === "decrement") setQuantityState(quantityState - 1);
    }

    //* After increment or decrement the router refreshes the page
    //* and the new quantity comes as a props
    useEffect(() => {
        setQuantityState(quantity);
        setIsUpdating(false);
    }, [quantity])

    useEffect(() => {
        async function handleUpdateQuantity() {
            try {
                setIsUpdating(true);

                const response = await updateCartItemQuantity({
                    id: cartItemId,
                    quantity: debouncedQuantity,
                })

                if (response) {
                    setPrevQuantity(quantityState);
                    setIsUpdating(false);
                    router.refresh();
                };

            } catch (error) {
                if (error instanceof Error) {
                    console.error(error);
                    setQuantityState(prevQuantity);
                    toast({
                        variant: "destructive",
                        title: "Something went wrong",
                        description: "Something went wrong while updating the quantity",
                    });
                }
            } finally {
                setIsUpdating(false);
            }
        }

        void handleUpdateQuantity();
    }, [debouncedQuantity]);

    return (
        <div className="flex items-center">
            <Button
                disabled={isUpdating}
                onClick={() => handleQuantityChange({ action: "decrement" })}
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
                value={quantityState}
                required
            />
            <Button
                disabled={isUpdating}
                onClick={() => handleQuantityChange({ action: "increment" })}
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
    );
}
