"use client"
import React from 'react'
import Product, { ProductType } from '@/components/product/productCard';
import { Button } from '@/components/ui/button';

type Props = {
    products: ProductType[],
}

export default function RenderProducts(props: Props) {

    const totalProducts = props.products.length;
    const productPerPage = 10;
    const totalPages = Math.round(totalProducts / productPerPage)
    const [productsToRender, setProductsToRender] = React.useState(props.products.slice(1, 10))

    function updateProducts(pageNumber: number) {
        let index = 10 * pageNumber;
        setProductsToRender(props.products.slice(index - 10, index))

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    let PaginationButtons: React.JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
        PaginationButtons.push(
            <Button
                onClick={() => updateProducts(i)}
            >
                {i}
            </Button>
        )
    }

    return (
        <div className="w-full">
            <div className="justify-center w-full gap-5 grid-cols-3 grid min-h-[auto]">
                {productsToRender.map(item => (
                    <Product
                        productTitle={item.productTitle}
                        image={item.image}
                        category={item.category}
                        color={item.color}
                        price={item.price}
                        tag={item.tag}
                        key={item.productTitle + 1}
                        status={item.status}
                        className='flex flex-col items-center justify-start w-full gap-[15px]'
                    />
                ))}
            </div>
            <div className="w-full pt-4 flex flex-row justify-center items-center gap-2">
                {PaginationButtons}
            </div>
        </div>
    )
}
