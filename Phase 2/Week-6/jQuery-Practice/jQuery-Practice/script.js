// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.

const sample1 = $("#sample1");

// 1.2. Print the element itself on the console upon page refresh.

console.log (sample1);

// 1.3. Print the content of the element on the console upon page refresh. Use jQuery to select
// the content of the element

console.log(sample1.text());

//Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.

const techCompanies = $("#techCpmanies");
console.log(techCompanies);

// 2.2. How many tech companies are listed under the ul element with an id of
// "techCompanies"?

const techCompaniesCount = $("#techCompanies li").length;
console.log(techCompaniesCount);

// 2.3. Select all elements with a class of "red" and display them on the console.


    const techCompaniesRed = $(".red");
console.log(techCompaniesRed);


// 2.4. Create a new li HTML element with a content of "Facebook" and display it on console

const newli = $("<li>Facebook</li>");
console.log(newli);


// 2.5. Give the newly created element a class of "blue" using jQuery

    newli.addClass("blue"); 

// 2.6. Append the newly created element next to the the "Sony" <li> element
    // $("#techCompanies").append(newli);
    $("#techCompanies").prepend(newli);

// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// display the result inside the "blueCompanies" div.

const Bluelabled = $("#techCompanies li.blue").length;
$("#blueCompanies").append("total blue companies" + Bluelabled ); 
console.log(Bluelabled);

// Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console
// 3.2. Display the result underneath the form
// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form


$("#submitButton").click(function (e) {
    e.preventDefault();

    var firstValue = parseFloat($("input[name='first-value']").val());
    var secondValue = parseFloat($("input[name='second-value']").val());

    if (!isNaN(firstValue) && !isNaN(secondValue)) {
    var sum = firstValue + secondValue;
    var average = (firstValue + secondValue) / 2;
    console.log("Sum: " + sum);
    console.log("Average: " + average);

    $("#sum").text("Sum: " + sum + ", Average: " + average);
    } else {
    $("#sum").text("Please enter numerical values only");
    }
});