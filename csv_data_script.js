const fs = require('fs');
const file = "scalebnb_dummy_data_1.csv";

const images = ['https://scalebnbimages.s3.us-east-2.amazonaws.com/stephanie-harvey-PPA6wsuedeM-unsplash.jpg', 'https://scalebnbimages.s3.us-east-2.amazonaws.com/kevin-fernandez-it-_C9yfRIM-unsplash.jpg', 'https://scalebnbimages.s3.us-east-2.amazonaws.com/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg', 'https://scalebnbimages.s3.us-east-2.amazonaws.com/jason-briscoe-AQl-J19ocWE-unsplash.jpg', 'https://scalebnbimages.s3.us-east-2.amazonaws.com/ostap-senyuk-mdHRaq_pwsI-unsplash.jpg'];

fs.writeFileSync(file, 'listing_id,user_id,image_url,image_caption\n');

const listings = [
    `Apartment in SoMa. Paradise in the middle of the city`,
    `Bright Condo. Walkable to BART`,
    `Feel like home in this house!`,
    `Budget stay. Perfect for families`,
    `The most amazing location. You will love it here`
];

const descriptions = [`Great views!`,
    `Top floor`,
    `You can store your things here`,
    `Very cozy`,
    `I have an amazing music collection!`,
    `There is a garden outside`
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 5e6; i++) {
    let listingOwner = getRandomInt(0, 10e6)
    let randomAmount = getRandomInt(5, 10);
    for (let j = 0; j <= randomAmount; j++) {
        let randomPhoto = getRandomInt(0, 4);
        let randomPhotoDescription = getRandomInt(0, 4);
        fs.appendFileSync(file, `${i},${listingOwner},${images[randomPhoto]},${descriptions[randomPhotoDescription]}\n`);
    }
    console.log('writing', i);
}