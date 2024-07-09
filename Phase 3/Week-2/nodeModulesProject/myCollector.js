// myCollector.js
const myMultiplier = require("./myFirst");
const myFirstModule = require("./myFirst");
const mySecondModule = require("./mySecond");

// Call the functions from both modules with the value 5
const resultFromFirst = myFirstModule(5);
const resultFromSecond = mySecondModule.myMultiplier(5, 5);

// Display the results
console.log(` myFirstModule: ${resultFromFirst}`);
console.log(`mySecondModule: ${resultFromSecond}`);


// myCollector.js
const fs = require('fs'); // Import the built-in fs module
const myFirst = require('./myFirst');
const mySecond = require('./mySecond');

// Call the functions from both modules with the value 14
const FromFirst = myFirstModule(14);
const FromSecond = mySecondModule.myMultiplier(14
    
);

// Create or append to the "results.txt" file
fs.appendFileSync('results.txt', `The value of 14 when passed through the myMultiplier function is ${FromFirst}.\n`);

fs.appendFileSync('results.txt', `The value of 14 when passed through the myMultiplier function (from mySecondModule) is ${FromSecond}.\n`);

console.log('Results written to results.txt');
