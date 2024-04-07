import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import placeholder from '../../public/backgroundImage.png';
import Star from '../../public/star.svg';

export default function Product() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Function to fetch product data
        async function fetchProductData() {
            try {
                const response = await fetch('http://localhost:3001/productRecommendationsBasedOnColor');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data); // Set the products in state
            } catch (error) {
                console.error('Fetching product data failed:', error);
            }
        }

        fetchProductData();
    }, []);

    return (
        <div>
            {products.map((product, index) => (
                // Using product name and index as key if product names are unique
                <div key={product + index} className="px-9 pt-9 pb-4">
                    <Image src={placeholder} width="245px" height="327px" alt="Product Image" />
                    <div>
                        <div className="space-y-2 mt-6">
                            <p className="uppercase font-bold">{product.analytics_name}</p>
                            <p>{product.description}</p>
                        </div>
                        <div className="space-y-2 mt-6">
                            <p className="font-bold">${parseFloat(product.price_ca).toFixed(2)}</p>
                            <div className="flex">
                                <Image width="15px" src={Star} alt="Star Rating" />
                                <Image width="15px" src={Star} alt="Star Rating" />
                                <Image width="15px" src={Star} alt="Star Rating" />
                                <Image width="15px" src={Star} alt="Star Rating" />
                                <Image width="15px" src={Star} alt="Star Rating" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}