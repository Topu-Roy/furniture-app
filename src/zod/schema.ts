import { z } from "zod"

//*---------------------------- User -------------------------------
export const roles = ["USER", "ADMIN"] as const
export const syncUserPostBody = z.object({
    authId: z.string().min(1),
    role: z.enum(roles),
    imageUrl: z.string().url().nullable(),
    userName: z.string().nullable()
})

export type Role = typeof roles[number]
export type syncUserPostBodyType = z.infer<typeof syncUserPostBody>

//*--------------------------- Product ------------------------------
const color = ["Black", "White", "Red", "Brown", "Green"] as const;
const category = ["Chair", "Table", "Lamp", "Drawer", "Bed", "Bookshelf", "Sofa"] as const;
const tag = ["Minimalistic", "Modern", "Stylish", "Elegant", "Ambient", "Luxurious"] as const;

export const carateProductPostBodySchema = z.object({
    productTitle: z.string(),
    price: z.number(),
    category: z.enum(category),
    color: z.enum(color),
    tag: z.enum(tag),
})

export const updateProductImagePatchBodySchema = z.object({
    id: z.string(),
    image: z.string().url()
})

export type Color = typeof color[number]
export type Category = typeof category[number]
export type Tag = typeof tag[number]
export type carateProductPostBodyType = z.infer<typeof carateProductPostBodySchema>
export type updateImagePatchType = z.infer<typeof updateProductImagePatchBodySchema>