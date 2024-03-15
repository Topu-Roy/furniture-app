"use client"
import React from 'react'
import Product from '@/components/product/productCard';
import { Button } from '@/components/ui/button';
import { ProductType, useShopStore } from '@/zustand/shop/shopStore';

type Props = {
    products: ProductType[],
}

export default function RenderProducts(props: Props) {

    // Pagination
    const totalProducts = props.products.length;
    const productPerPage = 12;
    const totalPages = Math.round(totalProducts / productPerPage)

    // Zustand
    const products = useShopStore((state) => state.products);
    const selectedCategory = useShopStore((state) => state.selectedCategory);
    const selectedColor = useShopStore((state) => state.selectedColor);
    const selectedTag = useShopStore((state) => state.selectedTag);
    const { setProducts } = useShopStore();

    // Active Buttons
    const [currentPageIndicator, setCurrentPageIndicator] = React.useState(1);

    function updateProducts(pageNumber: number) {
        let index = productPerPage * pageNumber;
        setProducts(props.products.slice(index - productPerPage, index));

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        setCurrentPageIndicator(pageNumber);
    }

    let PaginationButtons: React.JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
        PaginationButtons.push(
            <Button
                variant={currentPageIndicator === i ? 'default' : 'outline'}
                key={i + Math.random()}
                onClick={() => updateProducts(i)}
            >
                {i}
            </Button>
        )
    }


    React.useEffect(() => {
        setProducts(props.products.slice(0, productPerPage))
    }, [])


    return (
        <div className="w-full">
            <div className="justify-center w-full gap-5 grid-cols-3 grid min-h-[auto]">
                {products.map(item => (
                    <Product
                        productTitle={item.productTitle}
                        image={item.image}
                        category={item.category}
                        color={item.color}
                        price={item.price}
                        tag={item.tag}
                        key={item.productTitle + item.image}
                        status={item.status}
                    />
                ))}
            </div>
            <div className="w-full pt-4 flex flex-row justify-center items-center gap-2">
                {PaginationButtons}
            </div>
        </div>
    )
}
