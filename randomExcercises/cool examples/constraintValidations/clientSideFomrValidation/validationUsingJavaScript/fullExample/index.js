let form =  document.getElementsByTagName("form")[0];
let email = document.getElementById("mail");
let emailError = document.querySelector("#mail span.error");
let errorTest = document.querySelector(".errorTest");

email.addEventListener("input", evt => {
    // check if inputs valid
    if(email.validity.valid) {
        // valid, remove error message
        emailError.textContent = ""
        emailError.className = "error"; // reset error visual state
    } else {
        // there is an error, show correct error message
        errorMessage();
    }
});

form.addEventListener("submit", evt => {
    // check if fields valid
    if(!email.validity.valid) {
        // message for invalid input
        errorMessage();
        // prevent from submitting form
        evt.preventDefault();
    }
});

function errorMessage() {
    if(email.validity.valueMissing) {
        // if field is empty
        console.log(errorTest)
        errorTest.setCustomValidity("eneter valid email address");
        // emailError.textContent = "enter valid email address";
    } else if(email.validity.typeMismatch) {
        // emailError.setCustomValidity("input valid email type");
        emailError.textContent = "input valid email type";
    } else if(email.validity.tooShort) {
        // emailError.setCustomValidity("email length atleast 6");
        emailError.textContent = "email length atleast 6";
    }
    // setting css styling appropriately
    emailError.className = "error active";
}