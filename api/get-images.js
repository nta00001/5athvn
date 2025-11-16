const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

module.exports = async (req, res) => {
  try {
    const imageList = await imagekit.listFiles({});
    res.status(200).json({ images: imageList });
  } catch (error) {
    console.error('Error fetching images from ImageKit:', error);
    res.status(500).json({ message: 'Failed to fetch images.', error: error.message });
  }
};