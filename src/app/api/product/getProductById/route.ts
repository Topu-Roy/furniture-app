import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/server/queries";
import { z } from "zod";

export async function POST(req: NextRequest) {
    //! Done
    const body: unknown = await req.json()
    if (!body) return NextResponse.json({ message: "Invalid input" }, { status: 400 });

    const bodySchema = z.object({
        productId: z.string()
    })

    const parsedBody = bodySchema.safeParse(body);

    if (!parsedBody.success) return NextResponse.json({ message: "Validation error" }, { status: 500 })

    const product = await getProductById(parsedBody.data.productId);
    if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });

    return NextResponse.json(product, { status: 404 });
}