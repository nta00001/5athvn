console.log('\n--- [server.cjs] IS RUNNING ---\n');
// Use require for environment variables in Node.js server
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ImageKit = require('imagekit');

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

// Configure ImageKit SDK
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// This is the same logic as in /api/get-images.js
app.get('/api/get-images', async (req, res) => {
  try {
    const imageList = await imagekit.listFiles({});
    res.status(200).json({ images: imageList });
  } catch (error) {
    console.error('[server.js] Error fetching images from ImageKit:', error);
    res.status(500).json({ message: 'Failed to fetch images.', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`[server.js] Local API server listening on http://localhost:${PORT}`);
});