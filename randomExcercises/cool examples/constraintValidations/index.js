function validationTest() {
    let inputEl = document.querySelector("input");
    console.log(inputEl.validity, inputEl.willValidate);
    if(!inputEl.checkValidity()) {
        let demoDiv = document.querySelector("#demo");
        demoDiv.textContent = inputEl.validationMessage;
    }
}

function validationDemo() {
    let inputEl = document.querySelector("input");
    let demoDiv = document.querySelector("#demo");
    console.log(inputEl.validity.patternMismatch, inputEl.validity.customError)
    if(inputEl.validity.rangeOverflow || inputEl.validity.rangeUnderflow) {
        demoDiv.textContent = inputEl.validationMessage;
    }
    if(inputEl.validity.typeMismatch) {
        demoDiv.textContent = inputEl.validationMessage;
    }
    if(inputEl.validity.valueMissing) {
        demoDiv.textContent = inputEl.validationMessage;
    }
    if(!inputEl.validity.valid) {
        demoDiv.textContent = inputEl.validationMessage;
    }

}

let button = document.querySelector("button");
// button.addEventListener("click", validationTest);
button.addEventListener("click", validationDemo);
