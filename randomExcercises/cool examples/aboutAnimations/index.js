// we'll try to use Javascript to do that animation using a class element rather than relying on :hover
function animateBox() {
  let triggerEl = document.querySelector(".trigger");
  triggerEl.addEventListener("click", togglingAnimation);
}

function togglingAnimation(evt) {
  if (evt.target.classList.contains("clicked")) {
    evt.target.classList.remove("clicked");
    // just appending box instead
    evt.target.append(
      document.createRange().createContextualFragment("<div class='box'></div>")
    );
  } else {
    evt.target.classList.add("clicked");
  }
}

// we'll try to act on runnig-state of animation properties
function toggleAnimationPropClass() {
  let boxTwo = document.querySelector(".box-two");
  let boxThree = document.querySelector("html");
  boxTwo.addEventListener("click", toggleProp);
  boxThree.addEventListener("click", toggleAnother);
}

function toggleAnother(evt) {
  evt.target.append(
    document
      .createRange()
      .createContextualFragment(
        `<div class='box-three'>what what?!</div>`
      )
  );
}

function toggleProp(evt) {
  evt.target.classList.contains("is-paused")
    ? evt.target.classList.remove("is-paused")
    : (evt.target.classList.add("is-paused"),
      evt.target.append(
        document
          .createRange()
          .createContextualFragment("<div class='box-three'></div>")
      ));
}

toggleAnimationPropClass();
animateBox();

/**
 * 
 * 
 function toggleAnimationPropClass() {
  let boxTwo = document.querySelector(".box-two");
//   let boxThree = document.querySelector(".box-three");
let boxThree = document.querySelector("html");
  boxTwo.addEventListener("click", toggleProp);
  boxThree.addEventListener("click", toggleAnother);
  // boxThree.addEventListener("click", toggleProp);
}

function toggleAnother(evt) {
    // evt.target.parentNode.append(
    //     document
    //       .createRange()
    //       .createContextualFragment("<div class='box-three'></div>")
    //   )
    evt.target.append(
        document
          .createRange()
          .createContextualFragment(`<div class='box-three'>${alert("what?")} what what?!</div>`)
      )
}
 * 
 * 
 we'll try to act on runnig-state of animation properties
function toggleAnimationPropClass() {
    let boxTwo = document.querySelector(".box-two");
    boxTwo,addEventListener("click", toggleProp);
}

function toggleProp(evt) {
    evt.target.classList.contains("is-paused") 
    ? evt.target.classList.remove("is-paused")
    : evt.target.classList.add("is-paused");
}
 * 
 * 
 function animateBox() {
  let triggerEl = document.querySelector(".trigger");
  triggerEl.addEventListener("click", togglingAnimation);
  // it needs to be delegated instead
  // triggerEl.addEventListener("click", evt => togglingAnimation(evt));
}

// let triggerEl = document.querySelector(".trigger");
// triggerEl.addEventListener("click", togglingAnimation);

function togglingAnimation(evt) {
  if (evt.target.classList.contains("clicked")) {
    // evt.target.classList.add("clicked");
    evt.target.classList.remove("clicked");
        // just appending box instead
    // evt.target.append("<div class='box'></div>");
    evt.target.append(document.createRange().createContextualFragment("<div class='box'></div>"));
  } else {
    // evt.target.classList.remove("clicked");
    evt.target.classList.add("clicked");
    // // just appending box instead
    // // evt.target.append("<div class='box'></div>");
    // evt.target.append(document.createRange().createContextualFragment("<div class='box'></div>"));
  }
}
 */
