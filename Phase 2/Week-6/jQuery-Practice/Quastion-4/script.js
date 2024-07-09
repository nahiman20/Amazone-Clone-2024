// // script.js
// const userForm = document.getElementById("userForm");
// const errorText = document.getElementById("errorText");
// const submittedValues = document.getElementById("submittedValues");
// const firstNameValue = document.getElementById("firstNameValue");
// const lastNameValue = document.getElementById("lastNameValue");
// const emailValue = document.getElementById("emailValue");

// userForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const email = document.getElementById("email").value;

//     if (firstName && lastName && email) {
//     // All fields provided
//     errorText.classList.add("hidden");
//     submittedValues.classList.remove("hidden");
//     firstNameValue.textContent = `First Name: ${firstName}`;
//     lastNameValue.textContent = `Last Name: ${lastName}`;
//     emailValue.textContent = `Email: ${email}`;
//     } else {
//     // Fields missing
//     errorText.classList.remove("hidden");
//     submittedValues.classList.add("hidden");
//     }
// });



    function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;

    if (firstName === "" || lastName === "" || email === "") {
        var errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = "Please fill in all the required fields.";
        errorMessage.style.display = "block";
        return false;
    }

    document.getElementById("display-first-name").textContent = firstName;
    document.getElementById("display-last-name").textContent = lastName;
    document.getElementById("display-email").textContent = email;

    document.getElementById("user-form").style.display = "none";
    document.getElementById("user-info").style.display = "block";

      return false; // Prevents form submission
    }