// import {someName as sn} from "./exampleModule";
import someName from "./exampleModule";
function component() {
    let divEl = document.createElement("div");
    // divEl.innerHTML = sn("Lassies");
    divEl.innerHTML = someName("Lassies");
    return divEl;
}
document.body.append(component());