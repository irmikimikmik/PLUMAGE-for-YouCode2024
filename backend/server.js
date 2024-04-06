const express = require('express');
const port = process.env.PORT || 3001;
const axios = require('axios');
const router = express.Router();
const app = express();
const cors = require('cors');
require('dotenv').config();

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

// axios is what allows us to communicate with OpenAI
// axios.get('https://api.example.com/data').then(response => { console.log(response.data); }).catch(error => {
//     console.error('Error fetching data:', error);
// });

app.post('/try-on', async (req, res) => {
    const userQuery = req.body.query; // Assuming you send the data from frontend in a property named 'query' !!!

    try {
        // or use https://api.openai.com/v1/engines/gpt-3.5-turbo-16k-0613/completions
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
            prompt: userQuery,
            max_tokens: 150,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
        console.log("called https://api.openai.com/v1/engines/davinci/completions: ");
        console.log("got: "+ JSON.stringify(res.json(response.data)));
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).send('Failed to get response from OpenAI API');
    }
});

// !!! TODO: This needs to go on the frontend.
// fetch('/api/ask-openai', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ query: 'Your question for OpenAI here' }),
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

module.exports = router;