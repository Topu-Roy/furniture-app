import React from 'react'
import ProductHeader from './productHeader'
import { products } from './productArray'
import RenderProducts from './renderProducts'

export default function Products() {
    return (
        <div className="flex flex-col items-center justify-start w-3/4 gap-[49px]">
            <ProductHeader />
            <RenderProducts products={products} />
        </div>
    )
}
