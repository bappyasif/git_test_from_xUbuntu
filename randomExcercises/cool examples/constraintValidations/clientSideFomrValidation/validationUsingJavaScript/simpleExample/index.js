let email = document.getElementById("mail");

email.addEventListener("input", evt => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("Expecting an email address");
    } else {
        email.setCustomValidity("");
    }
});

console.log(email)