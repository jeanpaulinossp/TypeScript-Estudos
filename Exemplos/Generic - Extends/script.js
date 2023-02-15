"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.json();
    });
}
function handleDataExExtends() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData("https://api.origamid.dev/json/notebook.json");
        console.log(notebook);
    });
}
handleDataExExtends();
