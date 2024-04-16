import React from "react";
import { Heading, Text } from "@/components";
import { blogPosts } from "../../blog/blogPostArray";
import Blog from "@/app/blog/blog";

export default function ReadBlogSection() {
  const blogs = blogPosts.slice(0, 3);

  return (
    <div className="bg-white py-10">
      <div className="flex w-full flex-col items-center justify-start gap-4 p-1">
        <Heading className="text-center !font-semibold tracking-[-0.50px]">
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
          <div key={`${item.id}-blog`}>
            <Blog blog={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
