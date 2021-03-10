function renderSlides(arr) {
    let slides = document.querySelector(".slide-view");
    // let slides = document.querySelector(".container");

    // what each array item should return when called from map() method
    // it should return a html Fragment for DOM to use and display
    let slideItem = slideObj => {
        return document.createRange().createContextualFragment(
            `<div id="${slideObj.slideNo}">
                <figure class="slide">
                    <img src="${slideObj.resLoc}" alt="${slideObj.altText}"/>
                    <figcaption class="caption">${slideObj.caption}</figcaption>
                </figure>
            </div>`
        ).firstChild;
    }

    // arr uising map method, so that it can starts creating DOM ready elements
    slides.append(...arr.map(slideItem));
}

let imgArr = [
    {
        resLoc: "./slides/slide-01.jpg",
        caption: "Silde 01 text here",
        altText: "slide 01 alt text",
        slideNo: 01,
    },
    // {
    //     resLoc: "./slides/slide-02.jpg",
    //     caption: "Silde 02 text here",
    //     altText: "slide 02 alt text",
    //     slideNo: 02,
    // }
];

renderSlides(imgArr);


/**
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