"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { UploadDropzone, UploadButton } from "@/lib/uploadthing";
import { Button } from "@/components/ui/button";

export default function UploadImage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  //* Validating the id
  const expectedIdSchema = z.string().min(20).max(28);
  const parsedId = expectedIdSchema.safeParse(id);

  if (parsedId.error) {
    return (
      <div className="mx-auto mt-[6rem] max-w-lg">
        The recently created product was not found !!
      </div>
    );
  }

  return (
    <div className="mx-auto mt-[6rem] max-w-lg">
      <Button className="size-[20rem]" asChild>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // const { url } = res[0];
            console.log(res[0].serverData.fileUrl);
            alert("upload successfully");
          }}
        />
      </Button>
    </div>
  );
}
