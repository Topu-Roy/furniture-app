import { db } from "@/lib/db";
import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";
import { addProductToCart, deleteCartProduct, getCartProductById, getCartProductsByAuthId, getUserByAuthId, updateProductCartQuantity } from "@/server/queries";
import { addToCartSchema, updateProductCartQuantitySchema } from "@/zod/schema";
import { z } from "zod";

export const cartRouter = createTRPCRouter({
    getCartItemById: privateProcedure
        .input(z.object({ productId: z.string() }))
        .query(async ({ input }) => {
            const product = await getCartProductById(input.productId)

            return product;
        }),

    getAllCartItems: privateProcedure
        .input(z.object({ authId: z.string() }))
        .query(async ({ input }) => {
            const products = await getCartProductsByAuthId(input.authId);

            return products;
        }),

    createNewCartItem: privateProcedure
        .input(addToCartSchema)
        .mutation(async ({ input }) => {

            type ActionType = "updated" | "created" | "alreadyInCart"
            type Action = { updated: ActionType; created: ActionType; alreadyInCart: ActionType }
            const action: Action = { updated: "updated", created: "created", alreadyInCart: "alreadyInCart" }

            const user = await getUserByAuthId(input.authId)

            if (!user) return;

            const isExist = await db.cartProduct.findFirst({
                where: {
                    productId: input.productId,
                    userId: user.id
                }
            })

            if (isExist) {
                if (input.quantity !== isExist.quantity) {
                    const updatedCartProduct = await updateProductCartQuantity(input.productId, input.quantity)
                    return { action: action.updated, updatedCartProduct };
                }
                if (input.quantity === isExist.quantity) {
                    return { action: action.alreadyInCart };
                }
            }

            const createdCartProduct = await addProductToCart(
                input.productId, input.authId, input.productTitle, input.price, input.quantity
            );

            return { action: action.created, createdCartProduct };
        }),

    updatedCartItem: privateProcedure
        .input(updateProductCartQuantitySchema)
        .mutation(async ({ input }) => {
            const updatedCartItem = await updateProductCartQuantity(input.productId, input.quantity);

            if (updatedCartItem.id) return updatedCartItem;

            return null;
        }),

    deleteCartItem: privateProcedure
        .input(z.object({ productId: z.string() }))
        .mutation(async ({ input }) => {
            const deletedCartItem = await deleteCartProduct(input.productId)

            if (deletedCartItem.id) return deletedCartItem;

            return null;
        }),
})