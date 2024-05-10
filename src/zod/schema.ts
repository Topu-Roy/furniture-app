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
export const status = ["Regular", "New", "Popular", "Out_of_stock"] as const;

export const createProductPostBodySchema = z.object({
    productTitle: z.string().min(1, { message: "Please provide a title" }),
    price: z.number({ message: "Please provide a price" }).min(5, { message: "Minimum price is $5" }),
    description: z.string({ message: "Please provide a description" }).min(20, { message: "Please provide a description" }),
    status: z.enum(status, { message: "Please select Status" }),
    color: z.enum(color, { message: "Please select a color" }),
    category: z.enum(category, { message: "Please select a category" }),
    tag: z.enum(tag, { message: "Please select a tag" }),
})

export const updateProductImagePatchBodySchema = z.object({
    id: z.string(),
    image: z.string().url()
})

//* From "/get-all-products" route
export const productArrayResponseSchema = z.array(
    z.object({
        id: z.string(),
        createdBy: z.string(),
        productTitle: z.string(),
        // TODO: Make this minimum 20 characters
        description: z.string(),
        price: z.number().min(5),
        // TODO: Make this a url
        image: z.string(),
        status: z.enum(status),
        color: z.enum(color),
        category: z.enum(category),
        tag: z.enum(tag),
    })
)

export const singleProductResponseSchema = z.object({
    id: z.string(),
    createdBy: z.string(),
    productTitle: z.string(),
    // TODO: Make this minimum 20 characters
    description: z.string(),
    price: z.number().min(5),
    // TODO: Make this a url
    image: z.string(),
    status: z.enum(status),
    color: z.enum(color),
    category: z.enum(category),
    tag: z.enum(tag),
})


export type createProductPostBodyType = z.infer<typeof createProductPostBodySchema>
export type updateImagePatchType = z.infer<typeof updateProductImagePatchBodySchema>
export type productResponseType = z.infer<typeof productArrayResponseSchema>


//* For Product Api Methods and types for fetch body
export const getCartProductsByAuthIdSchema = z.object({
    authId: z.string()
})

export const getCartProductsByAuthIdResponseSchema = z.object({
    id: z.string(),
    createdBy: z.string(),
    productTitle: z.string(),
    // TODO: Make this minimum 20 characters
    description: z.string(),
    // TODO: Make this a url
    image: z.string(),
    price: z.number().min(5),
    status: z.enum(status),
    color: z.enum(color),
    category: z.enum(category),
    tag: z.enum(tag),
    quantity: z.number()
})

// product: {
//     id: string;
//     createdBy: string;
//     productTitle: string;
//     description: string;
//     image: string | null;
//     price: number;
//     status: $Enums.Status | null;
//     category: $Enums.Category;
//     tag: $Enums.Tag;
//     color: $Enums.Color;
// };

export const addToCartSchema = z.object({
    productId: z.string(),
    authId: z.string(),
    quantity: z.number(),
})

export const updateProductCartQuantitySchema = z.object({
    productId: z.string(),
    quantity: z.number(),
})

export const deleteProductCartQuantitySchema = z.object({
    productId: z.string(),
})

export type getCartProductsByAuthIdType = z.infer<typeof getCartProductsByAuthIdSchema>
export type addToCartType = z.infer<typeof addToCartSchema>
export type updateProductCartQuantityType = z.infer<typeof updateProductCartQuantitySchema>
export type deleteProductCartQuantityType = z.infer<typeof deleteProductCartQuantitySchema>