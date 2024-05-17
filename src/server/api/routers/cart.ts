import { db } from "@/lib/db";
import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";
import { addProductToCart, deleteCartProduct, getCartProductById, getCartProductsByAuthId, getUserByAuthId, updateProductCartQuantity } from "@/server/queries";
import { addToCartSchema, updateProductCartQuantitySchema } from "@/zod/schema";
import { TRPCError } from "@trpc/server";
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

            return products?.cartProducts;
        }),

    createNewCartItem: privateProcedure
        .input(addToCartSchema)
        .mutation(async ({ input, ctx }) => {

            type ActionType = "updated" | "created" | "alreadyInCart"
            type Action = { updated: ActionType; created: ActionType; alreadyInCart: ActionType }
            const action: Action = { updated: "updated", created: "created", alreadyInCart: "alreadyInCart" }

            const user = await getUserByAuthId(input.authId)

            if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' })
            if (input.authId !== ctx.user.userId) throw new TRPCError({ code: 'FORBIDDEN' })


            const isExist = await db.cartProduct.findFirst({
                where: {
                    productId: input.productId,
                    userId: user.id,
                }
            })

            if (isExist) {
                if (input.quantity !== isExist.quantity) {
                    const updatedCartProduct = await updateProductCartQuantity(input.productId, input.quantity)
                    return { action: action.updated, updatedCartProduct };
                }

                if (input.quantity === isExist.quantity) {
                    return { action: action.alreadyInCart, alreadyExist: isExist };
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
            const item = await getCartProductById(input.cartItemId);

            if (!item) throw new TRPCError({ code: 'NOT_FOUND' })

            const updatedCartItem = await updateProductCartQuantity(item.id, input.quantity);

            if (updatedCartItem.id) return updatedCartItem;
        }),

    deleteCartItem: privateProcedure
        .input(z.object({ productId: z.string() }))
        .mutation(async ({ input }) => {
            const deletedCartItem = await deleteCartProduct(input.productId)

            if (deletedCartItem.id) return deletedCartItem;
        }),
})