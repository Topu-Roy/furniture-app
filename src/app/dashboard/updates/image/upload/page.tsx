"use client";

import React, { Suspense, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import Dropzone from "react-dropzone";
import { updateImageUrl } from "@/actions/productAction";
import { CheckCheck, Cloud, File, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { BASE_URL, cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Text } from "@/app/_components/text";

function UpdateImageComponent() {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [updatingURL, setUpdatingURL] = useState(false);

    const { isUploading, startUpload } = useUploadThing("imageUploader");

    const { toast } = useToast();
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const productTitle = searchParams.get("title");

    const startFakedUploadProgress = () => {
        setUploadProgress(0);

        const interval = setInterval(() => {
            setUploadProgress((prevProgress) => {
                if (prevProgress >= 90) {
                    clearInterval(interval);
                    return prevProgress;
                }

                return prevProgress + 5;
            });
        }, 500);

        return interval;
    };

    async function handleDrop(acceptedFiles: File[]) {

        if (!id) {
            return toast({
                variant: "destructive",
                title: "Something went wrong",
                description: "Product not found",
            })
        }

        // Start the progress bar
        const progressInterval = startFakedUploadProgress();

        try {
            // Upload the file to uploadthing
            const res = await startUpload(acceptedFiles);

            if (!res) {
                setUploadProgress(0);
                toast({
                    variant: "destructive",
                    title: "Something went wrong",
                    description: "Only images can be uploaded",
                });
                return;
            }

            if (!res[0]?.url) {
                toast({
                    title: "Something went wrong",
                    description: "File not saved on the database",
                    variant: "destructive",
                });
                return;
            }

            setUpdatingURL(true);

            // Clear interval after the upload
            clearInterval(progressInterval);
            setUploadProgress(100);

            // Saving the url to the database
            const response = await updateImageUrl({
                productId: id,
                imageUrl: res[0].url,
            });

            if (response.status === "NOT_FOUND") {
                setUpdatingURL(false);

                toast({
                    title: "Something went wrong",
                    description: "Product not found on the database",
                    variant: "destructive",
                });
                return;
            }

            if (response.status === "FAILED") {
                setUpdatingURL(false);

                toast({
                    title: "Something went wrong",
                    description: "Failed to update url on the database",
                    variant: "destructive",
                });
                return;
            }

            if (response.status === "SUCCESS") {
                router.replace(`${BASE_URL}/dashboard/updates/image`)
                toast({
                    title: "Success",
                    description: "Image updated successfully",
                });
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            toast({
                variant: "destructive",
                title: "Something went wrong",
                description: "Upload failed",
            });
        } finally {
            setUpdatingURL(false);
            clearInterval(progressInterval);
        }
    }

    return (
        <main className="max-w-4xl mx-auto pt-20">
            <div className='divide-y-2'>
                <Text size='lg' className='text-center font-semibold pb-4'>Upload a new image</Text>
                <Text className='text-center font-medium pt-4'>{productTitle?.replace("%", " ")}</Text>
            </div>
            <Dropzone
                multiple={false}
                onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}
            >
                {({ getRootProps, getInputProps, acceptedFiles }) => (
                    <div
                        {...getRootProps()}
                        className="m-4 h-64 rounded-lg border-[2px] border-dashed border-gray-300"
                    >
                        <div className="flex h-full w-full items-center justify-center">
                            <label
                                htmlFor="dropzone_file"
                                className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
                            >
                                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                    <Cloud className="mb-2 h-6 w-6 text-zinc-500" />
                                    <p className="mb-2 text-sm text-zinc-700">
                                        <span className="font-semibold">Click to upload</span> or Drag
                                        &apos;n&apos; drop
                                    </p>
                                    <p>Image&apos;s only</p>
                                </div>

                                {acceptedFiles[0] ? (
                                    <div className="flex max-w-xs items-center divide-x divide-zinc-200 overflow-hidden rounded-md bg-white outline-[1.5px] outline-zinc-200">
                                        <div className="grid place-items-center px-3 py-2">
                                            <File className="h-4 w-4 text-blue-500" />
                                        </div>
                                        <div className="truncate px-3 py-2">
                                            <p className=" truncate text-sm">{acceptedFiles[0].name}</p>
                                        </div>
                                    </div>
                                ) : null}

                                {isUploading ? (
                                    <div
                                        className={cn(
                                            "mx-auto mt-4 w-full max-w-xs",
                                            uploadProgress === 0 ? "hidden" : "",
                                        )}
                                    >
                                        <Progress
                                            successColor={uploadProgress === 100 ? "bg-green-500" : ""}
                                            value={uploadProgress}
                                            className="h-2 bg-zinc-300"
                                        />
                                    </div>
                                ) : null}

                                {uploadProgress === 100 && updatingURL ? (
                                    <div className="flex flex-col items-center justify-center gap-2 pt-4 text-center text-sm text-zinc-500">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        <p>Syncing image...</p>
                                    </div>
                                ) : null}

                                {uploadProgress === 100 && !updatingURL ? (
                                    <div className="flex flex-col items-center justify-center gap-2 pt-4 text-center text-sm text-zinc-500">
                                        <div className="flex items-center justify-center bg-green-300 p-4 text-green-600 rounded-full">
                                            <CheckCheck size={30} />
                                        </div>
                                        <p>Updated successfully</p>
                                    </div>
                                ) : null}

                                <input
                                    {...getInputProps()}
                                    className="hidden"
                                    type="file"
                                    id="dropzone_file"
                                />
                            </label>
                        </div>
                    </div>
                )}
            </Dropzone>
        </main>
    );
}

export default function UpdateImage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UpdateImageComponent />
        </Suspense>
    )
}