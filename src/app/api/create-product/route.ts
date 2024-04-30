import { NextResponse } from "next/server";
import { db } from "@/lib/db";

//TODO: Make this a post method
export async function GET() {
    const createdProduct = await db.product.create({
        data: {
            category: "CHAIR",
            color: "BLACK",
            price: 159,
            productTitle: "Adjustable Office Chair",
            tag: "MODERN",
        },
    });

    return NextResponse.json({ id: createdProduct.id })
}