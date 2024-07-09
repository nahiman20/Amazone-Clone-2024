// "use strict";

//Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

function FirstTenIntegers() {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
}
FirstTenIntegers();

// Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8, 9, 10, 11, 12

function NextFiveNumbers(Num) {
  for (let i = 1; i <= 5; i++) {
    console.log(Num + i);
  }
}
NextFiveNumbers(7);

// Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

function sumNextTen(num) {
  let sum = 0;
  for (i = num + 1; i <= num + 10; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumNextTen(7));

// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be look like this:
function elementOfArray(number) {
  for (i = 0; i < number.length; i++) {
    console.log(number[i]);
  }
}
elementOfArray([1, "hello", 8, 44]);

// Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

function lengthOfArray(arr) {
  return arr.length;
}
console.log(lengthOfArray([1, "hello", 8, 44]));
console.log(lengthOfArray(["hello", 13]));

// Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
sumArray([5, 6, 99, 8, 76, 4, 68, 44]);
sumArray([3, 0]);

// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

// psudo
// We iterate through each element in the array.
// If the number is even (divisible by 2), we add it to sumEven.
// If the number is odd, we add it to sumOdd.

function calculateDifference(arr) {
  let even = 0;
  let odd = 0;
  for (i = 0; i < arr.length; i++)
    if (arr[i] % 2 == 0) {
      even = even + arr[i];
    } else {
      odd = odd + arr[i];
    }
  return even - odd;
}
// console.log(calculateDifference(5, 6, 99, 8, 76, 4, 68, 44));
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

// psudo
// We iterate through the array using a for loop.
// The loop increments the index by 2 (i.e., even indexes).
// We log the element at each even index to the console.

function logEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
logEvenIndex([5, 6, 99, 8, 76, 4, 68, 44]);
logEvenIndex([11, "Sam", 3, 7, "car"]);

// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
function manipulateArray(array) {
  array.pop(); // Remove the last array
  array.push(32); //Replace with new value "32"
  console.log(array); // Print
}
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
manipulateArray(sampleArray);
// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});
{
  function sortArray(array) {
    array.sort(function (a, b) {
      return a - b;
    });
    console.log(array);
  }
  let sampleArray = [5, 2, 8, 1, 9];
  sortArray(sampleArray);
}
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.

// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};
evangadiClass.lengthOfCourse = "5 Month";
console.log(evangadiClass);

// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method
evangadiClass.topicsCovered.push("Bootstrap");
console.log();

// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console
function calculateAverageAge(evangadiClass) {
  let totalAge = 0;
  const students = evangadiClass.students;

  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }

  const averageAge = totalAge / students.length;
  return averageAge;
}
const averageAge = calculateAverageAge(evangadiClass);
console.log("Average age of the class:", averageAge);

// Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

function calculatePercentageOfMaleStudents(evangadiClass) {
  const students = evangadiClass.students;
  let maleCount = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].sex === "M") {
      maleCount++;
    }
  }

  const malePercentage = (maleCount / students.length) * 100;
  return malePercentage;
}
const malePercentage = calculatePercentageOfMaleStudents(evangadiClass);
console.log("Percentage of male students:", malePercentage.toFixed(2) + "%");
