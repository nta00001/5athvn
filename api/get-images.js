const cloudinary = require('cloudinary').v2;

// Vercel automatically makes environment variables available
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = async (req, res) => {
  try {
    // Search for all assets in the 'aida-public' folder
    const searchResult = await cloudinary.search
      .expression('folder:aida-public')
      .sort_by('public_id', 'desc')
      .max_results(50) // Adjust as needed
      .execute();

    // Send the array of resources as the response
    res.status(200).json({ images: searchResult.resources });
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    res.status(500).json({ message: 'Failed to fetch images.', error: error.message });
  }
};
