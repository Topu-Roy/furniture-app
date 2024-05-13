import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";
import { getUserByAuthId } from "@/server/queries";
import { db } from "@/lib/db";
import { z } from "zod";

export const authRouter = createTRPCRouter({
    syncUserToDB: privateProcedure
        .input(z.object({
            authId: z.string(),
            role: z.enum(["USER", "ADMIN"]),
            imageUrl: z.string().url(),
            userName: z.string(),
        }))
        .mutation(async ({ input }) => {
            const user = await getUserByAuthId(input.authId);
            if (!user || !user.id) {
                const syncedUser = await db.user.create({
                    data: {
                        authId: input.authId,
                        userName: input.userName,
                        imageUrl: input.imageUrl,
                        role: input.role
                    }
                })

                return syncedUser;
            }

            return user;
        }),
})