const cloudinary = require('cloudinary') 
const express = require('express') 
const formidable = require('formidable') 

if (process.env !== 'production') require('dotenv').config()

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()

app.get('/images/new', (req, res) => {
  const form = `
    <form action="/images" enctype="multipart/form-data" method="post">
      <input type='file' name='fileupload' multiple="multiple" />

      <input type='submit' />
    </form>
  `

  res.send(form)
})

app.post('/images', (req, res) => {
  var form = new formidable.IncomingForm()

  form.on('file', function (name, file) {
    console.log('here', name, file)

    cloudinary.uploader.upload(file.path, (result) => { 
      res.send(result)
    })

  })

  form.parse(req, function (err, fields, files) {
    console.log('files', files) // this parse is necessary to activate the form.on
  })
})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening on ${PORT}`))

