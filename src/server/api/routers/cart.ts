import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";
import { addProductToCart, deleteCartProduct, getCartProductById, getCartProductsByAuthId, updateProductCartQuantity } from "@/server/queries";
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
            const createdCartProduct = await addProductToCart(input.productId, input.authId, input.quantity);

            return createdCartProduct;
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