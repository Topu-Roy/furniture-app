"use server"

import { db } from "@/server/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { type User } from "@prisma/client";

export async function getUserDetailsByAuthId({ authId }: { authId: string }) {
    const user = await db.user.findFirst({
        where: {
            authId: authId,
        }
    })

    return user;
}

export async function getAllUsersByAdminId({ adminId }: { adminId: string }) {
    const isAdmin = await db.user.findFirst({
        where: {
            authId: adminId,
        }
    })

    if (isAdmin?.role !== 'ADMIN') return null;

    const users = await db.user.findMany();

    return users;
}

type RemoveAsAdminReturnType = {
    action: "ALREADY_USER" | "MADE_USER" | "UNAUTHORIZED";
    user: User | null;
}

export async function removeAsAdmin({ targetId }: { targetId: string }): Promise<RemoveAsAdminReturnType> {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const isAdmin = await db.user.findFirst({
        where: {
            authId: user?.id,
        }
    })

    if (isAdmin?.role !== 'ADMIN') return { action: "UNAUTHORIZED", user: null }

    const isAlreadyUser = await db.user.findFirst({
        where: {
            id: targetId,
        }
    })

    if (isAlreadyUser?.role === 'USER') return { action: "ALREADY_USER", user: isAlreadyUser }

    const updatedUser = await db.user.update({
        where: {
            id: isAlreadyUser?.id
        },
        data: {
            role: 'USER'
        }
    });

    return { action: "MADE_USER", user: updatedUser };
}

export async function deleteUserByEmail({ email, id }: { email: string, id: string }) {
    const user = await db.user.delete({
        where: {
            email,
            id: id
        }
    })

    return user;
}

export async function getTotalUsersCount({ authId }: { authId: string }) {

    const admin = await db.user.findFirst({
        where: {
            authId,
        }
    })

    if (!admin || admin.role !== 'ADMIN') {
        return null;
    }

    const userCount = await db.user.count();

    return userCount;
}