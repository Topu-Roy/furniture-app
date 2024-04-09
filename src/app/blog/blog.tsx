import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components";
import { Button } from "@/components/ui/button";
import { TbWritingSign } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { type BlogType } from "./blogPostArray";

type Props = {
  blog: BlogType;
};

export default function Blog({ blog }: Props) {
  const { id, headline, thumbnail, article, postDate, author } = blog;
  return (
    <div
      key={id + " " + headline}
      className="flex w-full flex-col items-center justify-start space-y-3 rounded-lg border bg-white p-2"
    >
      <div className="aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt={headline}
          height={1024}
          width={1024}
          className="aspect-square"
        />
      </div>
      <Text
        size="lg"
        className="line-clamp-2 h-[3.5rem] text-center font-semibold"
      >
        {headline}
      </Text>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <TbWritingSign size={20} />
          <span>{author.name}</span>
        </div>
        <div className="h-4 w-0.5 rounded-xl bg-black/50" />
        <div className="flex items-center justify-center gap-2">
          <MdDateRange size={20} />
          <span>{postDate}</span>
        </div>
      </div>

      <Text size="s" className="line-clamp-3  h-[3.7rem]">
        {article.intro}
      </Text>

      <Link href={`/blog/${id}`} className="w-full">
        <Button
          className="h-14 w-full rounded-sm bg-slate-200"
          variant={"outline"}
        >
          Read more
        </Button>
      </Link>
    </div>
  );
}
