## Cloudinary Storage

1. setup up a cloudinary account : https://cloudinary.com/users/register/free
2. check out their Node guide : http://cloudinary.com/documentation/node_integration#getting_started_guide
  - follow it
  - (you need to get your API keys, find them at https://cloudinary.com/console)
  - DO NOT GIT COMMIT YOUR API KEYS

3. get an image you have uploaded 

```js
const cloudinary = require('cloudinary') 

cloudinary.config({ 
  cloud_name: 'fakeName', 
  api_key: 'fakeKey', 
  api_secret: 'fakeSecret' 
})

cloudinary.uploader.upload('radiolariands.jpeg', function(result) { 
  console.log(result) 
})
```

Cool, got this response : 
```js
// response
{ public_id: 'geojastuh5g0vibhm8o8',
  version: 1490220497,
  signature: 'dd7425570d05f9892fdd30044938dc3697c84e4e',
  width: 400,
  height: 300,
  format: 'jpg',
  resource_type: 'image',
  created_at: '2017-03-22T22:08:17Z',
  tags: [],
  bytes: 24633,
  type: 'upload',
  etag: '1208302ed19bbc0e3f6a52f299ddfe4a',
  url: 'http://res.cloudinary.com/db7jm5eee/image/upload/v1490220497/geojastuh5g0vibhm8o8.jpg',
  secure_url: 'https://res.cloudinary.com/db7jm5eee/image/upload/v1490220497/geojastuh5g0vibhm8o8.jpg',
  original_filename: 'radiolariands' }
```

4. get `dotenv` set up to handle your keys (hiding them in the gitignored `.env` file)

5. get file a file upload set up with express and plug that into cloudinary
  - set up formidable
    - prove formidable can parse files
  - get file from formidable to be given to cloudinary

