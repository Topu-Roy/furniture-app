import "server-only";
//? All of the code in this file runs only on the server!

import { db } from "@/lib/db";

export async function getUserByAuthId(id: string) {
    const user = await db.user.findFirst({
        where: {
            authId: id
        }
    })

    return user;
}

export async function getProductById(id: string) {
    const product = await db.product.findFirst({
        where: {
            id: id
        }
    })

    return product;
}

export async function getAllProduct() {
    const product = await db.product.findMany()

    return product;
}

export async function addProductToCart(productId: string, authId: string) {
    const user = await getUserByAuthId(authId);

    if (user === null) return null;

    const newCartProduct = await db.cartProduct.create({
        data: {
            userId: user.id,
            productId: productId,
        }
    })

    return newCartProduct;
}

export async function updateProductCartQuantity(productId: string, quantity: number) {
    const updateCartProduct = await db.cartProduct.update({
        where: {
            id: productId,
        },
        data: {
            quantity: quantity,
        }
    })

    return updateCartProduct;
}

export async function deleteCartProduct(productId: string) {
    const updateCartProduct = await db.cartProduct.delete({
        where: {
            id: productId,
        }
    })

    return updateCartProduct;
}

export async function getCartProductsByAuthId(authId: string) {
    const user = await getUserByAuthId(authId);

    if (user === null) return null;

    const product = await db.cartProduct.findMany({
        where: {
            userId: user.id
        },
        include: {
            product: true
        }
    })

    return product;
}