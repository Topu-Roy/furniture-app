import React from "react";
import { Text } from "../Text";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Copyright() {
  return (
    <div className="flex w-full flex-row items-center justify-center border-t border-white/40 bg-black py-4">
      <div className="flex w-auto flex-row justify-between gap-3 pr-[3px]">
        <Text
          size="md"
          className={cn("opacity-0.81 tracking-[-0.50px] text-white/65")}
        >
          © Copyright 2022. All Rights Reserved
        </Text>
        <Text
          size="md"
          className={cn("opacity-0.81 mb-px tracking-[-0.50px] text-white/65")}
        >
          |
        </Text>
        <Text
          size="md"
          className={cn("opacity-0.81 mb-px tracking-[-0.50px] text-white/65")}
        >
          <Link href={"/"}>Terms of condition</Link>
        </Text>
        <Text
          size="md"
          className={cn("opacity-0.81 mb-px tracking-[-0.50px] text-white/65")}
        >
          |
        </Text>
        <Text
          size="md"
          className={cn("opacity-0.81 mb-px tracking-[-0.50px] text-white/65")}
        >
          <Link href={"/"}>Privacy Policy</Link>
        </Text>
      </div>
    </div>
  );
}
