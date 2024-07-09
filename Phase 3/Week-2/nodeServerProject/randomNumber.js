
// randomNumber.js
function random() {
    return Math.random(); 
}

// Execute the function
const randomNumber = random();

// Log the variable on the console
console.log(`Random number: ${randomNumber}`);

// Export the module
module.exports = { random };
