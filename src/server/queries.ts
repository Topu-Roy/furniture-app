import "server-only";
//? All of the code in this file runs only on the server!

import { db } from "@/lib/db";

//* ----------------- User ----------------------

export async function getUserByAuthId(id: string) {
    const user = await db.user.findFirst({
        where: {
            authId: id
        }
    })

    return user;
}

//* ---------------- Product --------------------

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

//* --------------- Cart -------------------------

export async function getCartProductById(productId: string) {
    const cart = await db.cartProduct.findFirst({
        where: {
            id: productId,
        }
    })

    return cart;
}

export async function addProductToCart(
    productId: string,
    authId: string,
    productTitle: string,
    price: number,
    quantity?: number
) {
    const user = await getUserByAuthId(authId);

    if (user === null) return null;

    const newCartProduct = await db.cartProduct.create({
        data: {
            quantity: quantity || 1,
            productTitle: productTitle,
            price: price,
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
    const userWithCartProducts = await db.user.findFirst({
        where: {
            authId: authId
        },
        include: {
            cartProducts: true
        }
    })

    if (userWithCartProducts === null) return null;

    return userWithCartProducts.cartProducts;
}