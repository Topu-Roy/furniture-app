"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  createProductPostBodySchema,
  createProductPostBodyType,
  category,
  color,
  tag,
} from "@/zod/schema";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<createProductPostBodyType>({
    resolver: zodResolver(createProductPostBodySchema),
  });

  const onSubmit: SubmitHandler<createProductPostBodyType> = async (data) => {
    const res = await fetch("api/product/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const id: unknown = res.json();
    console.log(id);
    console.log(data);
  };

  return (
    <div className="mx-auto mt-[6rem] max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          placeholder="Product Title"
          type="text"
          {...register("productTitle")}
        />
        {errors.productTitle ? (
          <span className="text-rose-600">{errors.productTitle.message}</span>
        ) : null}

        <Input
          placeholder="Product description"
          type="text"
          {...register("description")}
        />
        {errors.description ? (
          <span className="text-rose-600">{errors.description.message}</span>
        ) : null}
        <Input
          placeholder="Price"
          type="number"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price ? (
          <span className="text-rose-600">{errors.price.message}</span>
        ) : null}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <Select onValueChange={onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={"Select color"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{"Color"}</SelectLabel>
                  {color.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
          name={"color"}
        />
        {errors.color ? (
          <span className="text-rose-600">{errors.color.message}</span>
        ) : null}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <Select onValueChange={onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={"Select category"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{"Category"}</SelectLabel>
                  {category.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
          name={"category"}
        />
        {errors.category ? (
          <span className="text-rose-600">{errors.category.message}</span>
        ) : null}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <Select onValueChange={onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={"Select tag"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{"Tag"}</SelectLabel>
                  {tag.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
          name={"tag"}
        />
        {errors.tag ? (
          <span className="text-rose-600">{errors.tag.message}</span>
        ) : null}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
