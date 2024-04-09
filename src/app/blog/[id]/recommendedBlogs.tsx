import React from "react";
import { type BlogType } from "../blogPostArray";
import Blog from "../blog";

type Props = {
  currentBlogId: number;
  blogs: Array<BlogType>;
};

export default function RecommendedBlogs({ blogs, currentBlogId }: Props) {
  function shuffleArray(array: Array<BlogType>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const blogsWithoutCurrentOne = blogs.filter(
    (product) => product.id !== currentBlogId,
  );

  const blogsToRender = shuffleArray(blogsWithoutCurrentOne);

  return (
    <div className="flex items-center justify-between gap-4">
      {blogsToRender.slice(5, 8).map((item) => (
        <Blog blog={item} key={item.id} />
      ))}
    </div>
  );
}