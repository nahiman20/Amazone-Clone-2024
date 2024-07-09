// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
// Pseudocode
// initialize an empty array to hold result
// use for loop
// if i is even and num is even
// append the number and print the result
// Loop from 1 to number:
// Multiply result by the current loop value
// Return result

function getOnlyEvens(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 === 0) {
    result.push(arr[i]);
    }
    }

    console.log(result);
}
getOnlyEvens([1, 2, 3, 6, 4, 8,]);
getOnlyEvens([0, 1, 2, 3, 4]);

// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

// pseudo
// first convert num to str and store in strNum
// then split and reverse then join
// if number greater than reversed nummber print ok ifnot print not ok 
function reverseCompare(number) {
    {
    if (number < 10 || number > 99) {
    console.log("Invalid input: only two-digit number");
    return;
    }
    }
    const reversedNumber = parseInt(
    number.toString().split("").reverse().join("")
    );

    if (number > reversedNumber) {
    console.log("Ok");
    } else {
    console.log("Not ok");
    }
}
reverseCompare(72);

// Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)

// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1
function factorial(number) {
    if (number < 0) {
    return "Factorial is undefined for negative numbers";
    } else if (number === 0) {
    return 1;
    } else {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
    }
}
    console.log(factorial(7));
    console.log(factorial(4)); 
    console.log(factorial(0));

// A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6
 //psudo
//  meera-array takes an array as inputs ans iteratats over each element
//  it cheakes if current element num is num *2 are presenet in array r. if both are found it returns false


function isMeeraArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        if (arr.includes(n * 2)) {
            console.log("I am NOT a Meera array");
            return;
        }
    }
    console.log("I am a Meera array");
}
const meeraArray1 = [3, 5, -2];
const meeraArray2 = [8, 3, 4];

isMeeraArray(meeraArray1); 
isMeeraArray(meeraArray2); 




