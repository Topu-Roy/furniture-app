import { NextResponse } from "next/server"
import { addProductToCart, getCartProductById, getCartProductsByAuthId, updateProductCartQuantity } from "@/server/queries"
import { addToCartSchema, getCartProductsByAuthIdSchema, updateProductCartQuantitySchema } from "@/zod/schema"

//! Done

//* This is to get a single product
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    if (!productId) return NextResponse.json({ message: "No data received" }, { status: 400 })

    const product = await getCartProductById(productId)


    if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 })

    return NextResponse.json({ product }, { status: 200 })
}

//* This is to get all the products in the cart
export async function POST(req: Request) {
    const body: unknown = await req.json()

    if (!body) return NextResponse.json({ message: "No data received" }, { status: 400 })

    const parsedBody = getCartProductsByAuthIdSchema.safeParse(body);

    if (parsedBody.error) return NextResponse.json({ message: "Validation error" }, { status: 500 })

    const cartProducts = await getCartProductsByAuthId(parsedBody.data.authId);

    if (!cartProducts) return NextResponse.json({ message: "No product found" }, { status: 404 })

    return NextResponse.json({ cartProducts }, { status: 200 })
}

//* This is to create a new cart product item
export async function PUT(req: Request) {
    const body: unknown = await req.json()

    if (!body) return NextResponse.json({ message: "No data received" }, { status: 400 })

    const parsedBody = addToCartSchema.safeParse(body);

    if (parsedBody.error) return NextResponse.json({ message: "Validation error" }, { status: 500 })

    const createdCartProduct = await addProductToCart(parsedBody.data.productId, parsedBody.data.authId, parsedBody.data.quantity)

    if (createdCartProduct === null) return NextResponse.json({ message: "Failed to create cart item...!" }, { status: 500 })

    return NextResponse.json({ message: "Create cart item", item: createdCartProduct.id }, { status: 200 })
}

//* This is to update the product quantity
export async function PATCH(req: Request) {
    const body: unknown = await req.json()

    if (!body) return NextResponse.json({ message: "No data received" }, { status: 400 })

    const parsedBody = updateProductCartQuantitySchema.safeParse(body);

    if (parsedBody.error) return NextResponse.json({ message: "Validation error" }, { status: 500 })

    const updatedCartItem = await updateProductCartQuantity(parsedBody.data.productId, parsedBody.data.quantity)

    if (!updatedCartItem) return NextResponse.json({ message: "Couldn't update cart item" }, { status: 500 })

    return NextResponse.json({ message: "Updated item", item: updatedCartItem.id, quantity: updatedCartItem.quantity }, { status: 200 })
}