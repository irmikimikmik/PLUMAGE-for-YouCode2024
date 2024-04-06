const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv').config();

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