const express = require('express');
const port = process.env.PORT || 3001;
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // the domain of your frontend
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// !!!/api/data
app.get('/api/data', (req, res) => {
    // You would fetch data from database or another service
    const data = { message: 'This is your data' };
    res.json(data);
});


app.post("/out", (req, res) => {
    res.status(200);
    res.send("OK");
});

// Endpoint to serve the products data
app.get('/products', (req, res) => {
    // Set the path to the JSON file
    const filePath = path.join(__dirname, 'productData.json');

    // Read the JSON file and parse it
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading product data');
        }
        // Send the JSON data as response
        res.send(JSON.parse(data));
    });
});

const arcteryxColors = [
    "Green", "Tatsu", "Blue", "Black", "Light Vitality", "Orange", "Grey",
    "Edziza", "Void", "Stone Wash", "Chloris", "Solitude II", "Graphite",
    "Solitude", "Forage", "Black Sapphire", "Lampyre", "Pytheas", "Smoke Bluff",
    "Natural", "Daybreak", "Vitality", "Canvas", "Iola", "Purple", "Euphoria",
    "Red", "Heritage", "Blue Tetra", "Dark Stone Wash", "Dark Magic", "Bordeaux",
    "Boxcar", "Yukon", "Yellow", "Brown", "Arabica", "Sand Flax", "Black Heather",
    "Cloud Heather"
];

let latestRandomColors = [];

app.get('/generateColorRecommendation', (req, res) => {
    let randomColors = new Set();
    while (randomColors.size < 3) {
        const color = arcteryxColors[Math.floor(Math.random() * arcteryxColors.length)];
        randomColors.add(color);
    }
    latestRandomColors = [...randomColors];
    res.json(latestRandomColors);
});

app.get('/latestColorRecommendation', async (req, res) => {
    res.json(latestRandomColors);
});

let productRecommendations = [];

app.get('/productRecommendationsBasedOnColor', async (req, res) => {
    try {
        // Fetch the product data from the products endpoint
        const productResponse = await fetch('http://localhost:3001/products');
        const productData = await productResponse.json();

        if (!productData.response || !productData.response.docs) {
            throw new Error('Invalid product data structure');
        }


        latestRandomColors.forEach(color => {
            // Iterate over each product
            productData.response.docs.forEach(product => {
                // Check if the color is in the colour_images_map_ca of the product
                let colorExists = product.colour_images_map_ca.some(colorString => {
                    return colorString.toLowerCase().includes(color.toLowerCase());
                });
                // If color exists, push the analytics_name into the recommendations
                if (colorExists) {
                    productRecommendations.push(product);
                }
            });
        });

        // Remove duplicates TODO
        let uniqueProductRecommendations = [];

        productRecommendations.forEach(product => {
            // Check if there is already a product with the same analytics_name in the uniqueProductRecommendations
            const isExisting = uniqueProductRecommendations.some(uniqueProduct => uniqueProduct.analytics_name === product.analytics_name);

            // If the product does not exist, add it to the uniqueProductRecommendations
            if (!isExisting) {
                uniqueProductRecommendations.push(product);
            }
        });

        // Return the unique recommendations
        res.json(uniqueProductRecommendations);
    } catch (error) {
        // If there's an error, send back a 500 server error response
        res.status(500).json({ error: error.message });
    }
});