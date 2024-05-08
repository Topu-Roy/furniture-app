import { NextResponse } from "next/server";
import { getAllProduct } from "@/server/queries";

export async function GET() {
    const products = await getAllProduct();
    return NextResponse.json(products);
}