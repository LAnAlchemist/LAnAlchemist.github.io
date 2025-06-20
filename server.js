const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 3000;

// Enable CORS for your domain
app.use(cors({
    origin: 'http://localhost:8000' // Change this to your actual domain
}));

// Proxy endpoint for tweets
app.get('/api/tweets', async (req, res) => {
    try {
        const response = await fetch('https://api.twitter.com/2/users/by/username/alchemist_an/tweets?max_results=2', {
            headers: {
                'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch tweets' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 