import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { syncUserPostBody } from "@/zod/schema";

export async function POST(req: Request) {
    const body: unknown = await req.json()
    if (!body) return NextResponse.json({ message: "Missing required fields" }, { status: 404 })

    const validatedBody = syncUserPostBody.parse(body)

    const isUserExist = await db.user.findFirst({
        where: {
            authId: validatedBody.authId
        }
    })

    if (!isUserExist) {
        const newUser = await db.user.create({
            data: {
                authId: validatedBody.authId,
                userName: validatedBody.userName || validatedBody.userName,
                imageUrl: validatedBody.imageUrl,
                role: 'USER'
            }
        })

        return NextResponse.json({ message: `${newUser.userName} User Synced to the db` }, { status: 200 })
    }

    return NextResponse.json({ message: `${isUserExist.userName} User Synced to the db` }, { status: 200 })
}
