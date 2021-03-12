let slides = document.querySelector(".slide-view .slide-content");
function renderSlides(arr) {
  //   let slides = document.querySelector(".slide-view .slide-content");
  // let slides = document.querySelector(".container");

  // what each array item should return when called from map() method
  // it should return a html Fragment for DOM to use and display
  let slideItem = (slideObj) => {
    return document.createRange().createContextualFragment(
      `<div id="${slideObj.slideNo}" style= "display: ${slideObj.displayStatus};">
                <figure class="slide">
                    <img src="${slideObj.resLoc}" alt="${slideObj.altText}"/>
                    <figcaption class="caption">${slideObj.caption}</figcaption>
                </figure>
            </div>`
    ).firstChild;
  };

  // arr uising map method, so that it can starts creating DOM ready elements
  slides.append(...arr.map(slideItem));
  //   sliderActivities();
}

function sliderActivities() {
  let slidePrev = document.querySelector(".prev");
  let slideNext = document.querySelector(".next");
  slideNext.addEventListener("click", (evt) => sliderHandler(evt));
  slidePrev.addEventListener("click", (evt) => sliderHandler(evt));
}

function sliderHandler(evt) {
  let slideID, action;

  // removing all display:"none" nodes
  removingNonDisplayedNodes();

  //   checking for which action
  if (
    evt.target.parentNode.classList.contains("prev") ||
    evt.target.parentNode.classList.contains("next")
  ) {
    // removingNonDisplayedNodes();
    // this will always get first elemnt div from slides, but we need different values after each event
    // for that reason we are using removingNonDisplayedNodes() to get rid of them up front
    slideID = evt.target.parentNode.parentNode.querySelector(
      ".slide-content div"
    ).id;
    console.log(slideID);

    action = evt.target.parentNode.className;

    // clearSlide();
    showSlide(Number(slideID - 1), action);
    // clearSlide();
    // renderSlides(imgArr);
    // showSlide(Number(slideID), action);
  }
  clearSlide();
  renderSlides(imgArr);
  removingNonDisplayedNodes();
}

function removingNonDisplayedNodes() {
  slides.childNodes.forEach((node) => {
    if (node.style.display !== "block") {
      console.log("here");
      node.remove();
    }
  });
}

function showSlide(id, action) {
  let showIndex;
  if(action === "prev") {
    showIndex = (id -1) >= 0 ? (id - 1) : imgArr.length - 1;
  } else {
    showIndex = (id + 1) < imgArr.length ? (id + 1) : 0;
  }
  console.log("current: "+id," following: "+showIndex);
  // updating imgArr
  imgArr = imgArr.map((slide, idx) => {
    // it's returning an object along with changed "displayStatus" for intended ID match
    let obj = {};
    if(idx === showIndex) {
      obj = {...slide, displayStatus: "block"}
    } else {
      obj = {...slide, displayStatus: "none"}
    }
    // what it's doing is, mostly sending a snapshot of DOM elements that'll be rendered after any event ("Prev/Next") happens
    return obj;
  });
}

function clearSlide() {
//   removingNonDisplayedNodes();
  console.log(slides.childNodes);
  // slides.childNodes.forEach(node => node.firstChild = "");
  // slides.childNodes.forEach(node => node.parentNode.removeChild(node));
  // while(slides.childNodes.firstChild) slides.childNodes.forEach(node => node.remove());
  // slides.textContent = "";
  slides.innerHTML = "";
// if(slides.childNodes.length )
}

let imgArr = [
  {
    resLoc: "./slides/slide-01.jpg",
    caption: "Silde 01 text here",
    altText: "slide 01 alt text",
    displayStatus: "block",
    slideNo: 01,
  },
  {
    resLoc: "./slides/slide-02.jpg",
    caption: "Silde 02 text here",
    altText: "slide 02 alt text",
    displayStatus: "none",
    slideNo: 02,
  },
  {
    resLoc: "./slides/slide-03.jpg",
    caption: "Silde 03 text here",
    altText: "slide 03 alt text",
    displayStatus: "none",
    slideNo: 03,
  },
  {
    resLoc: "./slides/slide-04.jpg",
    caption: "Silde 04 text here",
    altText: "slide 04 alt text",
    displayStatus: "none",
    slideNo: 04,
  },
];

renderSlides(imgArr);
sliderActivities();

