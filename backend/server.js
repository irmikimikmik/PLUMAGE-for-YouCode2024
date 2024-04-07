const express = require('express');
const port = process.env.PORT || 3001;
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const axios = require('axios');
const GPT4VisionUrl = 'https://api.openai.com/v1/chat/completions';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // the domain of your frontend
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend's origin
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.post("/out", (req, res) => {
    res.status(200);
    res.send("OK");
});

// TODO OpenAI communicaiton should go here
// TODO Send a post request to https://api.openai.com/v1/chat/completions
// Make sure you have Content-Type = application/json as the header

app.get('/openAIEndpoint', async (req, res) => {

    const imageUrlAdaLovelace = "https://upload.wikimedia.org/wikipedia/commons/f/f5/Ada_lovelace_20k_54i.png";
    const arcteryxColorsString = "Green, Tatsu, Blue, Black, Light Vitality, Orange, Grey, Edziza, Void, Stone Wash, Chloris, Solitude II, Graphite, Solitude, Forage, Black Sapphire, Lampyre, Pytheas, Smoke Bluff, Natural, Daybreak, Vitality, Canvas, Iola, Purple, Euphoria, Red, Heritage, Blue Tetra, Dark Stone Wash, Dark Magic, Bordeaux, Boxcar, Yukon, Yellow, Brown, Arabica, Sand Flax, Black Heather, Cloud Heather."
    const gpt4VisionPrompt = "Among the following colors, which ones match the complexion, skin tone, contrast, eyebrow color, hair color etc. of the person in the picture the most? Please disregard the details about the background or the clothing items. Please list 3 colors, and make sure that they are different. After you list the three colours, start a new paragraph. In the new paragraph, explain why those three colors were picked in a very succinct way. The colors to pick from are: " + arcteryxColorsString;

    const requestBody = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": gpt4VisionPrompt
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": imageUrlAdaLovelace
                        }
                    }
                ]
            }
        ],
        "temperature": 0.7
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    };

    try {
        const response = await axios.post(GPT4VisionUrl, requestBody, { headers });
        const responseObject = response.data;
        const GPTResponse = JSON.stringify(responseObject.choices[0].message.content);
        res.send(GPTResponse);
    } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
        res.status(500).send('Internal Server Error');
    }
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
                    product.mainImage = '../../public/backgroundImage.png';
                    product.colour_images_map_ca.forEach(colorImageLine => {
                        let splittedData = colorImageLine.split(':::');
                        for (let i = 0; i < splittedData.length; i++) {
                            if (splittedData[i] == color) {
                                product.mainImage = splittedData[3];
                                console.log("color: " + splittedData[i]);
                                console.log("url: " + splittedData[i + 3]);
                                break;
                            }
                        }
                    });
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
