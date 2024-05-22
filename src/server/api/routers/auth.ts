import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";
import { getUserByAuthId } from "@/server/queries";
import { db } from "@/lib/db";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const authRouter = createTRPCRouter({
    syncUserToDB: privateProcedure
        .input(z.object({
            authId: z.string(),
            role: z.enum(["USER", "ADMIN"]),
            imageUrl: z.string().url(),
            firstName: z.string().nullable(),
            lastName: z.string().nullable(),
            email: z.string().email().nullable(),
        }))
        .mutation(async ({ input, ctx }) => {

            if (ctx.user.id !== input.authId) throw new TRPCError({ code: "FORBIDDEN" })

            const user = await getUserByAuthId(input.authId);

            if (!user || !user.id) {
                const newUser = await db.user.create({
                    data: {
                        authId: input.authId,
                        imageUrl: input.imageUrl,
                        role: input.role,
                        firstName: input.firstName,
                        lastName: input.lastName,
                        email: input.email
                    }
                })

                return newUser;
            }

            return user;
        }),
})