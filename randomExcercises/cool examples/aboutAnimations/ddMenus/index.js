function onHoverMenuDD() {
    let hoverDD = document.querySelector(".on-hover");
    hoverDD.addEventListener("click", handleDD);
}

function handleDD(evt) {
    if(evt.target.classList.contains("clicked")){
        evt.target.classList.remove("nav", "clicked");
        // evt.target.classList.remove("clicked");
        evt.target.querySelector("nav").style.display = "none";
    } else {
        evt.target.querySelector("nav").style.display = "flex";
        // evt.target.classList.add("clicked");
        evt.target.classList.add("nav", "clicked");

    }
}

onHoverMenuDD();