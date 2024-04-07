import Product from "@/components/Product";
import React, { useEffect, useState } from 'react';
import Filter from "@/components/ProductFilter"

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProductData() {
            try {
                const response = await fetch('http://localhost:3001/productArray');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data); // Make sure this data is an array of unique products
            } catch (error) {
                console.error('Fetching product data failed:', error);
            }
        }

        fetchProductData();
    }, []);

    return (
        <div className="pt-10 space-y-6">
            <h2>Recommended For You</h2>
            <Filter />
            <div className="grid grid-cols-3 gap-0 m-auto">
                    {products.map((product) => (
                        <Product key={product.analytics_name} product={product} />
                    ))}
            </div>
        </div>
    );
}
