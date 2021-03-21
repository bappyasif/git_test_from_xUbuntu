import _ from "lodash";
import "./style.css"; // including css file within Dependency Graph using import
import samplePicture from "./resources/maps-01.jpg"; // including images into dependency graph as well using import
import data from "./resources/data.xml";
import contacts from "./resources/contacts.csv";
// no warning
import jsonData from "./resources/exampleData.json"
// warning shown, not allowed by spec
// import {jsonData} from "./resources/exampleData.json";
// including json5 into webpack dependency graph
import json from "./resources/sampleData.json5";
// importing an another .js
import printThis from "./print";

function component() {
    let element = document.createElement("div");
    element.innerHTML = _.join(["Hello", "Webpack"], " <{}> ");
    element.classList.add("hello");
    // adding image
    let imgDiv = new Image();
    imgDiv.src = samplePicture;
    // imgDiv.height = "56vh";
    // imgDiv.width = "65vw";
    element.append(imgDiv);

    let btnEl = document.createElement("button");
    btnEl.innerHTML = "Click and check console";
    btnEl.onclick = printThis;
    element.append(btnEl);

    // element.append(data);
    element.append(contacts);
    console.log(contacts, data);

    let demoEl = document.createElement("div");
    demoEl.textContent = json.objectValues.name +" "+json.objectValues.bio;
    element.insertAdjacentElement("afterbegin", demoEl);
    console.log(json.objectValues.name+ " "+json.objectValues.bio);

    return element;
}

document.body.append(component());