import { z } from "zod"

export const roles = ["USER", "ADMIN"] as const
export const syncUserPostBody = z.object({
    authId: z.string().min(1),
    role: z.enum(roles),
    imageUrl: z.string().url().nullable(),
    userName: z.string().nullable()
})

export type syncUserPostBodyType = z.infer<typeof syncUserPostBody>