import "server-only";
//! All of the code in this file runs only on the server!

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