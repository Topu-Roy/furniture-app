import { getProductById } from "@/server/queries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");

    if (!productId) return NextResponse.json({ message: "Error" }, { status: 401 });

    const product = await getProductById(productId);
    if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });

    return NextResponse.json(product);
}