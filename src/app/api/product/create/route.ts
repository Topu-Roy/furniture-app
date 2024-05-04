import { NextResponse } from "next/server";
import { createProductPostBodySchema } from "@/zod/schema";
import { db } from "@/lib/db";

//* ---------------------------------- Create a new product ------------------------------------
export async function POST(request: Request) {
    // TODO: Make sure Admin only
    const body: unknown = await request.json()
    console.log(body);

    if (!body) return NextResponse.json({ message: "Missing required fields" }, { status: 404 })

    const validatedBody = createProductPostBodySchema.parse(body)
    const createdProduct = await db.product.create({
        data: {
            productTitle: validatedBody.productTitle,
            description: validatedBody.description,
            price: validatedBody.price,
            category: validatedBody.category,
            color: validatedBody.color,
            tag: validatedBody.tag
        }
    })

    if (!createdProduct) return NextResponse.json({ message: "Couldn't create the product" }, { status: 500 })

    return NextResponse.json({ id: createdProduct.id }, { status: 200 })
}