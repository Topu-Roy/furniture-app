import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

const f = createUploadthing();

export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        .middleware(async () => {
            // This code runs on your server before upload
            const user = auth();

            if (!user || !user.userId) throw new UploadThingError("Unauthorized");

            const userFromDB = await db.user.findFirst({
                where: {
                    authId: user.userId
                }
            })

            if (userFromDB?.role !== 'ADMIN') throw new UploadThingError("Unauthorized");

            // Whatever is returned here is accessible in onUploadComplete as `metadata`
            return { isAdmin: true }
        })
        .onUploadComplete(async ({ file }) => ({ fileUrl: file.url })),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;