/**
 * 
 * 
 function showSlide(id, action) {
  let showIndex;
  if(action === "prev") {
    showIndex = (id -1) >= 0 ? (id - 1) : imgArr.length - 1;
  } else {
    showIndex = (id + 1) < imgArr.length ? (id + 1) : 0;
  }
  console.log("current: "+id," following: "+showIndex);
  // updating imgArr
  imgArr = imgArr.map((slide, idx) => {
    // it's returning array object along with changed "displayStatus" for intended ID match
    if(idx === showIndex) {
      console.log({...slide, displayStatus: "block"});
      return {...slide, displayStatus: "block"}
    } else {
      // console.log({...slide, displayStatus: "none"});
      return {...slide, displayStatus: "none"}
    }
  });
}
 * 
 * 
 function showSlide(id, action) {
  for (let i = 0; i < imgArr.length; i++) {
    //   console.log(i === id);
    console.log("<>",imgArr[i].slideNo, id)
    if (i === id) {
      // console.log(action);
      // imgArr[id].displayStatus = "none";
      imgArr[i].displayStatus = "none";
      if (action === "next") {
        imgArr[id].displayStatus = "none";
        // imgArr[i].displayStatus = "none";
        console.log("next", id, id + 1, i + 1);
        // imgArr[i + 1].displayStatus = "block";
        // console.log(i + 1 > imgArr.length ? i= 0 : true);
        imgArr[(i + 1) > imgArr.length ? (i)= 0 : i+1].displayStatus = "block";
      } else if (action === "prev") {
        // if()
        // imgArr[id].displayStatus = "none";
        imgArr[i].displayStatus = "none";
        console.log("prev", id, id - 1, i - 1);
        imgArr[i - 1].displayStatus = "block";
      }
    }
    removingNonDisplayedNodes();
  }
  //   clearSlide();
  //   renderSlides(imgArr);
  //   console.log(imgArr);
}
 * 
 * 
 function sliderHandler(evt) {
    let slideID, action;

    // removing all display:"none" nodes
  removingNonDisplayedNodes();
  
//   checking for which action
  if (
    evt.target.parentNode.classList.contains("prev") ||
    evt.target.parentNode.classList.contains("next")
  ) {
    // this will always get first elemnt div from slides, but we need different values after each event
    // for that reason we are using removingNonDisplayedNodes() to get rid of them up front
    slideID = evt.target.parentNode.parentNode.querySelector(
      ".slide-content div"
    ).id;
    // console.log(slideID);

    action = evt.target.parentNode.className;
    showSlide(Number(slideID - 1), action);
  }
  clearSlide();
  renderSlides(imgArr);
}

function removingNonDisplayedNodes() {
  slides.childNodes.forEach((node) => {
    if (node.style.display === "none") {
      console.log("here");
      node.remove();
    }
  });
}
 * 
 * 
 function sliderHandler(evt) {
  let slideID, action;
  if (
    evt.target.parentNode.classList.contains("prev") ||
    evt.target.parentNode.classList.contains("next")
  ) {
    // console.log(evt.target.parentNode.nextSibling.firstChild.attributes.id);
    // console.log(evt.target.parentNode.parentNode.querySelector(".slide-content div").id);
    slideID = evt.target.parentNode.parentNode.querySelector(
      ".slide-content div"
    ).id;
    // console.log(slideID);
    action = evt.target.parentNode.className;
    showSlide(Number(slideID-1), action);
  }
  //   console.log(slideID, action);
//   showSlide(Number(slideID-1), action);
  clearSlide();
  renderSlides(imgArr);
  console.log(imgArr);
}

function showSlide(id, action) {
  for(let i=0; i < imgArr.length; i++) {
    //   console.log(i === id);
      if(i === id) {
        //   console.log(action);
        imgArr[id].displayStatus = "none";
        if(action === "next") {
            console.log("next",id, id+1);
            imgArr[id+1].displayStatus = "block";
        } else if(action === "prev") {
            console.log("prev",id, id-1);
            imgArr[id-1].displayStatus = "block";
        }
      }
  }
//   clearSlide();
//   renderSlides(imgArr);
//   console.log(imgArr);
}
 * 
 * 
 function showSlide(id, action) {
  imgArr.forEach((item) => {
    if (item.slideNo === Number(id)) {
      item.displayStatus = "none";
      if (action === "next") {
        console.log(imgArr[id++]);
        imgArr[id++].displayStatus = "block";
        // imgArr[id++ > imgArr.length ? -1 : id++].displayStatus = "block";
      }
      // renderSlides(imgArr);
      // console.log(imgArr);
    }
  });
  renderSlides(imgArr);
  console.log(imgArr);
}
 * 
 * 
 let imgArr = [
    {
        resLoc: "./slides/slide-01.jpg",
        caption: "Silde 01 text here",
        altText: "slide 01 alt text",
        visiblityStatus: "visible",
        slideNo: 01,
    },
    {
        resLoc: "./slides/slide-02.jpg",
        caption: "Silde 02 text here",
        altText: "slide 02 alt text",
        visiblityStatus: "hidden",
        slideNo: 02,
    },
    {
        resLoc: "./slides/slide-03.jpg",
        caption: "Silde 03 text here",
        altText: "slide 03 alt text",
        visiblityStatus: "hidden",
        slideNo: 03,
    },
    {
        resLoc: "./slides/slide-04.jpg",
        caption: "Silde 04 text here",
        altText: "slide 04 alt text",
        visiblityStatus: "hidden",
        slideNo: 04,
    }
];
 * 
 * 
 function renderSlides(arr) {
    let slides = document.querySelector(".slide-view");
    // let slides = document.querySelector(".container");

    // what each array item should return when called from map() method
    // it should return a html Fragment for DOM to use and display
    let slideItem = slideObj => {
        return document.createRange().createContextualFragment(
            `<div class="slide" id="${slideObj.slideNo}">
                <img src="${slideObj.resLoc}" alt="${slideObj.altText}"/>
                <caption class="caption">${slideObj.caption}</caption>
            </div>`
        ).firstChild;
    }

    // arr uising map method, so that it can starts creating DOM ready elements
    slides.append(...arr.map(slideItem));
}
 */
