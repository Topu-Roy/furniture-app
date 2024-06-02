"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { useCallback, useState } from 'react'
import { Text } from '../_components/text'
import Dropzone from 'react-dropzone'
import { useUploadThing } from '@/lib/uploadthing'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { updateImageUrl } from '@/actions/productAction'
import { CheckCheck, Cloud, File, Loader2 } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

export default function page({ id = "abc" }) {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [updatingURL, setUpdatingURL] = useState(false);
    const { isUploading, startUpload } = useUploadThing('imageUploader')
    const { toast } = useToast();
    const router = useRouter()

    const startFakedUploadProgress = () => {
        setUploadProgress(0)

        const interval = setInterval(() => {
            setUploadProgress((prevProgress) => {
                if (prevProgress >= 90) {
                    clearInterval(interval)
                    return prevProgress
                }

                return prevProgress + 5
            })
        }, 500)

        return interval;
    }


    const handleDrop = useCallback(async (acceptedFiles: File[]) => {
        // Start the progress bar
        const progressInterval = startFakedUploadProgress()

        try {
            // Upload the file to uploadthing
            const res = await startUpload(acceptedFiles)

            if (!res) {
                setUploadProgress(0)
                toast({
                    variant: 'destructive',
                    title: "Something went wrong",
                    description: "Only images can be uploaded",
                })
                return;
            }

            if (!res[0]?.url) {
                toast({
                    title: 'Something went wrong',
                    description: 'File not saved on the database',
                    variant: 'destructive',
                })
                return;
            }

            setUpdatingURL(true);

            // Clear interval after the upload
            clearInterval(progressInterval)
            setUploadProgress(100)

            // Saving the url to the database
            const response = await updateImageUrl({
                productId: id,
                imageUrl: res[0].url
            })

            if (response.status === 'NOT_FOUND') {
                router.refresh();
                setUpdatingURL(false);

                toast({
                    title: 'Something went wrong',
                    description: 'Product not found on the database',
                    variant: 'destructive',
                })
                return;
            }

            if (response.status === 'FAILED') {
                router.refresh();
                setUpdatingURL(false);

                toast({
                    title: 'Something went wrong',
                    description: 'Failed to update url on the database',
                    variant: 'destructive',
                })
                return;
            }

            if (response.status === 'SUCCESS') {
                router.refresh();
                toast({
                    title: "Success",
                    description: "Image updated successfully",
                });
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            toast({
                variant: 'destructive',
                title: "Something went wrong",
                description: "Upload failed",
            })
        } finally {
            setUpdatingURL(false);
            clearInterval(progressInterval);
        }
    }, [startUpload, startFakedUploadProgress, toast, router]);

    return (
        <div className="mt-[5rem] max-w-7xl mx-auto">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='h-12 w-full flex-1 hover:text-white hover:bg-primary' variant={'outline'}>
                        Update Image
                    </Button>
                </DialogTrigger>
                <DialogContent className='w-[70%]'>
                    <DialogHeader>
                        <DialogTitle className='divide-y-2'>
                            <Text size='lg' className='text-center font-semibold pb-4'>Upload a new image</Text>
                            <Text className='text-center font-medium pt-4'>Title</Text>
                        </DialogTitle>
                    </DialogHeader>
                    <Dropzone multiple={false} onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
                        {({ getRootProps, getInputProps, acceptedFiles }) => (
                            <div
                                {...getRootProps()}
                                className="border-[2px] h-64 m-4 border-dashed border-gray-300 rounded-lg"
                            >
                                <div className="flex justify-center items-center h-full w-full">
                                    <label
                                        htmlFor="dropzone_file"
                                        className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
                                    >
                                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                            <Cloud className="h-6 w-6 text-zinc-500 mb-2" />
                                            <p className="mb-2 text-sm text-zinc-700">
                                                <span className="font-semibold">Click to upload</span> or Drag &apos;n&apos; drop
                                            </p>
                                            <p>
                                                Image&apos;s only
                                            </p>
                                        </div>

                                        {acceptedFiles[0] ? (
                                            <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline-[1.5px] outline-zinc-200 divide-x divide-zinc-200">
                                                <div className="px-3 py-2 grid place-items-center">
                                                    <File className="h-4 w-4 text-blue-500" />
                                                </div>
                                                <div className="px-3 py-2 truncate">
                                                    <p className=" text-sm truncate">
                                                        {acceptedFiles[0].name}
                                                    </p>
                                                </div>
                                            </div>
                                        ) : null}

                                        {isUploading ? (
                                            <div className={
                                                cn("w-full mt-4 max-w-xs mx-auto", uploadProgress === 0 ? "hidden" : '')
                                            }>
                                                <Progress
                                                    successColor={uploadProgress === 100 ? "bg-green-500" : ''}
                                                    value={uploadProgress}
                                                    className="h-2 bg-zinc-300"
                                                />
                                            </div>
                                        ) : null}

                                        {uploadProgress === 100 && updatingURL ? (
                                            <div className="flex justify-center items-center flex-col pt-4 gap-2 text-zinc-500 text-sm text-center">
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                <p>Syncing image...</p>
                                            </div>
                                        ) : null}

                                        {uploadProgress === 100 && !updatingURL ? (
                                            <div className="flex justify-center items-center flex-col pt-4 gap-2 text-zinc-500 text-sm text-center">
                                                <div className="bg-green-300 text-green-600 p-4 flex justify-center items-center">
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
                </DialogContent>
            </Dialog>
        </div>
    )
}
