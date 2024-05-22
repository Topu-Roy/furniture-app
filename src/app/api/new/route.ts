import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
    const update = await db.product.updateMany({
        data: {
            createdBy: "kp_fb9b2d1d175244f4afa95dfdf1ba1243"
        }
    })
    if (update) {
        return NextResponse.json({ message: "Success" }, { status: 200 })
    }
    return NextResponse.json({ message: "Failed" }, { status: 500 })
}