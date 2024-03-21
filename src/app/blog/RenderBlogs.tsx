"use client";
import React, { useEffect, useState } from "react";
import { BlogType } from "./blogPostArray";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbWritingSign } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { Text } from "@/components";
import { scrollToTop } from "@/lib/utils";

type props = {
  blogs: BlogType[];
};

export default function RenderBlogs(props: props) {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 9;
  let totalPages = Math.ceil(props.blogs.length / itemPerPage);
  let lastIndex;

  useEffect(() => {
    setBlogs(props.blogs.slice(0, itemPerPage));
    totalPages = Math.ceil(props.blogs.length / itemPerPage);
  }, [props.blogs]);

  useEffect(() => {
    lastIndex = currentPage * itemPerPage;
    const paginatedBlog = props.blogs.slice(lastIndex - itemPerPage, lastIndex);
    setBlogs(paginatedBlog);
  }, [currentPage, props.blogs]);

  const PaginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    PaginationButtons.push(
      <Button
        key={i}
        variant={currentPage === i ? "default" : "outline"}
        onClick={() => handlePaginationClick(i)}
        className="rounded-full"
      >
        {i}
      </Button>,
    );
  }

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (pageNumber === totalPages) {
      setTimeout(() => {
        scrollToTop();
      }, 1);
    } else {
      scrollToTop();
    }
  };

  return (
    <div className="py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-4 pb-10">
        {blogs.map((item) => (
          <div
            key={item.id + " " + item.headline}
            className="flex w-full flex-col items-center justify-start space-y-3 rounded-lg border bg-white p-2"
          >
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={item.imageURL}
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
                <span>{item.postBy}</span>
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

            <Button
              className="h-14 w-full rounded-sm bg-slate-200"
              variant={"outline"}
            >
              Read more
            </Button>
          </div>
        ))}
      </div>

      <div className="mx-auto flex w-full items-center justify-center gap-3">
        {PaginationButtons}
      </div>
    </div>
  );
}
