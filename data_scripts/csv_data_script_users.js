const fs = require('fs');
const file = "users.csv";

fs.writeFileSync(file, 'user_name\n');

const people = [
    `Jean Solinsky`,
    `Matt Bright`,
    `Pavel Pavlov`,
    `Sarah Margaret`,
    `Sandy Greg`
];



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 20e6; i++) {
    let randomPerson = getRandomInt(0, 4);
    fs.appendFileSync(file, `${people[randomPerson]}\n`);
    console.log('writing', i);
}