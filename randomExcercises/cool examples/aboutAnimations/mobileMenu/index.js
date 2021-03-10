function createMenuNavDD(menuItems) {
  let navDiv = document.querySelector(".nav-div nav");

  let allMenus = (menuObj) => {
    return document
      .createRange()
      .createContextualFragment(
        `<a href="${menuObj.hrefRet}"><img src="${menuObj.foto.url}" alt="${menuObj.foto.alt}"></img>${menuObj.text}</a>`
      ).firstChild;
  };

  navDiv.append(...menuItems.map(allMenus));

  // clearing initial nav display
  navDiv.style.display = "none";

  // usiing event listener in a function call so that it happens when an action occurs rather than resulting outcome immediately without calling of that event
  let menuSpan = document.querySelector("span");
  menuSpan.addEventListener("click", (evt) => showMenus(navDiv, evt));

  // trying to use highlight when menuItem is clicked
  navDiv.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (evt.target.closest("a").classList.contains("clicked")) {
        evt.target.style.color = "";
        evt.target.closest("a").classList.remove("clicked");
      } else {
        evt.target.closest("a").classList.add("clicked");
        evt.target.style.color = "Red";
      }
    });
  });
}

function showMenus(navDiv, evt) {
  if (navDiv.style.display !== "none") {
    navDiv.style.display = "none";
    evt.target.classList.remove("clicked");
    evt.target.textContent = "Click Here!!";
  } else {
    navDiv.style.display = "flex";
    evt.target.textContent = "Click Again!!";
    evt.target.classList.add("clicked");
  }
}

let menuItems = [
  {
    text: "First Item",
    hrefRet: "",
    foto: {
      alt: "menu icon first foto",
      url: "./icons/menu-02.svg",
    },
  },
  {
    text: "Second Item",
    hrefRet: "",
    foto: {
      alt: "menu icon second foto",
      url: "./icons/home-01.svg",
    },
  },
  {
    text: "Third Item",
    hrefRet: "",
    foto: {
      alt: "menu icon third foto",
      url: "./icons/addIcon.svg",
    },
  },
  {
    text: "Fourth Item",
    hrefRet: "",
    foto: {
      alt: "menu icon fourth foto",
      url: "./icons/alarm-clock.svg",
    },
  },
];

createMenuNavDD(menuItems);

/**
 * 
 * 
   // trying to use highlight when menuItem is clicked
  navDiv.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", (evt) => {
      evt.preventDefault();
      // evt.target.style.backgroundColor = "Red";
      if (
        // evt.target.closest("img").classList.contains("clicked") ||
        evt.target.closest("a").classList.contains("clicked") ||
        evt.target.classList.contains("clicked")
      ) {
        evt.target.style.color = "";
        evt.target.closest("a").classList.remove("clicked");
        // evt.target.closest("img").classList.remove("clicked");
        // evt.target.querySelector("img").classList.remove("clicked");
        // evt.target.closest("a").closest("img").classList.remove("clicked");
        // evt.target.classList.remove("clicked");
        // console.log(evt.target.closest("a"));
      } else {
        evt.target.closest("a").classList.add("clicked");
        // evt.target.closest("img").classList.add("clicked");
        // evt.target.querySelector("img").classList.add("clicked");
        // evt.target.closest("a").closest("img").classList.add("clicked");
        evt.target.style.color = "Red";
        // console.log(evt.target.closest("a"));
        // evt.target.classList.add("clicked");
        // evt.target.style.color = "Red";
        // console.log(evt.target.closest("a"));
      }
    });
  });
 * 
 * 
 function createMenuNavDD(menuItems) {
  let navDiv = document.querySelector(".nav-div nav");
//   let allNavs = navDiv.querySelectorAll("nav a");

  let allMenus = (menuObj) => {
    return document
      .createRange()
      .createContextualFragment(
        `<a href="${menuObj.hrefRet}"><img src="${menuObj.foto.url}" alt="${menuObj.foto.alt}"></img>${menuObj.text}</a>`
      ).firstChild;
  };

  navDiv.append(...menuItems.map(allMenus));
  // navDiv.addEventListener("click", showMenus);
  // navDiv.addEventListener("click", evt => showMenus(evt));
  let menuSpan =  document.querySelector("span");
  // menuSpan.addEventListener("click", showMenus(navDiv));
  // menuSpan.addEventListener("click", ()=>showMenus(navDiv));
  navDiv.style.display = "none";
  menuSpan.addEventListener("click", (evt)=>showMenus(navDiv, evt));
}

function showMenus(navDiv, evt) {
  // if(evt.target.style.display !== "none") {
  //   evt.target.style.display = "none";
  // } else {
  //   evt.target.style.display = "flex";
  // }
  if(navDiv.style.display !== "none") {
    navDiv.style.display = "none";
    evt.target.classList.remove("clicked");
    evt.target.textContent = "Click Here!!";
    // evt.target.classList.add("notClicked");
    // evt.target.classList.remove("clicked","nav-div", "span");
  } else {
    navDiv.style.display = "flex";
    evt.target.textContent = "Click Again!!";
    evt.target.classList.add("clicked");
    // evt.target.classList.remove("notClicked");
    // evt.target.classList.add("clicked","nav-div", "span");
  }
}
 * 
 * 
 function createMenuNavDD() {
    let navDiv =  document.querySelector(".nav-div");
    let allNavs = navDiv.querySelectorAll("nav a");
    
    allNavs.forEach((item,idx) => {
        let imgEl = document.createElement("img");
        imgEl.src = "./icons/menu-02.svg";
        item.insertAdjacentElement("afterbegin", imgEl);
    });
}
 * 
 * 
 function createMenuNavDD() {
    let navDiv =  document.querySelector(".nav-div");
    let allNavs = navDiv.querySelectorAll("nav a");
    allNavs.forEach(item => {
        let str = `<img src=${"./icons/menu-02.svg"}></img>`;
    //    item.insertAdjacentElement("afterbegin", str) 
    item.insertAdjacentHTML("afterbegin", str);
    });
    // navDiv.insertAdjacentElement("afterbegin", `<img src=${"/icons/menu-02.svg"}></img>`)
}
 * 
 * 
 function createMenuNavDD() {
    let navDiv =  document.querySelector(".nav-div");
    let allNavs = navDiv.querySelectorAll("nav a");
    // console.log(allNavs.length);
    let frgs = [];
    allNavs.forEach(item => {
        let ctx = document.createRange();
        let domString = `<img src="${"./icons/menu-02.svg"}"></img>`;
        ctx.createContextualFragment(domString);
        // console.log(domString, ctx);
        // console.log(item);
        // item.append(ctx);
        frgs.push(ctx);
    });
    // console.log(allNavs[0].querySelector("img"));
    // console.log(frgs[0].queryString("img"))
    // console.log(frgs[0])
}
 */
