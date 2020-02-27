# imageCarousel

1) npm run seed
2) npm run build
3) npm run start

## API routes:

### Get all images for a listing:

#### GET listing/:id/images
Returns a JSON object with all images where id matches the listing id.
Example:
`[
    {
        "id": 1035,
        "listing_id": 125,
        "image_url": "https://scalebnbimages.s3.us-east-2.amazonaws.com/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg",
        "image_caption": "You can store your things here",
        "user_id": 223361
    },
    {
        "id": 1036,
        "listing_id": 125,
        "image_url": "https://scalebnbimages.s3.us-east-2.amazonaws.com/jason-briscoe-AQl-J19ocWE-unsplash.jpg",
        "image_caption": "Top floor",
        "user_id": 1497359
    },
    {
        "id": 1037,
        "listing_id": 125,
        "image_url": "https://scalebnbimages.s3.us-east-2.amazonaws.com/jason-briscoe-AQl-J19ocWE-unsplash.jpg",
        "image_caption": "I have an amazing music collection!",
        "user_id": 816713
    },
    {
        "id": 1038,
        "listing_id": 125,
        "image_url": "https://scalebnbimages.s3.us-east-2.amazonaws.com/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg",
        "image_caption": "You can store your things here",
        "user_id": 1591488
    },
    {
        "id": 1039,
        "listing_id": 125,
        "image_url": "https://scalebnbimages.s3.us-east-2.amazonaws.com/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg",
        "image_caption": "You can store your things here",
        "user_id": 1507299
    },
    {
        "id": 1040,
        "listing_id": 125,
        "image_url": "https://scalebnbimages.s3.us-east-2.amazonaws.com/stephanie-harvey-PPA6wsuedeM-unsplash.jpg",
        "image_caption": "I have an amazing music collection!",
        "user_id": 762033
    },
    {
        "id": 1041,
        "listing_id": 125,
        "image_url": "https://scalebnbimages.s3.us-east-2.amazonaws.com/ostap-senyuk-mdHRaq_pwsI-unsplash.jpg",
        "image_caption": "You can store your things here",
        "user_id": 1288267
    }
]`

### Post one:

#### POST listing/:id/images

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
