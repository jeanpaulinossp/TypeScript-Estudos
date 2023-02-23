"use strict";
function extractText(el) {
    return {
        text: el.innerHTML,
        el,
    };
}
const linkSite = document.querySelector("a");
if (linkSite) {
    console.log("linkSite", extractText(linkSite).el.href);
}
function $(selector) {
    return document.querySelector(selector);
}
const linkPark = $("a")?.href;
console.log("LinkPark", linkPark);
const linking = document.querySelector(".link");
if (linking instanceof HTMLVideoElement)
    linking?.volume;
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleDataExExtends() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook);
}
handleDataExExtends();
//# sourceMappingURL=script.js.map