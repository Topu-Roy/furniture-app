"use server";

import { db } from "@/server/db";

type AddToCartProps = {
    productId: string;
    authId: string;
    productTitle: string;
    price: number;
    quantity: number;
};

export async function addToCart(props: AddToCartProps) {
    type ActionType = "updated" | "created" | "alreadyInCart";
    type Action = {
        updated: ActionType;
        created: ActionType;
        alreadyInCart: ActionType;
    };
    const action: Action = {
        updated: "updated",
        created: "created",
        alreadyInCart: "alreadyInCart",
    };

    const user = await db.user.findFirst({
        where: {
            authId: props.authId,
        },
    });

    if (!user) return null;

    const isExist = await db.cartProduct.findFirst({
        where: {
            productId: props.productId,
            userId: user.id,
        },
    });

    if (isExist) {
        if (props.quantity !== isExist.quantity) {
            const updatedCartProduct = await db.cartProduct.update({
                where: {
                    id: isExist.id,
                },
                data: {
                    quantity: props.quantity,
                },
            });

            return { action: action.updated, product: updatedCartProduct };
        }

        if (props.quantity === isExist.quantity) {
            return { action: action.alreadyInCart, product: isExist };
        }
    }

    const createdCartProduct = await db.cartProduct.create({
        data: {
            quantity: props.quantity || 1,
            userId: user.id,
            productId: props.productId,
        },
    });

    return { action: action.created, product: createdCartProduct };
}

export async function getAllCartItems({ authId }: { authId: string }) {
    const cartProducts = await db.user.findFirst({
        where: {
            authId,
        },
        include: {
            cartProducts: {
                include: {
                    product: true,
                },
            },
        },
    });

    return cartProducts;
}

export async function getCartItemsCount({ userId }: { userId: string }) {
    const cartProductsCount = await db.cartProduct.count({
        where: {
            userId: userId,
        },
    });

    return cartProductsCount;
}

export async function getCartItemById({ id }: { id: string }) {
    const cartItem = await db.cartProduct.findFirst({
        where: {
            id,
        },
        include: {
            product: true,
        },
    });

    return cartItem;
}

export async function deleteCartItem({ id }: { id: string }) {
    const cartItem = await db.cartProduct.delete({
        where: {
            id,
        },
    });

    if (cartItem.id) return { success: true };

    return { success: false };
}

export async function updateCartItemQuantity({
    id,
    quantity,
}: {
    id: string;
    quantity: number;
}) {
    const updatedItem = await db.cartProduct.update({
        where: {
            id,
        },
        data: {
            quantity,
        },
    });

    return updatedItem;
}
