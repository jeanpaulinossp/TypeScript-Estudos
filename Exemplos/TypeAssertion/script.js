"use strict";
// Exemplo 01 - Type Assertion
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const video = document.querySelector("#video");
video.volume;
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        return response.json();
    });
}
function handleProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProduto();
        console.log(produto.nome);
    });
}
handleProduto();
// Exemplo 02 - Non-Null Operator
const video2 = document.querySelector("video");
video2 === null || video2 === void 0 ? void 0 : video2.volume;
// Exemplo 03 - Demais
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
const video5 = document.querySelector(".player"); // + seguro
const video6 = document.querySelector("player");
video6.volume;
