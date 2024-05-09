import { deleteCartProduct } from "@/server/queries";
import { deleteProductCartQuantitySchema } from "@/zod/schema";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//* This is to delete a product from the cart
export async function POST(req: Request) {
    const user = auth();
    if (!user) return NextResponse.json({ message: "Unauthenticated" }, { status: 401 })

    const body: unknown = await req.json()
    if (!body) return NextResponse.json({ message: "No data received" }, { status: 400 })

    const parsedBody = deleteProductCartQuantitySchema.safeParse(body);
    if (parsedBody.error) return NextResponse.json({ message: "Validation error" }, { status: 500 })

    const updatedCartItem = await deleteCartProduct(parsedBody.data.productId)
    return NextResponse.json({ message: "Deleted item", item: updatedCartItem.id, quantity: updatedCartItem.quantity }, { status: 200 })
}