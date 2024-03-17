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
    const { selectedCategory, selectedColor, selectedTag, selectedMinPrice, selectedMaxPrice, selectedSliderPrice, selectedSorting } = useShopStore();

    // Local state
    const [filteredProducts, setFilteredProducts] = React.useState(props.products);
    const [currentPage, setCurrentPage] = React.useState(1);
    const productsPerPage = 12;

    // Filtering Logic
    React.useEffect(() => {
        let tempFilteredProducts = [...props.products];

        if (selectedCategory !== 'All') tempFilteredProducts = tempFilteredProducts.filter(item => item.category === selectedCategory);
        if (selectedColor !== undefined) tempFilteredProducts = tempFilteredProducts.filter(item => item.color === selectedColor);
        if (selectedTag !== 'All') tempFilteredProducts = tempFilteredProducts.filter(item => item.tag === selectedTag);


        if (selectedMinPrice !== 0 && selectedMaxPrice !== 2000) {
            tempFilteredProducts = tempFilteredProducts.filter((item) => {
                if (item.price !== undefined) {
                    return item.price <= selectedMinPrice && item.price <= selectedMaxPrice
                } else {
                    return true;
                }
            })
        }

        if (selectedSliderPrice !== 2000) {
            tempFilteredProducts = tempFilteredProducts.filter((item) => {
                if (item.price !== undefined) {
                    return item.price <= selectedSliderPrice;
                } else {
                    return true;
                }
            })
        }

        if (selectedSorting === 'price') {
            tempFilteredProducts.sort((a, b) => {
                if (a.price === undefined && b.price === undefined) return 0;
                if (a.price === undefined) return 1;
                if (b.price === undefined) return -1;

                return a.price - b.price;
            })
        }

        setFilteredProducts(tempFilteredProducts);
        setCurrentPage(1);
    }, [selectedCategory, selectedColor, selectedTag, selectedMinPrice, selectedMinPrice, selectedSliderPrice, selectedSorting]);

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
