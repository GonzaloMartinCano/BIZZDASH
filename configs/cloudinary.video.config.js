const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

var storage = new CloudinaryStorage({
    cloudinary,
    params: {
        allowedFormats: ['mp4', 'mp4'],
        format: 'mp4',
        resource_type: 'video'
    },
})

const uploadCloud = multer({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 }})

// const uploadCloud = multer({ storage });

module.exports = uploadCloud