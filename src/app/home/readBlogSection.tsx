import React from "react";
import { Heading, Text } from "@/components";
import { blogPosts } from "../blog/blogPostArray";
import Image from "next/image";
import { TbWritingSign } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ReadBlogSection() {
  const blogs = blogPosts.slice(0, 3);

  return (
    <div className="py-10">
      <div className="flex w-full flex-col items-center justify-start gap-4 p-1">
        <Heading
          size="3xl"
          className="text-center !font-semibold tracking-[-0.50px]"
        >
          Read Our Latest Blog
        </Heading>
        <Text
          size="md"
          className="text-center tracking-[-0.50px] !text-gray-500"
        >
          We write various things related to furniture, from tips and what
          things I need to pay attention to when choosing furniture
        </Text>
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-4 pt-8">
        {blogs.map((item) => (
          <div
            key={item.id + " " + item.headline}
            className="flex w-full flex-col items-center justify-start space-y-3 rounded-lg border bg-white p-2"
          >
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={item.thumbnail}
                alt={item.headline}
                height={1024}
                width={1024}
                className="aspect-square"
              />
            </div>
            <Text
              size="lg"
              className="line-clamp-2 h-[3.5rem] text-center font-semibold"
            >
              {item.headline}
            </Text>

            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-2">
                <TbWritingSign size={20} />
                <span>{item.postDate}</span>
              </div>
              <div className="h-4 w-0.5 rounded-xl bg-black/50" />
              <div className="flex items-center justify-center gap-2">
                <MdDateRange size={20} />
                <span>{item.postDate}</span>
              </div>
            </div>

            <Text size="s" className="line-clamp-3  h-[3.7rem]">
              {item.article.intro}
            </Text>

            <Link href={`/blog/${item.id}`} className="w-full">
              <Button
                className="h-14 w-full rounded-sm"
                variant={"outline"}
              >
                Read more
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
