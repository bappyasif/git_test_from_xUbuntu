function creatingSlider(imgFile, slideCaption, altStr, slideNo, display) {
  this.imgLoc = imgFile;
  this.imgCaption = slideCaption;
  this.altData = altStr;
  this.slideNum = slideNo;
  this.displayStatus = display;

  return {
    imgLoc,
    imgCaption,
    altData,
    slideNum,
    displayStatus,
  };
}

function sliderManager(showTitle) {
  this.title = showTitle;
  let sliderView = document.querySelector(".slide-view");
  let followingIndex, nodeID, id;

  let slideElement = (imgObj) => {
    let domString = `<div class="slide-content" id="slide-${imgObj.slideNum}" style="${imgObj.displayStatus}">
              <img src="${imgObj.imgLoc}" alt="${imgObj.altData}"/>
              <div class="caption">${imgObj.imgCaption}</div>
          </div>`;
    return document.createRange().createContextualFragment(domString)
      .firstChild;
  };

  let slidesObj = slides.map((item) => {
    let [file, caption, alt, num, display] = [...item];
    return creatingSlider(file, caption, alt, num, display);
  });

  let renderSlides = function () {
    sliderView.append(...slidesObj.map(slideElement));
  };

  let add = (slide) => {
    slides.push(slide);
    clear();
    renderSlides();
  };

  let autoSlide = (id) => {
    // window.setInterval(() => sliding(id), 1100);
    // console.log("here");
    removeNonDisplayedNodes();
    for (let i = 0; i < 4; i++) {
        // sliding(id, i);
      setInterval(() => {
        // sliding(id, i);
      }, 2200);
    }
    // clearInterval(autoSlide);
  };

  function sliding(id, i) {
      setInterval(() => {
        followingIndex = id + i < slidesObj.length ? id + i : 0;
        // console.log(followingIndex, i);
        slidesObj = slidesObj.map(showFollowing);
        clear();
        start();
        // console.log("here");
      }, 2200);
      
  }

  let renderAnimation = (evt, action) => {
    let slideView = evt.target.parentNode.querySelector(".slide-content");
    if (action === "next") {
      slideView.classList.remove("prev-anim");
      slideView.classList.add("next-anim");
    } else {
      slideView.classList.remove("next-anim");
      slideView.classList.add("prev-anim");
    }
  };

  let next = (evt) => {
    nodeID = evt.target.parentNode.querySelector(".slide-content").id;
    id = Number(nodeID.split("-")[1]) - 1;
    followingIndex = id + 1 < slidesObj.length ? id + 1 : 0;
    slidesObj = slidesObj.map(showFollowing);
    clear();
    start();
    removeNonDisplayedNodes();
  };

  let showFollowing = (slide, index) => {
    if (index === followingIndex) {
      return { ...slide, displayStatus: "display:block" };
    } else {
      return { ...slide, displayStatus: "display:none" };
    }
  };

  let prev = (evt) => {
    nodeID = evt.target.parentNode.querySelector(".slide-content").id;
    id = Number(nodeID.split("-")[1]) - 1;
    followingIndex = id - 1 >= 0 ? id - 1 : slidesObj.length - 1;
    slidesObj = slidesObj.map(showFollowing);
    clear();
    start();
    removeNonDisplayedNodes();
  };

  let clear = () => (sliderView.textContent = "");

  let removeNonDisplayedNodes = () =>
    sliderView.childNodes.forEach((node) => {
      if (node.style.display == "none") node.remove();
    });

  let start = function () {
    renderSlides();
  };
  return {
    start,
    add,
    next,
    prev,
    removeNonDisplayedNodes,
    clear,
    renderAnimation,
    autoSlide,
  };
}

let slides = [
  [
    "../slides/slide-01.jpg",
    "Slide 01 caption text",
    "slide 01 alt text",
    01,
    "display:block",
  ],
  [
    "../slides/slide-02.jpg",
    "Slide 02 caption text",
    "slide 02 alt text",
    02,
    "display:none",
  ],
  [
    "../slides/slide-03.jpg",
    "Slide 03 caption text",
    "slide 03 alt text",
    03,
    "display:none",
  ],
  [
    "../slides/slide-04.jpg",
    "Slide 04 caption text",
    "slide 04 alt text",
    04,
    "display:none",
  ],
];

let slideShow = sliderManager("sample show");
slideShow.start();
// slideShow.removeNonDisplayedNodes();
slideShow.autoSlide(0);
// let count = 0;
// while (count < 4) {
//   count++;
//   slideShow.autoSlide(count);
//   // count++;
// }

let next = document.querySelector(".next");
next.addEventListener("click", (evt) => {
  slideShow.next(evt);
  slideShow.removeNonDisplayedNodes();
  slideShow.renderAnimation(evt, "next");
  // slideShow.autoSlide(evt, "next");
});

let prev = document.querySelector(".prev");
prev.addEventListener("click", (evt) => {
  slideShow.prev(evt);
  slideShow.removeNonDisplayedNodes();
  slideShow.renderAnimation(evt, "prev");
  // slideShow.autoSlide(evt, "prev");
});
