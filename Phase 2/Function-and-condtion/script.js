// Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function
function myFirst() {
    console.log("Hello");
}
myFirst();
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// console
// ○ Feel free to give any value as a parameter in your function
function mySecond(parameter) {
    console.log(parameter);
}
mySecond("this a test");

// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console
function myThird(parameter) {
    mySecond(parameter);
}
myThird("parameter");

// Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.
const students = [2, 3, 4];
function myForth(array) {
  console.log(array[0]);
}
myForth([2, 3, 4]);

// Write a function named myFifth that takes an array with two numbers in it as a parameter and
// prints the sum of the two numbers on console
function myFifth(num) {
    if (num.length === 2 && typeof num[0] === "number" && typeof num[1]) {
    let sum = num[0] + num[1];
    console.log(sum);
    } else {
    console.log("wrong");
}
}
myFifth([5, 3]);

// Write a function that takes an integer minutes and converts it to seconds
// function MintoSec (minutes)
function MintoSec(a) {
  let result = a * 60;
    if (a > 0 && typeof a === "number") {
    console.log(result);
    } else console.log("put neg num");
}
MintoSec(20);

//     Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.
function incrementIfNumber(input) {
    if (typeof input === "number") {
    return input + 1;
    } else {
    return "Input must be a number";
    }
}

    console.log( incrementIfNumber(5));

// Write a function that takes the base and height of a triangle and returns its area.

function calculateTriangleArea(b, h) {
if (b > 0 && h > 0){
    return (b * h)/2;
} else {
    return "must be posetive num";
}
}
console.log (calculateTriangleArea(2, 4));

  // Create a function that returns the total number of legs of all the animals. In this challenge, a
  // farmer is asking you to tell him how many legs can be counted among all his animals. The
  // farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the
  // farmer wants to know the total number of legs and not the total number of animals.

    function totalLegs(chickens, cows, pigs) {
    // Calculate total number of legs
    let chickensLegs = chickens * 2;
    let cowsLegs = cows * 4;
    let pigsLegs = pigs * 4;

    return chickensLegs + cowsLegs + pigsLegs;
    }
    let total = totalLegs(2, 4 ,4);
console.log("Total : " + total);

// Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array.
function tripleFirstElement(arr) {
    if (arr.length === 2) {
    return arr[0] * 3;
    } else {
    Error("Array must contain exactly two numbers.");
    }
}
let finalResult = tripleFirstElement([2,3]);
console.log(finalResult);
// ● Create a function that returns true when num1 is equal to num2; otherwise return false.

function areNumbersEqual(num1, num2) {
    if (typeof num1 == "number" &&  typeof num2 == "number" && num1 == num2){
        return true;
    }else{
        return false
    }
    
}
console.log(areNumbersEqual(4, 4));

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
function divisible(num) {
    if (num % 100 === 0) {      
    return true;
    } else {
    return false;
}
}
console.log(divisible(0))  

// Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
    return "even";
} else {
    return "odd";
    }
}
console.log(isEvenOrOdd(6));


// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

function gradeScore (score) {
    if ( score < 0 || score > 100) 
return "invalid score";
    else if (score >= 90) 
return "Grade A";
else if (score >= 80)
return "Grade B";
else {
    return "Grade C"
}
}
console.log (gradeScore(99))