import { NextResponse } from "next/server"
import { addProductToCart, getCartProductsByAuthId, updateProductCartQuantity } from "@/server/queries"
import { addToCartSchema, getCartProductsByAuthIdSchema, updateProductCartQuantitySchema } from "@/zod/schema"

//* This is to get all the products in the cart
export async function POST(req: Request) {
    const body: unknown = await req.json()

    if (!body) return NextResponse.json({ message: "No data received" }, { status: 401 })

    const parsedBody = getCartProductsByAuthIdSchema.safeParse(body);

    if (parsedBody.error) return NextResponse.json({ message: "Validation error" }, { status: 500 })

    const cartProducts = await getCartProductsByAuthId(parsedBody.data.authId);

    return NextResponse.json({ cartProducts }, { status: 200 })
}

//* This is to create a new cart product item
export async function PUT(req: Request) {
    const body: unknown = await req.json()

    if (!body) return NextResponse.json({ message: "No data received" }, { status: 401 })

    const parsedBody = addToCartSchema.safeParse(body);

    if (parsedBody.error) return NextResponse.json({ message: "Validation error" }, { status: 500 })

    const createdCartProduct = await addProductToCart(parsedBody.data.productId, parsedBody.data.authId)

    if (createdCartProduct === null) return NextResponse.json({ message: "Failed to create cart item...!" }, { status: 500 })

    return NextResponse.json({ message: "Create cart item", item: createdCartProduct.id }, { status: 200 })
}

//* This is to update the product quantity
export async function PATCH(req: Request) {
    const body: unknown = await req.json()

    if (!body) return NextResponse.json({ message: "No data received" }, { status: 401 })

    const parsedBody = updateProductCartQuantitySchema.safeParse(body);

    if (parsedBody.error) return NextResponse.json({ message: "Validation error" }, { status: 500 })

    const updatedCartItem = await updateProductCartQuantity(parsedBody.data.productId, parsedBody.data.quantity)

    return NextResponse.json({ message: "Updated item", item: updatedCartItem.id, quantity: updatedCartItem.quantity }, { status: 200 })
}