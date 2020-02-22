const fs = require('fs');
const file = "user-numbers-2.csv";

fs.writeFileSync(file, 'user_id\n');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 10000001; i <= 20e6; i++) {
    fs.appendFileSync(file, `${getRandomInt(1, 20e6)}\n`);
    console.log('writing', i);
}