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
export const color = ["Black", "White", "Red", "Brown", "Green"] as const;
export const category = ["Chair", "Table", "Lamp", "Drawer", "Bed", "Bookshelf", "Sofa"] as const;
export const tag = ["Minimalistic", "Modern", "Stylish", "Elegant", "Ambient", "Luxurious"] as const;

export const createProductPostBodySchema = z.object({
    productTitle: z.string().min(1, { message: "Please provide a title" }),
    price: z.number({ message: "Please provide a price" }).min(1),
    description: z.string({ message: "Please provide a description" }).min(20, { message: "Please provide a description" }),
    color: z.enum(color, { message: "Please select a color" }),
    category: z.enum(category, { message: "Please select a category" }),
    tag: z.enum(tag, { message: "Please select a tag" }),
})

export const updateProductImagePatchBodySchema = z.object({
    id: z.string(),
    image: z.string().url()
})

export type Color = typeof color[number]
export type Category = typeof category[number]
export type Tag = typeof tag[number]
export type createProductPostBodyType = z.infer<typeof createProductPostBodySchema>
export type updateImagePatchType = z.infer<typeof updateProductImagePatchBodySchema>