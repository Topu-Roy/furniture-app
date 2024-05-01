import { NextResponse } from "next/server";
import { syncUserPostBody } from "@/zod/schema";
import { db } from "@/lib/db";
import { getUserByAuthId } from "@/server/queries";

export async function POST(request: Request) {
    const body: unknown = await request.json()

    if (!body) return NextResponse.json({ message: "Missing required fields" }, { status: 400 })

    const validatedBody = syncUserPostBody.parse(body);

    const isUserExist = await getUserByAuthId(validatedBody.authId);

    if (!isUserExist) {
        await db.user.create({
            data: {
                authId: validatedBody.authId,
                userName: validatedBody.userName,
                imageUrl: validatedBody.imageUrl,
                role: 'USER'
            }
        })
        return NextResponse.json({ message: `User Synced to the db` }, { status: 200 })
    }

    return NextResponse.json({ message: `User Already Synced to the db` }, { status: 200 })
}
