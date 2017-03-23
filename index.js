const cloudinary = require('cloudinary') 
const express = require('express') 
const formidable = require('formidable') 

const uploadForm = require('./form')

if (process.env !== 'production') require('dotenv').config()

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()

app.get('/images/new', (req, res) => {
  res.send(uploadForm)
})

app.post('/images', (req, res) => {
  var form = new formidable.IncomingForm()

  form.on('file', function (name, file) {
    // TODO - maybe check it's an image here by inspect the file object?

    cloudinary.uploader.upload(file.path, (result) => { 
      // TODO - do something better than this!
      res.send(result)
    })

  })

  form.parse(req, function (err, fields, files) {
    console.log('files', files) // this parse is necessary to activate the form.on
  })
})

module.exports = app

