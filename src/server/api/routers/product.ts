import { adminProcedure, createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { category, createProductPostBodySchema } from "@/zod/schema";
import { getAllProduct, getProductById } from "@/server/queries";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";
import { z } from "zod";

export const ProductRouter = createTRPCRouter({
    getAllProducts: publicProcedure.query(async () => {
        const products = await getAllProduct();

        return products;
    }),

    getProductById: publicProcedure
        .input(z.object({ productId: z.string() }))
        .query(async ({ input }) => {
            const product = await getProductById(input.productId)

            return product;
        }),

    getProductByIdRaw: publicProcedure
        .input(z.object({ productId: z.string() }))
        .query(async ({ input }) => {
            const product = await db.product.findFirst({
                where: {
                    id: input.productId
                }
            })

            return product;
        }),

    updateProductImage: adminProcedure
        .input(z.object({
            id: z.string(),
            image: z.string().url()
        }))
        .mutation(async ({ input }) => {
            const updatedProduct = await db.product.update({
                where: {
                    id: input.id
                },
                data: {
                    image: input.image
                }
            })

            if (updatedProduct.id) {
                throw new TRPCError({ code: "NOT_FOUND" });

            }

            return updatedProduct;
        }),

    createNewProduct: adminProcedure
        .input(createProductPostBodySchema)
        .mutation(async ({ input, ctx }) => {

            if (ctx.user.userId === null) {
                throw new TRPCError({ code: "UNAUTHORIZED" });
            }

            const createdProduct = await db.product.create({
                data: {
                    createdBy: ctx.user.userId,
                    productTitle: input.productTitle,
                    description: input.description,
                    price: input.price,
                    category: input.category,
                    color: input.color,
                    tag: input.tag
                }
            })

            if (createdProduct.id) {
                throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });

            }

            return createdProduct;
        }),

    getProductsByCategory: publicProcedure
        .input(z.object({ category: z.enum(category) }))
        .query(async ({ input }) => {

            const filteredProducts = await db.product.findMany({
                where: {
                    category: input.category
                },
            })

            return filteredProducts;
        }),
});
