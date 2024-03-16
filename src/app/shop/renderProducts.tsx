"use client"
import React from 'react'
import Product from '@/components/product/productCard';
import { Button } from '@/components/ui/button';
import { ProductType, useShopStore } from '@/zustand/shop/shopStore';

type Props = {
    products: ProductType[],
}

export default function RenderProducts(props: Props) {

    // Zustand
    const { selectedCategory, selectedColor, selectedTag } = useShopStore();

    // Local state
    const [filteredProducts, setFilteredProducts] = React.useState(props.products);
    const [currentPage, setCurrentPage] = React.useState(1);
    const productsPerPage = 12;

    React.useEffect(() => {
        let tempFilteredProducts = [...props.products];

        if (selectedCategory !== 'All') {
            tempFilteredProducts = tempFilteredProducts.filter(item => item.category === selectedCategory);
        }

        if (selectedColor !== undefined) {
            tempFilteredProducts = tempFilteredProducts.filter(item => item.color === selectedColor);
        }

        if (selectedTag !== 'All') {
            tempFilteredProducts = tempFilteredProducts.filter(item => item.tag === selectedTag);
        }

        setFilteredProducts(tempFilteredProducts);
    }, [selectedCategory, selectedColor, selectedTag]);

    // Pagination
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const productsToRender = filteredProducts.slice(indexOfLastProduct - productsPerPage, indexOfLastProduct);

    const handlePaginationClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const PaginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
        PaginationButtons.push(
            <Button
                key={i}
                variant={currentPage === i ? 'default' : 'outline'}
                onClick={() => handlePaginationClick(i)}
            >
                {i}
            </Button>
        );
    }

    return (
        <div className="w-full">
            <div className="w-full h-full justify-center gap-5 grid-cols-3 grid min-h-[auto]">
                {productsToRender.map(item => (
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
