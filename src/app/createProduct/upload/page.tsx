"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { useUploadThing } from "@/lib/uploadthing";
import Dropzone from "react-dropzone";
import { toast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function UploadImage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [updatingImageUrl, setUpdatingImageUrl] = useState(false);

  //* Getting id from search parameters
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { startUpload, isUploading } = useUploadThing("imageUploader");

  //* Validating the id
  const expectedIdSchema = z.string().min(20).max(28);
  const parsedId = expectedIdSchema.safeParse(id);

  //* This is to show a progress bar when uploading
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

  async function updateImage(url: string) {
    setUpdatingImageUrl(true);
    const updateImage = await fetch("/api/product/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: parsedId.data,
        image: url,
      }),
    });

    if (!updateImage.ok) {
      setUpdatingImageUrl(false);
      return toast({
        title: "Something went wrong",
        description: "File not saved on the database",
        variant: "destructive",
      });
    }

    if (updateImage.ok) {
      setUpdatingImageUrl(false);
      return toast({
        title: "Success",
        description: "File saved on the database",
      });
    }
  }

  if (parsedId.error) {
    return (
      <div className="mx-auto mt-[6rem] max-w-lg">
        The recently created product was not found !!
      </div>
    );
  }

  return (
    <div className="mx-auto mt-[6rem] max-w-lg">
      <Dropzone
        multiple={false}
        onDrop={async (acceptedFile) => {
          console.log(acceptedFile[0].type);
          // image/png
          // image/jpeg
          // image/webp

          // Start the progress bar
          const progressInterval = startFakedUploadProgress();

          // Upload the file to uploadthing
          const res = await startUpload(acceptedFile);

          if (!res) {
            setUploadProgress(0);
            toast({
              variant: "destructive",
              title: "Something went wrong",
              description: "Only PDF files can be uploaded",
            });
          } else {
            // This is giving type error, so i added any
            const { url } = res[0];

            if (!url) {
              setUploadProgress(0);
              return toast({
                title: "Something went wrong",
                description: "File not saved on the database",
                variant: "destructive",
              });
            }

            // Clear interval after the upload
            clearInterval(progressInterval);
            setUploadProgress(100);

            // Update image url in the database
            await updateImage(url);
          }
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="size-[15rem] bg-slate-600">
            <span>Drop here</span>
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

            {uploadProgress === 100 ? (
              <div className="flex flex-col items-center justify-center gap-2 pt-4 text-center text-sm text-zinc-500">
                <p>Upload complete...</p>
              </div>
            ) : null}

            {updatingImageUrl === true ? (
              <div className="flex flex-col items-center justify-center gap-2 pt-4 text-center text-sm text-zinc-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p>Updating in the database...</p>
              </div>
            ) : null}

            <input
              {...getInputProps()}
              className="hidden"
              type="file"
              id="dropzone_file"
            />
          </div>
        )}
      </Dropzone>
    </div>
  );
}
