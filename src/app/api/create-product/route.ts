import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { carateProductPostBodySchema, updateProductImagePatchBodySchema } from "@/zod/schema";

//* ---------------------------------- Create a new product ------------------------------------
export async function Post(request: Request) {
    const body: unknown = await request.json()

    if (!body) return NextResponse.json({ message: "Missing required fields" }, { status: 404 })

    const validatedBody = carateProductPostBodySchema.parse(body)
    const createdProduct = await db.product.create({
        data: {
            productTitle: validatedBody.productTitle,
            price: validatedBody.price,
            category: validatedBody.category,
            color: validatedBody.color,
            tag: validatedBody.tag
        }
    })

    if (!createdProduct) return NextResponse.json({ message: "Couldn't create the product" }, { status: 500 })

    return NextResponse.json({ id: createdProduct.id }, { status: 200 })
}

//* ---------------------------------- Update the image url of the product ------------------------------------
export default async function PATCH(request: Request) {
    const body: unknown = await request.json()

    if (!body) return NextResponse.json({ message: "Missing required fields" }, { status: 400 })

    const validatedBody = updateProductImagePatchBodySchema.parse(body)

    const isProductExist = await db.product.findFirst({
        where: {
            id: validatedBody.id
        }
    })

    if (!isProductExist) return NextResponse.json({ message: "Product not found" }, { status: 404 })

    try {
        const updatedProduct = await db.product.update({
            where: {
                id: validatedBody.id
            },
            data: {
                image: validatedBody.image
            }
        })

        return NextResponse.json({ id: updatedProduct.id }, { status: 200 })

    } catch (error) {
        if (error instanceof Error) return NextResponse.json({ message: error.stack }, { status: 500 })
    }

}