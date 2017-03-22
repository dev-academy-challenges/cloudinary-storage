const cloudinary = require('cloudinary') 

if (process.env !== 'production') require('dotenv').config()

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

cloudinary.uploader.upload('radiolariands.jpeg', function(result) { 
  console.log(result) 
})

