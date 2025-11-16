console.log('\n--- [server.cjs] IS RUNNING ---\n');
// Use require for environment variables in Node.js server
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

// Configure Cloudinary SDK
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// This is the same logic as in /api/get-images.js
app.get('/api/get-images', async (req, res) => {
  try {
    const searchResult = await cloudinary.search
      .expression('folder:aida-public')
      .sort_by('public_id', 'desc')
      .max_results(50)
      .execute();
    console.log('[server.js] Cloudinary search result:', JSON.stringify(searchResult, null, 2));
    res.status(200).json({ images: searchResult.resources });
  } catch (error) {
    console.error('[server.js] Error fetching images from Cloudinary:', error);
    res.status(500).json({ message: 'Failed to fetch images.', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`[server.js] Local API server listening on http://localhost:${PORT}`);
});
