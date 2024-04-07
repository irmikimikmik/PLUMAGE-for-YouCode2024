const express = require('express');
const port = process.env.PORT || 3001;
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const app = express();
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

// !!!/api/data
app.post('/api/data', (req, res) => {
    // You would save data to database or pass it to another service
    const newData = req.body;
    console.log(newData);
    res.status(201).send('Data created');
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

app.get('/colorRecommendation', (req, res) => {
    let randomColors = [];
    for (let i = 0; i < 3; i++) {
      randomColors.push(arcteryxColors[Math.floor(Math.random() * arcteryxColors.length)]);
    }
    res.json(randomColors);
  });