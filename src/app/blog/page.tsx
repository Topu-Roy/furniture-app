import React from "react";
import { Text, Heading } from "../../components";
import NavBar from "@/components/NavBar";
import RenderBlogs from "./RenderBlogs";
import { blogPosts } from "./blogPostArray";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="mt-[5rem] bg-gray-50 pt-8">
      <div className="flex w-full flex-col items-center justify-start gap-2 pt-1">
        <Heading size="3xl" className="text-center tracking-[-0.50px]">
          Read Our Latest Blog
        </Heading>
        <Text
          size="lg"
          className="text-center leading-[35px] tracking-[-0.50px] !text-gray-500"
        >
          We write various things related to furniture, from tips and what
          things <br />I need to pay attention to when choosing furniture
        </Text>
      </div>
      <RenderBlogs blogs={blogPosts} />
    </div>
  );
}
