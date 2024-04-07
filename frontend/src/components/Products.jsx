import Product from "@/components/Product";
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import Filter from "@/components/ProductFilter";
import styles from "@/styles/products.css";
=======
import Filter from "@/components/ProductFilter"
import Image from "next/image";
import stores_list from "../../public/stores.png";
import styles from "@/styles/products.css"
>>>>>>> bb77a53d (Add stores to popup)

export default function Products() {
    const [products, setProducts] = useState([]);
    const [GptSelectedColors, setSelectedColors] = useState([]);
    const [useSelectedColorsFilter, setUseSelectedColorsFilter] = useState(false); // Step 1: Toggle state
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showIframe, setShowIframe] = useState(true);
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

    const togglePopup = (product) => {
        setSelectedProduct(product);
        setShowPopup(!showPopup);
    };

    const toggleContent = () => {
        setShowIframe(!showIframe);
    };
    
    return (
        <div className="w-full pt-11">
            <h2>Recommended For You</h2>
            <Filter onSortChange={handleSortChange} />
            <hr />
            <div className="grid grid-cols-3 gap-0 m-auto">
                {products.map((product) => (
                    <div key={product.analytics_name} onClick={() => togglePopup(product)}>
                        <Product product={product} />
                    </div>
                ))}
            </div>
            {showPopup && selectedProduct && (
                <div className="popup">
                    <div className="popup_inner">
                        <h1>{selectedProduct.name}</h1>
                        <div className="content-wrapper">
                            {showIframe ? (
                                <iframe src="https://rte-web-viewer.substance3d.com/model/https%3A%2F%2Fcdn.substance3d.com%2Fv2%2Ffiles%2Fshare%2F08ad1941-d289-4f7f-a7de-c2ced88ff4a2%3Fencrypted%3Dtrue" width="50%" height="500" frameBorder="0" allowFullScreen></iframe>
                            ) : (
                                <img src={selectedProduct.imageUrl} alt="Product Image" />
                            )}
                            <button onClick={toggleContent}>
                                {showIframe ? 'Show Static Image' : 'Show 3D'}
                            </button>
                            <Image width="10%" src={stores_list} alt="Company Logo" id="stores_list" />
                        </div>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}