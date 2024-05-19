import { createTRPCRouter, privateProcedure, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";
import { z } from "zod";

const createReviewSchema = z.object({
    description: z.string(),
    productId: z.string(),
    name: z.string(),
    rate: z.number().min(1).max(5)
})

export const reviewRouter = createTRPCRouter({
    getReviews: publicProcedure
        .input(z.object({
            productId: z.string()
        }))
        .query(async ({ input }) => {

            const reviews = await db.review.findMany({
                where: {
                    productId: input.productId
                }
            })

            return reviews;
        }),

    createReview: privateProcedure
        .input(createReviewSchema)
        .mutation(async ({ input, ctx }) => {

            if (ctx.user.userId === null) {
                throw new TRPCError({ code: "UNAUTHORIZED" });
            }

            const user = await db.user.findFirst({
                where: {
                    authId: ctx.user.userId,
                },
            })

            if (!user) throw new TRPCError({ code: "NOT_FOUND" });

            const createdReview = await db.review.create({
                data: {
                    text: input.description,
                    userId: user.id,
                    productId: input.productId,
                    name: input.name,
                    rate: input.rate,
                }
            })

            return createdReview
        }
        ),
});
