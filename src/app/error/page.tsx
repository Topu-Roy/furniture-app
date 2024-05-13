import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="mx-auto mt-[6rem] flex max-w-7 flex-col items-center justify-center gap-4 p-4 text-center">
      <span>Something went wrong...!!!</span>
      <div>
        <Link href={"/home"}>
          <Button>Home</Button>
        </Link>
      </div>
    </div>
  );
}
