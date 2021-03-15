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

  let renderSlides = function () {
    sliderView.append(...slidesObj.map(slideElement));
    // removeNonDisplayedNodes();
  };

  let add = (slide) => {
    slides.push(slide);
    clear();
    renderSlides();
    // start();
  };

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
    // renderAnimation(evt, "next");
    removeNonDisplayedNodes();
    // renderAnimation(evt, "next");
  };

  let showFollowing = (slide, index) => {
    if (index === followingIndex) {
      console.log({ ...slide, displayStatus: "display:block" });
      return { ...slide, displayStatus: "display:block" };
    } else {
      console.log({ ...slide, displayStatus: "display:none" });
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
    // renderAnimation(evt, "prev");
  };

  let clear = () => (sliderView.textContent = "");

  let removeNonDisplayedNodes = () =>
    sliderView.childNodes.forEach((node) => {
      if (node.style.display == "none") node.remove();
      console.log("<>", node.id);
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

let slidesObj = slides.map((item) => {
  let [file, caption, alt, num, display] = [...item];
  return creatingSlider(file, caption, alt, num, display);
});
console.log(slidesObj);

let slideShow = sliderManager("sample show");
slideShow.start();

let next = document.querySelector(".next");
next.addEventListener("click", (evt) => {
  // slideShow.removeNonDisplayedNodes();
  console.log(evt.target.parentNode.querySelector(".slide-content").id);
  slideShow.next(evt);
  slideShow.removeNonDisplayedNodes();
  // slideShow.clear();
  slideShow.renderAnimation(evt, "next");
});

let prev = document.querySelector(".prev");
prev.addEventListener("click", (evt) => {
  slideShow.prev(evt);
  slideShow.removeNonDisplayedNodes();
  slideShow.renderAnimation(evt, "prev");
});

// slideShow.add([
//     "../slides/slide-03.jpg",
//     "Slide 03 caption text",
//     "slide 03 alt text",
//     03,
//     "display:block",
//   ]);
// slideShow.add([
//   "../slides/slide-04.jpg",
//   "Slide 04 caption text",
//   "slide 04 alt text",
//   04,
//   "display:none",
// ]);
// slidesObj = slides.map((item) => {
//   let [file, caption, alt, num, display] = [...item];
//   return creatingSlider(file, caption, alt, num, display);
// });
// console.log(slides);

/**
 * 
 * 
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

  let renderSlides = function () {
    sliderView.append(...slidesObj.map(slideElement));
    // removeNonDisplayedNodes();
  };

  //   let add = (slide) => slideElement(slide);
  let add = (slide) => {
    slides.push(slide);
    clear();
    renderSlides();
    // start();
  };

  let next = (evt) => {
    // clear();
    nodeID = evt.target.parentNode.querySelector(".slide-content").id;
    id = Number(nodeID.split("-")[1]) - 1;
    followingIndex = (id + 1) < slidesObj.length ? (id + 1) : 0;
    slidesObj = slidesObj.map(showFollowing);
    // removeNonDisplayedNodes();
    clear();
    start();
    // clear();
    removeNonDisplayedNodes();
  };

  let showFollowing = (slide, index) => {
    if (index === followingIndex) {
      console.log({...slide, displayStatus: "display:block"})
      return { ...slide, displayStatus: "display:block" };
    } else {
      console.log({ ...slide, displayStatus: "display:none" })
      return { ...slide, displayStatus: "display:none" };
    }
  };

  let prev = (evt) => {
    nodeID = evt.target.parentNode.querySelector(".slide-content").id;
    id = Number(nodeID.split("-")[1]) - 1;
    followingIndex = (id - 1) >= 0 ? (id - 1) : (slidesObj.length - 1);
    slidesObj = slidesObj.map(showFollowing);
    // console.log(id, slidesObj);
    // clear();
    // renderSlides();
    clear();
    start();
    removeNonDisplayedNodes();
  };
  //   let clear = () => sliderView.querySelector(".slide-content").textContent = "";
  let clear = () => (sliderView.textContent = "");
  let removeNonDisplayedNodes = () =>
  // console.log(sliderView.childNodes.length)
    sliderView.childNodes.forEach((node) => {
      // console.log("<>", node.id);
      if (node.style.display == "none") node.remove();
      console.log("<>", node.id);
    });
  let start = function () {
    renderSlides();
    // removeNonDisplayedNodes();
    // renderSlides();
    // console.log(sliderView.childNodes.length)
  };
  return { start, add, next, prev, removeNonDisplayedNodes, clear };
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

let slidesObj = slides.map((item) => {
  let [file, caption, alt, num, display] = [...item];
  return creatingSlider(file, caption, alt, num, display);
});
console.log(slidesObj);

let slideShow = sliderManager("sample show");
slideShow.start();

let next = document.querySelector(".next");
next.addEventListener("click", (evt) => {
  // slideShow.removeNonDisplayedNodes();
  console.log(evt.target.parentNode.querySelector(".slide-content").id)
  slideShow.next(evt);
  slideShow.removeNonDisplayedNodes();
  // slideShow.clear();
});

let prev = document.querySelector(".prev");
prev.addEventListener("click", (evt) => {
  slideShow.prev(evt);
  slideShow.removeNonDisplayedNodes();
});
 * 
 * 
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

  let renderSlides = function () {
    sliderView.append(...slidesObj.map(slideElement));
    // removeNonDisplayedNodes();
  };

  //   let add = (slide) => slideElement(slide);
  let add = (slide) => {
    slides.push(slide);
    clear();
    renderSlides();
    // start();
  };

  let next = (evt) => {
    // clear();
    nodeID = evt.target.parentNode.querySelector(".slide-content").id;
    id = Number(nodeID.split("-")[1]) - 1;
    // console.log(id);
    // let followingIndex = (id + 1) < slidesObj.length ? (id + 1) : 0;
    followingIndex = (id + 1) < slidesObj.length ? (id + 1) : 0;
    // clear();
    // console.log(id, followingIndex);
    slidesObj = slidesObj.map(showFollowing);
    // slidesObj = slidesObj.map((slide, index) => {
    //   if (index === followingIndex) {
    //     console.log({...slide, displayStatus: "display:block"})
    //     return { ...slide, displayStatus: "display:block" };
    //   } else {
    //     console.log({ ...slide, displayStatus: "display:none" })
    //     return { ...slide, displayStatus: "display:none" };
    //   }
    //   // return { ...slide, displayStatus: "display:none" };
    // });
    removeNonDisplayedNodes();
    // clear();
    start();
    // renderSlides();
    // removeNonDisplayedNodes();
  };

  let showFollowing = (slide, index) => {
    if (index === followingIndex) {
      console.log({...slide, displayStatus: "display:block"})
      return { ...slide, displayStatus: "display:block" };
    } else {
      console.log({ ...slide, displayStatus: "display:none" })
      return { ...slide, displayStatus: "display:none" };
    }
  };

  let prev = (evt) => {
    nodeID = evt.target.parentNode.querySelector(".slide-content").id;
    id = Number(nodeID.split("-")[1]) - 1;
    followingIndex = (id - 1) >= 0 ? (id - 1) : (slidesObj.length - 1);
    slidesObj = slidesObj.map(showFollowing);
    // console.log(id, slidesObj);
    // clear();
    renderSlides();
  };
  //   let clear = () => sliderView.querySelector(".slide-content").textContent = "";
  let clear = () => (sliderView.textContent = "");
  let removeNonDisplayedNodes = () =>
  // console.log(sliderView.childNodes.length)
    sliderView.childNodes.forEach((node) => {
      // console.log("<>", node.id);
      if (node.style.display == "none") node.remove();
      console.log("<>", node.id);
    });
  let start = function () {
    renderSlides();
    // removeNonDisplayedNodes();
    // renderSlides();
    // console.log(sliderView.childNodes.length)
  };
  return { start, add, next, prev, removeNonDisplayedNodes, clear };
}
 * 
 * 
 function creatingSlider(imgFile, slideCaption, altStr, slideNo, display) {
  // let [vals] = [...slideArr];
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
// console.log(creatingSlider("ay"));

function sliderManager(showTitle) {
  this.title = showTitle;
  let sliderView = document.querySelector(".slide-view");
  //   let followingIndex;

  let slideElement = (imgObj) => {
    let domString = `<div class="slide-content" id="slide-${imgObj.slideNum}" style="${imgObj.displayStatus}">
            <img src="${imgObj.imgLoc}" alt="${imgObj.altData}"/>
            <div class="caption">${imgObj.imgCaption}</div>
        </div>`;
    return document.createRange().createContextualFragment(domString)
      .firstChild;
  };

  let renderSlides = function () {
    // let sliderView = document.querySelector(".slide-view");
    // console.log(...slidesObj.map(slideElement));
    sliderView.append(...slidesObj.map(slideElement));
  };
  //   let add = (slide) => slideElement(slide);
  let add = (slide) => slidesObj.push(slide);
  let next = (evt) => {
    let nodeID = evt.target.parentNode.querySelector(".slide-content").id;
    let id = Number(nodeID.split("-")[1]) - 1;
    console.log(id);
    // followingIndex = id + 1 < slidesObj.length ? id + 1 : 0;
    let followingIndex = id + 1 < slidesObj.length ? id + 1 : 0;
    slidesObj = slidesObj.map((slide, index) => {
      if (index === followingIndex) {
        return { ...slide, displayStatus: "display:block" };
      } else {
        return { ...slide, displayStatus: "display:none" };
      }
    });
    clear();
    renderSlides();
    // console.log(evt.target);
  };
  //   let showFollowing = (slide, index) => {
  //     if (index === followingIndex) {
  //       return { ...slide, displayStatus: "display:block" };
  //     } else {
  //         return {...slide, displayStatus: "display:none"};
  //     }
  //   }
  let prev = (evt) => {
    let nodeID = evt.target.parentNode.querySelector(".slide-content").id;
    let id = Number(nodeID.split("-")[1]) - 1;
    // followingIndex = (id - 1) >= 0 ? (id - 1) : slidesObj.length - 1;
    let followingIndex = id - 1 >= 0 ? id - 1 : slidesObj.length - 1;
    // slidesObj = slidesObj.map(showFollowing);
    slidesObj = slidesObj.map((slide, index) => {
      if (index === followingIndex) {
        return { ...slide, displayStatus: "display:block" };
      } else {
        return { ...slide, displayStatus: "display:none" };
      }
    });
    console.log(id, slidesObj);
    clear();
    renderSlides();
  };
  //   let clear = () => sliderView.querySelector(".slide-content").textContent = "";
  let clear = () => (sliderView.textContent = "");
  let removeNonDisplayedNodes = () => sliderView.childNodes.forEach(node => {
    console.log("<>",node.id);
      if(node.style.display !== "block") node.remove();
  });
  let start = function () {
    renderSlides();
  };
  return { start, add, next, prev, removeNonDisplayedNodes, clear };
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
];

let slidesObj = slides.map((item) => {
  let [file, caption, alt, num, display] = [...item];
  return creatingSlider(file, caption, alt, num, display);
});
console.log(slidesObj);

let slideShow = sliderManager("sample show");
slideShow.start();

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
next.addEventListener("click", (evt) => {
    // slideShow.removeNonDisplayedNodes();
    slideShow.next(evt);
    slideShow.removeNonDisplayedNodes();
});
prev.addEventListener("click", (evt) => {
    slideShow.prev(evt);
    slideShow.removeNonDisplayedNodes();
});
 * 
 * 
 function creatingSlider(imgFile, slideCaption, altStr, slideNo, display) {
  // let [vals] = [...slideArr];
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
// console.log(creatingSlider("ay"));

function sliderManager(showTitle) {
  this.title = showTitle;

  let slideElement = (imgObj) => {
    let domString = `<div class="slide-content" id="slide-${imgObj.slideNum}" style="${imgObj.displayStatus}">
            <img src="${imgObj.imgLoc}" alt="${imgObj.altData}"/>
            <div class="caption">${imgObj.imgCaption}</div>
        </div>`;
    return document.createRange().createContextualFragment(domString)
      .firstChild;
  };

  let renderSlides = function () {
    let sliderView = document.querySelector(".slide-view");
    // console.log(...slidesObj.map(slideElement));
    sliderView.append(...slidesObj.map(slideElement));
  };
  //   let add = (slide) => slideElement(slide);
  let add = (slide) => slidesObj.push(slide);
  let start = function () {
    renderSlides();
  };
  return { start, add };
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
];

// let slidesArr = slides.map(item => [...item]);
// console.log(slidesObj);
let slidesObj = slides.map((item) => {
  let [file, caption, alt, num, display] = [...item];
  // console.log(file,caption,alt,num,display);
  return creatingSlider(file, caption, alt, num, display);
});
// console.log(slidesObj);
let slideShow = sliderManager("sample show");
// slidesObj.map((item) => slideShow.add(item));
slideShow.start();
// console.log(slideShow);
 * 
 * 
 function creatingSlider(slideArr) {
    // let [vals] = [...slideArr];
  this.imgLoc = slideArr[0];
  this.imgCaption = slideArr[1];
  this.altData = slideArr[2];
  this.slideNum = slideArr[3];
  this.displayStatus = slideArr[4];

  return {
    imgLoc,
    imgCaption,
    altData,
    slideNum,
    displayStatus,
  };
}
// console.log(creatingSlider("ay"));

function sliderManager(showTitle) {
  this.title = showTitle;

  let slideElement = (imgObj) => {
    let domString = `<div class="slide-content" id="slide-"${imgObj.slideNum} style="display:${imgObj.displayStatus}">
            <img src="${imgObj.imgLoc}" alt="${imgObj.altData}"/>
            <div class="caption">${imgObj.imgCaption}</div>
        </div>`;
    return document.createRange().createContextualFragment(domString)
      .firstChild;
  };

  let renderSlides = function () {
    let sliderView = document.querySelector(".slider-view");
    // sliderView.append(...imgArr.map(slideElement));
    // console.log(s1.map(slideElement));
    sliderView.append(s1.map(slideElement));
  };
  let add = (slide) => slideElement(slide);
  let start = function () {
    renderSlides();
  };
  return { start, add };
}

let s1 = [
    "../slides/slide-01.jpg",
    "Slide 01 caption text",
    "slide 01 alt text",
    01,
    "display:'none'",
  ];
  let s2 = [
    "../slides/slide-01.jpg",
    "Slide 01 caption text",
    "slide 01 alt text",
    01,
    "display:'none'",
  ];

let slideShow = sliderManager("Sample Show");
slideShow.add(s1);
slideShow.add(s2);
slideShow.start();

let slides = s1.concat(s2);
slides = slides.map(item => slideShow.add(item));
console.log(slides);
 * 
 * 
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
 * 
 * 
 function sliderManager(showTitle) {
  this.title = showTitle;
//   let slideElement = (imgObj) => {
//     let domString = `<div class="slide-content" id="slide-"${imgObj.slideNum} style="display:${imgObj.displayStatus}">
//             <img src="${imgObj.imgLoc}" alt="${imgObj.altData}"/>
//             <div class="caption">${imgObj.imgCaption}</div>
//         </div>`;
//     return document.createRange().createContextualFragment(domString)
//       .firstChild;
//   };
  let renderSlides = function () {
    let sliderView = document.querySelector(".slider-view");
    // sliderView.append(...imgArr.map(slideElement));
    // console.log(s1.map(slideElement));
    // sliderView.append(s1.map(slideElement));
  };
  let add = (slide) => creatingSlider(slide);
  let start = function () {
    renderSlides();
  };
  return { start, add };
}
 * 
 * 
 function creatingSlider(imgFile, slideCaption, altStr, slideNo, display) {
  this.imgLoc = imgFile;
  this.imgCaption = slideCaption;
  this.altData = altStr;
  this.slideNum = slideNo;
  this.displayStatus = display;

  // let slideShow = sliderManager("Sample Show");
  // imgArr.forEach(item => slideShow.add(item));
  // console.log(this.showTitle);
  return {
    imgLoc,
    imgCaption,
    altData,
    slideNum,
    displayStatus,
  };
}
// console.log(creatingSlider("ay"));

function sliderManager(showTitle) {
  this.title = showTitle;
  let slideElement = (imgObj) => {
    let domString = `<div class="slide-content" id="slide-"${imgObj.slideNum} style="display:${imgObj.displayStatus}">
            <img src="${imgObj.imgLoc}" alt="${imgObj.altData}"/>
            <div class="caption">${imgObj.imgCaption}</div>
        </div>`;
    return document.createRange().createContextualFragment(domString)
      .firstChild;
  };
  let renderSlides = function () {
    let sliderView = document.querySelector(".slider-view");
    // sliderView.append(...imgArr.map(slideElement));
    // console.log(s1.map(slideElement));
    sliderView.append(s1.map(slideElement));
  };
  let add = (slide) => creatingSlider(slide);
  let start = function () {
    renderSlides();
  };
  return { start, add };
}

let s1 = [
    "../slides/slide-01.jpg",
    "Slide 01 caption text",
    "slide 01 alt text",
    01,
    "display:'none'",
  ];
  let s2 = [
    "../slides/slide-01.jpg",
    "Slide 01 caption text",
    "slide 01 alt text",
    01,
    "display:'none'",
  ];

let slideShow = sliderManager("Sample Show");
slideShow.add(s1);
slideShow.add(s2);
slideShow.start();
 * 
 * 
 function creatingSlider(title, imgFile, slideCaption, altStr, slideNo, display) {
    this.showTitle = title;
    this.imgLoc = imgFile;
    this.imgCaption = slideCaption;
    this.altData = altStr;
    this.slideNum = slideNo;
    this.displayStatus = display;

    // console.log(this.showTitle);
    return {
        showTitle,
        imgLoc,
        imgCaption,
        altData,
        slideNum,
        displayStatus
    }
}
 */
