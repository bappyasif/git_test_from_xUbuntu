let email = document.querySelector("#mail");
let emailError = document.querySelector("#email");

let mobile = document.querySelector("#mobile");
let mobileError = document.querySelector("#number");

let user = document.querySelector("#user");
let userError = document.querySelector("#uName");

let form = document.querySelector("form");
let okButton = document.querySelector("button");

form.addEventListener("submit", (evt) => {
  if (!email.validity.valid && !mobile.validity.valid && !user.validity.valid) {
    showMessage(email, emailError);
    showMessage(mobile, mobileError);
    showMessage(user, userError);
    evt.preventDefault();
  }

  removeCustomErrorValidation();
});

function removeCustomErrorValidation() {
  email.setCustomValidity("");
}

function showMessage(node, errNode) {
  if (node.validity.valueMissing) {
    // node.setCustomValidity("Enter A Email Address");
    node.setCustomValidity(
      node.id === "mail" ? "Enter A Email Address" : "Fill out this field!!"
    );
    errNode.textContent = node.validationMessage;
  } else if (email.validity.typeMismatch) {
    // node.setCustomValidity("Enter A Valid Email");
    node.setCustomValidity(
      node.id === "mail" ? "Enter A Valid Email" : "Fill out valid type!!"
    );
    errNode.textContent = node.validationMessage;
  } else if (email.validity.tooShort) {
    // node.setCustomValidity("Enter A Valid Email");
    node.setCustomValidity(
      node.id === "mail" ? "Email Is Too Short" : "Fill out valid length!!"
    );
    errNode.textContent = node.validationMessage;
  } else if (email.validity.rangeUnderflow) {
    // node.setCustomValidity("Email Address Length Greater Than 5");
    node.setCustomValidity(
      node.id === "mail"
        ? "Email Address Length Greater Than 5"
          ? node.id === "mobile"
          : "Mobile Number Length Greater Than 10"
        : "User Name Length Greater Than 5"
    );
    errNode.textContent = node.validationMessage;
  }
  errNode.className = "error-active";
}

/**
 * 
 * 
 form.addEventListener("submit", evt => {
    if(!mobile.validity.valid && !user.validity.valid && !email.validity.valid) {
        showMessage(mobile, mobileError);
        showMessage(user, userError);
        showMessage(email, emailError);
        evt.preventDefault();
    } else if(!user.validity.valid && !email.validity.valid) {
        showMessage(user, userError);
        showMessage(email, emailError);
        evt.preventDefault();
    } else if(!user.validity.valid && !mobile.validity.valid) {
        showMessage(mobile, mobileError);
        showMessage(user, userError);
        evt.preventDefault();
    } else if(!mobile.validity.valid && !email.validity.valid) {
        showMessage(mobile, mobileError);
        showMessage(email, emailError);
        evt.preventDefault();
    } else if(!email.validity.valid) {
        showMessage(email, emailError);
        evt.preventDefault();
    } else if(!mobile.validity.valid) {
        showMessage(mobile, mobileError);
        evt.preventDefault();
    } else if(!user.validity.valid) {
        showMessage(user, userError);
        evt.preventDefault();
    } 
    
    removeCustomErrorValidation();
});

function removeCustomErrorValidation() {
    email.setCustomValidity("");
    mobile.setCustomValidity("");
    user.setCustomValidity("");
}

function showMessage(node, errNode) {
    if(node.validity.valueMissing) {
        node.setCustomValidity("Enter A Email Address");
        // errNode.textContent = node.validationMessage;
        errNode.textContent = email.validationMessage;
    } else if (email.validity.typeMismatch) {
        node.setCustomValidity("Enter A Valid Email");
        // errNode.textContent = node.validationMessage;
        errNode.textContent = email.validationMessage;
    } else if(email.validity.rangeUnderflow) {
        node.setCustomValidity("Email Address Length Greater Than 5");
        // errNode.textContent = node.validationMessage;
        errNode.textContent = email.validationMessage;
    } else if (mobile.validity.typeMismatch) {
        // node.setCustomValidity("Enter A Mobile Number");
        mobile.setCustomValidity("Enter A Mobile Number");
        // errNode.textContent = node.validationMessage;
        errNode.textContent = mobile.validationMessage;
    } else if(mobile.validity.rangeUnderflow) {
        // node.setCustomValidity("Mobile Number Length Exactly equal 10");
        mobile.setCustomValidity("Mobile Number Length Exactly equal 10");
        // errNode.textContent = node.validationMessage;
        errNode.textContent = mobile.validationMessage;
    } else if(mobile.validity.valueMissing) {
        // node.setCustomValidity("Mobile Number Is Missing");
        mobile.setCustomValidity("Mobile Number Is Missing");
        // errNode.textContent = node.validationMessage;
        errNode.textContent = mobile.validationMessage;
    }
    errNode.className = "error-active";
}
 * 
 * 
 function showMessage(node, errNode) {
    if(node.validity.valueMissing) {
        node.setCustomValidity("Enter A Email Address");
        errNode.textContent = node.validationMessage;
    } else if (email.validity.typeMismatch) {
        node.setCustomValidity("Enter A Valid Email");
        errNode.textContent = node.validationMessage;
    } else if(email.validity.rangeUnderflow) {
        node.setCustomValidity("Email Address Length Greater Than 5");
        errNode.textContent = node.validationMessage;
    } else if (mobile.validity.typeMismatch) {
        node.setCustomValidity("Enter A Mobile Number");
        errNode.textContent = node.validationMessage;
    } else if(mobile.validity.rangeUnderflow) {
        node.setCustomValidity("Mobile Number Length Exactly equal 10");
        errNode.textContent = node.validationMessage;
    } else if(mobile.validity.valueMissing) {
        node.setCustomValidity("Mobile Number Is Missing");
        errNode.textContent = node.validationMessage;
    }
    errNode.className = "error-active";
}
 * 
 * 
 form.addEventListener("submit", evt => {
    if(!email.validity.valid) {
        showMessage(email, emailError);
        evt.preventDefault();
    }
    else if(!mobile.validity.valid) {
        showMessage(mobile, mobileError);
        evt.preventDefault();
    } else if(!user.validity.valid) {
        showMessage(user, userError);
        evt.preventDefault();
    }
    removeCustomErrorValidation();
});
 */
