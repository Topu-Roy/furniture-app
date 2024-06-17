import React from "react";
import Blog from "@/app/blog/_components/blog";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";
import { blogPosts } from "@/app/blog/blogPostArray";

export default function ReadBlogSection() {
  const blogsMobile = blogPosts.slice(0, 2);
  const blogsTablet = blogPosts.slice(0, 4);
  const blogsDesktop = blogPosts.slice(0, 6);
  const blogsWideScreen = blogPosts.slice(0, 9);

  return (
    <section className="bg-white py-10 pt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-4 pb-4">
          <Heading className="text-center !font-semibold tracking-[-0.50px]">
            Read Our Latest Blog
          </Heading>
          <Text size="md" muted={true} className="text-center">
            We write various things related to furniture, from tips and what
            things I need to pay attention to when choosing furniture
          </Text>
        </div>

        {/* //* Mobile */}
        <div className="mx-auto w-full max-w-md grid-cols-1 gap-4 grid sm:hidden">
          {blogsMobile.map((item) => (
            <div key={`${item.id}-blog`}>
              <Blog blog={item} />
            </div>
          ))}
        </div>

        {/* //* Tablet */}
        <div className="mx-auto hidden w-full grid-cols-2 gap-4 sm:grid lg:hidden ">
          {blogsTablet.map((item) => (
            <div key={`${item.id}-blog`}>
              <Blog blog={item} />
            </div>
          ))}
        </div>

        {/* //* Laptop */}
        <div className="mx-auto hidden w-full grid-cols-3 gap-4 lg:grid xl:hidden ">
          {blogsDesktop.map((item) => (
            <div key={`${item.id}-blog`}>
              <Blog blog={item} />
            </div>
          ))}
        </div>

        {/* //* Desktop */}
        <div className="mx-auto hidden w-full grid-cols-3 gap-4 xl:grid">
          {blogsWideScreen.map((item) => (
            <div key={`${item.id}-blog`}>
              <Blog blog={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
