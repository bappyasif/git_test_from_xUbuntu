function createMenuNavDD(menuItems) {
  let navDiv = document.querySelector(".nav-div");
//   let allNavs = navDiv.querySelectorAll("nav a");

  let allMenus = (menuObj) => {
    return document
      .createRange()
      .createContextualFragment(
        `<a href="${menuObj.hrefRet}"><img src="${menuObj.foto.url}" alt="${menuObj.foto.alt}"></img>${menuObj.text}</a>`
      ).firstChild;
  };

  navDiv.append(...menuItems.map(allMenus));
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
        alt: "menu icon first foto",
        url: "./icons/menu-02.svg",
      },
    },
  ];

createMenuNavDD(menuItems);

/**
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
