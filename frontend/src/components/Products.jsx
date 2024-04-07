import Product from "../components/Product";
import React, { useEffect, useState } from 'react';
import Filter from "@/components/ProductFilter"
import Image from "next/image";
import stores_list from "../../public/stores.png";
import styles from "@/styles/products.css"

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
                const response = await fetch('http://localhost:3001/productGptFilteredArray');
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
        // fetchChatPT4VisionOutput();
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
            <h2>Products For You</h2>
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
                        <h2>{selectedProduct.analytics_name}</h2>
                        <div className="content-wrapper">
                            <div className="left-content">
                                {showIframe ? (
                                    <iframe
                                        title="Arcteryx Sweater Model"
                                        src="https://sketchfab.com/models/20fea073ecaf43b0ae77015511781be4/embed"
                                        width="100%"
                                        height="500"
                                        frameBorder="0"
                                        allowFullScreen
                                        mozallowfullscreen="true"
                                        webkitallowfullscreen="true"
                                        allow="autoplay; fullscreen; xr-spatial-tracking"
                                        execution-while-out-of-viewport
                                        execution-while-not-rendered
                                        web-share
                                    ></iframe>
                                ) : (
                                    <img width="100%" src={selectedProduct.mainImage} alt="Product Image" />
                                )}
                            </div>
                            <div className="right-content">
                                <Image src={stores_list} alt="Company Logo" id="stores_list" />
                            </div>
                        </div>
                        <button onClick={toggleContent} id="toggleContent-btn">
                            {showIframe ? 'Show 2D' : 'Show 3D'}
                        </button>
                        <p id="product-link"><a href=""><u>Product link</u></a></p>
                        <button onClick={() => setShowPopup(false)} id="close-btn">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}