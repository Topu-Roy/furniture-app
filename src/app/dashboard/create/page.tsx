"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { createProduct } from "@/actions/productAction"
import { CreateProductPostBodySchema, type CreateProductPostBodyType } from "@/zod/create"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { category, color, status, tag } from "@/zod/common"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Text } from "@/app/_components/text"

export default function CreateProduct() {
    const { getUser, isLoading } = useKindeBrowserClient()
    const user = getUser();
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<CreateProductPostBodyType>({
        resolver: zodResolver(CreateProductPostBodySchema)
    })

    //* Checking if user after loading is finished
    //* Otherwise, initially user object is null and redirect to login page
    useEffect(() => {
        if (!isLoading) {
            if (!user) router.replace("/api/auth/login?post_login_redirect_url=/authcallback")
        }
    }, [isLoading])

    async function onSubmit(data: CreateProductPostBodyType) {
        if (!user) return router.replace("/api/auth/login?post_login_redirect_url=/authcallback")

        const response = await createProduct({
            productTitle: data.productTitle,
            description: data.description,
            category: data.category,
            color: data.color,
            status: data.status,
            tag: data.tag,
            price: data.price,
            createdBy: user.id
        })

        if (response.status !== 'SUCCESS') {
            return toast({
                variant: "destructive",
                title: "Something went wrong",
                description: "Please try again later",
            })
        }

        toast({
            title: "Success",
            description: "Product created successfully",
        })

        router.replace(`/dashboard/create/update?id=${response.product?.id}`);
    }

    return (
        <div className="w-[100dvw] lg:w-[80dvw] px-2 max-w-7xl mx-auto">
            <Form {...form}>
                <Card className='py-8 divide-y space-y-4'>
                    <Text muted size='max' className='text-center'>Create a new product</Text>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-[65%] px-5 lg:px-0 mx-auto space-y-6 pt-4">
                        <FormField
                            control={form.control}
                            name="productTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel><span className="text-rose-500">*</span>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="title" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Provide a title for the product.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel><span className="text-rose-500">*</span>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="description"  {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Give a brief description of the product.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel><span className="text-rose-500">*</span>Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="price"
                                            {...field}
                                            onChange={(e) => field.onChange(Number(e.target.value.replace(/[^0-9]/, "")))}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Minimum price is $5.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 lg:grid-cols-3 items-center">
                            <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel><span className="text-rose-500">*</span>Color</FormLabel>
                                        <FormControl>
                                            <Select {...field} onValueChange={field.onChange}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a color" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Available Colors</SelectLabel>
                                                        {color.map(color => (
                                                            <SelectItem key={color} value={color}>{color}</SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel><span className="text-rose-500">*</span>Category</FormLabel>
                                        <FormControl>
                                            <Select {...field} onValueChange={field.onChange}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Available categories</SelectLabel>
                                                        {category.map(category => (
                                                            <SelectItem key={category} value={category}>{category}</SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel><span className="text-rose-500">*</span>Status</FormLabel>
                                        <FormControl>
                                            <Select {...field} onValueChange={field.onChange}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Available categories</SelectLabel>
                                                        {status.map(status => (
                                                            <SelectItem key={status} value={status}>{status}</SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tag"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel><span className="text-rose-500">*</span>Tag</FormLabel>
                                        <FormControl>
                                            <Select {...field} onValueChange={field.onChange}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a tag" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Available categories</SelectLabel>
                                                        {tag.map(tag => (
                                                            <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </Card>
            </Form>
        </div>
    )
}
