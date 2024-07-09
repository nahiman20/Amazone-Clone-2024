// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
// 1.2 Print the element itself on the console upon page refresh.
// 1.3 Print the content of the element on the console upon page refresh.
let first = document.getElementById("sample1");
console.log(first) 
// console.log(first.textContent)

// Question 2: The following questions are based on the HTML code found under the
// section labeled "For question 2".
// 2.1 Select the element with an ID of "techCompanies" and display it on your
// console. (Do not use "querySelector" for this question)

let techCompaniesID = document.getElementById("techCompanies");
console.log(techCompaniesID);
console.log(techCompaniesID.textContent)


// 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and
// display it on your console.
let techCompaniesQuery = document.querySelector("#techCompanies");
console.log(techCompaniesQuery);

// 2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total

let techCompaniesAll = document.querySelectorAll("#techCompanies li");
console.log(techCompaniesAll);
console.log(techCompaniesAll.length);

// 2.4 Select all elements with a class name of "red" and display them on the console.// Use both "querySelectorAll" and "getElementByClass"// Use both "querySelectorAll" and "getElementByClass"

let redClassName = document.getElementsByClassName("red")
console.log(redClassName);
let redQuesryAll= document.querySelectorAll(".red")
console.log(redQuesryAll);



// 2.5 Create a new li HTML element with a content of "Facebook" and display it on
// console

const newLi = document.createElement("li");
newLi.textContent = "Facebook";

// console.log(newLi);
const myList = document.getElementById("techCompanies");
myList.appendChild(newLi);

console.log("New li element added:", newLi);

// 2.6 Give the newly created element a class of "blue" using JavaScript
newLi.className = "blue"

// 2.7 Append the newly created element next to the the "Sony" li element
{
let techCompaniesID = document.getElementById("techCompanies");
console.log(techCompaniesID);
let newLi = document.createElement("li")
newLi.textContent = "Facebook";
console.log(newLi);
newLi.className = "blue";
techCompaniesID.appendChild(newLi);
}

// 2.8 How many of the tech companies are labeled blue? Find the result using
// JavaScript and display the result inside the "blueCompanies" div

let blue = document.querySelectorAll("#techCompanies .blue");
let blueLength=blue.length
let blueCompanies = document.getElementById("blueCompanies");
blueCompanies.innerHTML += "<br>" + blueLength










// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"

// Assuming you have an element with the ID "yesButton" and "noButton" 

const yesBackground = document.getElementById("yesBackground");
const noBackground = document.getElementById("noBackground");

yesBackground.addEventListener("click", () => {
    document.body.style.backgroundColor = "#99ecff";
});

noBackground.addEventListener("click", () => {
    document.body.style.backgroundColor = "none";
});



// Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form 

// 

// Function to calculate sum and display result
function calculateSum() {
  // Get the values from the text fields
  const firstValueInput = document.querySelector("input[name='first-value']");
  const secondValueInput = document.querySelector("input[name='second-value']");
  const firstValue = firstValueInput.value.trim();
  const secondValue = secondValueInput.value.trim();

  // Check if both values are valid numbers
  if (isNaN(firstValue) || isNaN(secondValue)) {
    // Display error message if not numbers
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please enter numerical values only";
    errorMessage.style.color = "red"; // Optional: style the error message
    const sumElement = document.getElementById("sum");
    sumElement.textContent = ""; // Clear previous result
    sumElement.appendChild(errorMessage);
    return;
  }

  // Convert to numbers for calculation
  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(secondValue);

  // Calculate the sum
  const sum = num1 + num2;

  // Display the result on the console
  console.log("The sum of", firstValue, "and", secondValue, "is:", sum);

  // Display the result underneath the form
  const sumElement = document.getElementById("sum");
  sumElement.textContent = "The sum is: " + sum;

  // Clear any previous error messages (optional)
  const errorMessages = document.querySelectorAll("#sum > p");
  errorMessages.forEach(error => error.remove());
}

// Call the function when the form is submitted
const form = document.getElementById("adder");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  calculateSum();
});
