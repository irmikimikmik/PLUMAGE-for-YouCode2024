import Product from "../components/Product";
import React, { useEffect, useState } from 'react';
import Filter from "../components/ProductFilter";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [GptSelectedColors, setSelectedColors] = useState([]);
    const [useSelectedColorsFilter, setUseSelectedColorsFilter] = useState(false); // Step 1: Toggle state
    const arcteryxColorOptions = [
        "Green", "Tatsu", "Blue", "Black", "Light Vitality", "Orange", "Grey", "Edziza", "Void",
        "Stone Wash", "Chloris", "Solitude II", "Graphite", "Solitude", "Forage", "Black Sapphire",
        "Lampyre", "Pytheas", "Smoke Bluff", "Natural", "Daybreak", "Vitality", "Canvas", "Iola",
        "Purple", "Euphoria", "Red", "Heritage", "Blue Tetra", "Dark Stone Wash", "Dark Magic",
        "Bordeaux", "Boxcar", "Yukon", "Yellow", "Brown", "Arabica", "Sand Flax", "Black Heather", "Cloud Heather"
    ];

    const handleSortChange = (event) => {
        const sortValue = event.target.value;
        // Implement sorting logic based on sortValue
        console.log(sortValue); // Placeholder: implement actual sorting
    };

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
        async function fetchChatPT4VisionOutput() {
            try {
                const response = await fetch('http://localhost:3001/openAIEndpoint');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSelectedColors(data.colors);
            } catch (error) {
                console.error('Fetching product data failed:', error);
            }
        }

        fetchProductData();
        fetchChatPT4VisionOutput();
    }, []);

    return (
        <div className="w-full pt-11">
            <h2>Recommended For You</h2>
            <Filter onSortChange={handleSortChange} />
            <hr />
            <div className="grid grid-cols-3 gap-0 m-auto">
                {products.map((product) => (
                    <Product key={product.analytics_name} product={product} />
                ))}
            </div>
        </div>
    );
}