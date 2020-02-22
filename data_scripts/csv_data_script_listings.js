const fs = require('fs');
const file = "listings.csv";

fs.writeFileSync(file, 'listing_name\n');

const listings = [
    `Apartment in SoMa. Paradise in the middle of the city`,
    `Bright Condo. Walkable to BART`,
    `Feel like home in this house!`,
    `Budget stay. Perfect for families`,
    `The most amazing location. You will love it here`
];



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 10e6; i++) {
    let randomListing = getRandomInt(0, 4);
    fs.appendFileSync(file, `${listings[randomListing]}\n`);
    console.log('writing', i);
}