let form = document.getElementsByTagName("form")[0];
let email = document.getElementById("mail");
let emailError = document.querySelector("#mail + span.error");
let errorTest = document.querySelector(".errorTest");

email.addEventListener("input", (evt) => {
  // check if inputs valid
  if (email.validity.valid) {
    // valid, remove error message
    emailError.textContent = "";
    emailError.className = "error"; // reset error visual state
  } else {
    // there is an error, show correct error message
    errorMessage();
    // clearing out setCustomValidity("") so that customError doesn't remains
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", (evt) => {
  // check if fields valid
  if (!email.validity.valid) {
    // message for invalid input
    errorMessage();
    // prevent from submitting form
    evt.preventDefault();
  }
  // clearing out setCustomValidity("") so that customError doesn't remains
  // email.setCustomValidity("");
});

function errorMessage() {
  console.log(email.validity);
  if (email.validity.valueMissing) {
    // if field is empty
    // console.log(errorTest)
    // errorTest.setCustomValidity("eneter valid email address");
    // emailError.textContent = "enter valid email address";
    // emailError.textContent = email.setCustomValidity("eneter valid email address");
    email.setCustomValidity("eneter valid email address");
    emailError.textContent = email.validationMessage;
  } else if (email.validity.typeMismatch) {
    // emailError.setCustomValidity("input valid email type");
    // emailError.textContent = "input valid email type";
    email.setCustomValidity("input valid email type");
    emailError.textContent = email.validationMessage;
  } else if (email.validity.tooShort) {
    // emailError.setCustomValidity("email length atleast 6");
    // emailError.textContent = "email length atleast 6";
    email.setCustomValidity("email length atleast 6");
    emailError.textContent = email.validationMessage;
  }
  // setting css styling appropriately
  emailError.className = "error active";
}
