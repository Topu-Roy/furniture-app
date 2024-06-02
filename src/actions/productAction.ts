"use server"

import { db } from "@/server/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { type Product, type Category } from "@prisma/client";
import { getUserDetailsByAuthId } from "./userAction";

export async function getAllProducts() {
    const products = await db.product.findMany()

    return products;
}

export async function getPaginatedProducts({ currentPage, perPage }: { currentPage: number, perPage: number }) {
    const products = await db.product.findMany({
        skip: (currentPage - 1) * perPage,
        take: perPage
    })

    return products;
}

export async function getTotalProductCount() {
    const total = await db.product.count();

    return total;
}

export async function getTotalProductCount_withoutDescription() {
    const total = await db.product.count({
        where: {
            description: ""
        }
    });

    return total;
}

export async function getPaginatedProducts_withoutDescription({ currentPage, perPage }: { currentPage: number, perPage: number }) {
    const products = await db.product.findMany({
        skip: (currentPage - 1) * perPage,
        take: perPage,
        where: {
            description: ''
        }
    })

    return products;
}

export async function getProductById({ id }: { id: string }) {
    const product = await db.product.findFirst({
        where: {
            id
        }
    })

    return product;
}

export async function getProductByIdWithReviews({ id }: { id: string }) {
    const product = await db.product.findFirst({
        where: {
            id
        },
        include: {
            review: true
        }
    })

    return product;
}

export async function getProductsByCategory({ category }: { category: Category }) {
    const products = await db.product.findMany({
        where: {
            category
        }
    })

    return products;
}

export async function getProductReviewCountByRating({ productId, rate }: { productId: string, rate: number }) {
    const count = await db.review.count({
        where: {
            productId,
            rate
        }
    })

    return count;
}

type ReturnTypeForCreateProduct = Promise<{
    status: "NOT_FOUND" | "NOT_ADMIN" | "FAILED" | "SUCCESS";
    product: Product | null;
}>

export async function createProduct(productDetails: Omit<Omit<Product, 'id'>, 'image'>): ReturnTypeForCreateProduct {

    //* First check if the user exists
    const user = await db.user.findFirst({
        where: {
            authId: productDetails.createdBy
        }
    })

    if (!user) return { status: 'NOT_FOUND', product: null };
    if (user.role !== 'ADMIN') return { status: 'NOT_ADMIN', product: null };

    //* Then create the product
    const createNewProduct = await db.product.create({
        data: {
            ...productDetails
        }
    })

    if (!createNewProduct) return { status: 'FAILED', product: null };

    return { status: 'SUCCESS', product: createNewProduct };
}

type ReturnTypeForUpdateImageUrl = Promise<{
    status: "NOT_FOUND" | "FAILED" | "SUCCESS";
    product: Product | null;
}>

export async function updateImageUrl({ imageUrl, productId }: { imageUrl: string, productId: string }): ReturnTypeForUpdateImageUrl {

    const product = await db.product.findFirst({
        where: {
            id: productId
        }
    })

    if (!product) return { status: "NOT_FOUND", product: null };

    const updatedProduct = await db.product.update({
        where: {
            id: productId
        },
        data: {
            image: imageUrl
        }
    })

    if (!updatedProduct) return { status: 'FAILED', product: null }

    return { status: "SUCCESS", product: updatedProduct };
}

export async function getProductNeedUpdate_description() {
    //* If description is empty
    const products = await db.product.findMany({
        where: {
            description: ""
        }
    })

    return products;
}

export async function updateProductDetls({ productId, description }: { productId: string, description: string }) {
    const updatedProduct = await db.product.update({
        where: {
            id: productId
        },
        data: {
            description
        }
    })

    return updatedProduct;
}

type ReturnTypeForUpdateProductDetails = Promise<{
    status: "NOT_FOUND" | "NOT_ADMIN" | "FAILED" | "SUCCESS";
    product: Product | null;
}>

export async function updateProductDetails(productDetails: Product): ReturnTypeForUpdateProductDetails {

    //* First check if the user exists
    const user = await db.user.findFirst({
        where: {
            authId: productDetails.createdBy
        }
    })

    if (!user) return { status: 'NOT_FOUND', product: null };
    if (user.role !== 'ADMIN') return { status: 'NOT_ADMIN', product: null };

    //* Then create the product
    const updatedProduct = await db.product.update({
        where: {
            id: productDetails.id
        },
        data: {
            ...productDetails
        }
    })

    if (!updatedProduct) return { status: 'FAILED', product: null };

    return { status: 'SUCCESS', product: updatedProduct };
}

type ReturnTypeForDeleteProduct = Promise<{
    status: "NO_PERMIT" | "FAILED" | "SUCCESS";
    product: Product | null;
}>

export async function deleteProduct({ productId }: { productId: string }): Promise<ReturnTypeForDeleteProduct> {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) return { status: "NO_PERMIT", product: null }

    const admin = await getUserDetailsByAuthId({ authId: user.id });

    if (admin?.role !== 'ADMIN') return { status: "NO_PERMIT", product: null }

    const deletedProduct = await db.product.delete({
        where: {
            id: productId
        }
    })

    if (!deletedProduct) return { status: "FAILED", product: null }
    return { status: "SUCCESS", product: deletedProduct }
}