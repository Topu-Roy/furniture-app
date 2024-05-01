import { NextResponse } from "next/server";
import { updateProductImagePatchBodySchema } from "@/zod/schema";
import { getProductById } from "@/server/queries";
import { db } from "@/lib/db";

//* ---------------------------------- Update the image url of the product ------------------------------------
export async function PATCH(request: Request) {
    const body: unknown = await request.json()
    console.log(body)

    if (!body) return NextResponse.json({ message: "Missing required fields" }, { status: 400 })

    const validatedBody = updateProductImagePatchBodySchema.parse(body)

    const isProductExist = getProductById(validatedBody.id);

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
