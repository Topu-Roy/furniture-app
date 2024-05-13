import { NextResponse } from "next/server";
import { getAllProduct } from "@/server/queries";

export async function GET() {
    //! Done
    const products = await getAllProduct();
    return NextResponse.json(products);
}