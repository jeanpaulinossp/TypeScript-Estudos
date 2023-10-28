"use strict";
var _a;
// Exemplo 01 ----------------------------------------------------------
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
// Exemplo 02 ----------------------------------------------------------
function $(selector) {
    return document.querySelector(selector);
}
const linkPark = (_a = $("a")) === null || _a === void 0 ? void 0 : _a.href;
console.log("LinkPark", linkPark);
// Exemplo 03 ----------------------------------------------------------
const linking = document.querySelector(".link");
if (linking instanceof HTMLVideoElement)
    linking === null || linking === void 0 ? void 0 : linking.volume;
// Exemplo 04 ----------------------------------------------------------
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleDataExExtends() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook);
}
handleDataExExtends();
