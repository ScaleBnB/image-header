# imageCarousel

1) npm run seed
2) npm run build
3) npm run start

## API routes:

### Get all images for a listing:

#### GET listing/:id/images
Returns a JSON object with all images where id matches the listing id.
Example:

`{listing_id: 647382, listing_title: "Beautiful apartment in SoMa", listing_images: 
  [{image_id: 1, image_url: "imgurl.com/image1.jpg", image_caption: "Main bedroom"},
   {image_id: 2, image_url: "imgurl.com/image2.jpg", image_caption: "Garden Area"},
   {image_id: 3, image_url: "imgurl.com/image3.jpg", image_caption: "You can do yoga here"},
   {image_id: 4, image_url: "imgurl.com/image4.jpg", image_caption: "Basement pool table"},
   {image_id: 5, image_url: "imgurl.com/image5.jpg", image_caption: "Outdoor patio"}]
}`

### Post one:

#### POST listing/:id/images

Specify the user ID and password

Request body:

`{
"user_id": integer,
"image_url": string,
"image_caption": string
}`

##### Returns status 201.

### Update one:

#### PUT listing/:id/images

Request body:

`{
"user_id": integer,
"image_url": string,
"image_caption": string
}`

##### Returns status 201.

### Delete one:

#### DELETE listing/:id/images

`{
"user_id": integer
}`

##### Returns status 200.
