import React from "react";
import RenderProduct from "./_components/renderProduct";
import DetailsAndReview from "./_components/detailsAndReview";
import RelatedProductCarousel from "./_components/relatedProductCarousel";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";
import { api } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Rating from "./_components/rating";
import Review from "./_components/review";
import CreateReview from "./_components/createReview";
import { cn } from "@/lib/utils";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = await api.product.getProductById({ productId: params.id });
  const reviews = await api.review.getReviews({ productId: params.id });

  if (!product || product === null) {
    return (
      <Text className="mx-auto mt-[6rem] w-full max-w-7xl text-center">
        Product Not Found
      </Text>
    );
  }

  const formatDate = (dateStr: Date) => {
    const date = new Date(dateStr);
    const withComma = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return withComma.replace(",", " ");
  };

  return (
    <>
      <section className="mt-[4rem] bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="mx-auto max-w-md shrink-0 overflow-hidden rounded-md lg:max-w-lg">
              <Image
                height={1000}
                width={1000}
                className="w-full"
                src={product.image || ""}
                alt={product.productTitle}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                {product.productTitle}
              </h1>
              <div className="mt-4 sm:flex sm:items-center sm:gap-4">
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                  ${product.price}
                </p>

                <div className="mt-2 flex items-center gap-2 sm:mt-0">
                  <Rating
                    rate={5}
                    className={"-mx-4 scale-75"}
                    readonly={true}
                  />
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    (5.0)
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    345 Reviews
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
                <Link
                  href="/cart"
                  className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  View cart
                </Link>

                <Button className="mt-4 flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 sm:mt-0">
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </Button>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-800 md:my-8" />

              {/* //TODO: Add Product description */}
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                Studio quality three mic array for crystal clear calls and voice
                recordings. Six-speaker sound system for a remarkably robust and
                high-quality audio experience. Up to 256GB of ultrafast SSD
                storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Reviews
            </h2>

            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <Rating rate={4} readonly={true} className="-mr-4 scale-75" />
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                (4)
              </p>
              <a
                href="#"
                className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
              >
                {" "}
                645 Reviews{" "}
              </a>
            </div>
          </div>

          <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
            <div className="shrink-0 space-y-4">
              <p className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                4.65 out of 5
              </p>
              <CreateReview
                productId={product.id}
                productTitle={product.productTitle}
              />
            </div>

            <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  5
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <a
                  href="#"
                  className="text-primary-700 dark:text-primary-500 w-8 shrink-0 text-right text-sm font-medium leading-none hover:underline sm:w-auto sm:text-left"
                >
                  239 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  4
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <a
                  href="#"
                  className="text-primary-700 dark:text-primary-500 w-8 shrink-0 text-right text-sm font-medium leading-none hover:underline sm:w-auto sm:text-left"
                >
                  432 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  3
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <a
                  href="#"
                  className="text-primary-700 dark:text-primary-500 w-8 shrink-0 text-right text-sm font-medium leading-none hover:underline sm:w-auto sm:text-left"
                >
                  53 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  2
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "5%" }}
                  ></div>
                </div>
                <a
                  href="#"
                  className="text-primary-700 dark:text-primary-500 w-8 shrink-0 text-right text-sm font-medium leading-none hover:underline sm:w-auto sm:text-left"
                >
                  32 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  1
                </p>
                <svg
                  className="h-4 w-4 shrink-0 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <a
                  href="#"
                  className="text-primary-700 dark:text-primary-500 w-8 shrink-0 text-right text-sm font-medium leading-none hover:underline sm:w-auto sm:text-left"
                >
                  13 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>
            </div>
          </div>

          {reviews.map((review, index) => (
            <div
              className={cn(
                "border-t-2 border-black/10",
                index === reviews.length - 1
                  ? "border-b-2 border-black/10"
                  : "",
              )}
              key={review.id}
            >
              <Review
                date={formatDate(review.date)}
                name={review.name}
                rating={review.rate}
                review={review.text}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-stone-200 sm:pb-8">
        <div className="mx-auto mt-[5rem] max-w-7xl space-y-4 py-4 md:space-y-8 md:py-6">
          {product ? (
            <>
              <RenderProduct product={product} />
              <div className="flex max-w-7xl flex-col items-start justify-start px-2 md:flex-row">
                <DetailsAndReview
                  product={product}
                  className="w-full rounded-xl bg-white p-2 md:w-[50%]"
                />
                <RelatedProductCarousel
                  productId={product.id}
                  productCategory={product.category}
                  className="mx-auto w-[90%] md:w-[47.5%]"
                />
              </div>
            </>
          ) : (
            <div className="mx-auto flex max-w-7xl items-center justify-center py-10 md:py-14 lg:py-16">
              <Heading>Product Not Found</Heading>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
