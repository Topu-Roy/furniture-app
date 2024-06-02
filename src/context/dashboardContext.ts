// import React, { createContext, useContext, useState, useCallback } from 'react';
// import { type Product } from '@prisma/client';

// interface ProductContextType {
//     products: Product[];
//     setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
//     open: boolean;
//     setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const ProductContext = createContext<ProductContextType | undefined>(undefined);

// export const useProductContext = () => {
//     const context = useContext(ProductContext);
//     if (!context) {
//         throw new Error('useProductContext must be used within a ProductProvider');
//     }
//     return context;
// };

// export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [open, setOpen] = useState(false);

//     const value = {
//         products,
//         setProducts,
//         open,
//         setOpen,
//     };

//     return <ProductContext.Provider value={ value }> { children } < /ProductContext.Provider>;
// };