import { NextResponse } from "next/server";
import { products } from "@/assets/productArray";
import { db } from "@/lib/db";
import { category } from "@/zod/schema";

export async function POST() {
    try {

        for (let product of products) {
            // Check if the product doesn't have a status field
            if (!product.hasOwnProperty('status')) {
                // If it doesn't have a status field, add one with the value 'Regular'
                product['status'] = 'Regular';
            }
        }
        console.log(products);
        return NextResponse.json(products);
        // products.forEach(product => {
        //     async function pushDB() {
        //         await db.product.createMany({
        //             data: {
        //                 tag: product.tag,
        //                 status: product.status,
        //                 category: product.category,
        //                 color: product.color,
        //                 description: product.productTitle,
        //                 image: product.image,
        //                 price: product.price || 0,
        //                 productTitle: product.productTitle,
        //             }
        //         })
        //     }

        // })
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.stack)
            return NextResponse.json({ message: "Error" })
        }
    }
}
