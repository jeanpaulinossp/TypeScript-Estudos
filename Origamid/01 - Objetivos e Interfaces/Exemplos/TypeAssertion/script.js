"use strict";
// Exemplo 01 - Type Assertion
const video = document.querySelector("#video");
video.volume;
async function fetchProdutoExTypeAssertion() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json();
}
async function handleProdutoExTypeAssertion() {
    const produto = await fetchProdutoExTypeAssertion();
    console.log(produto.nome);
}
handleProdutoExTypeAssertion();
// Exemplo 02 - Non-Null Operator
const video2 = document.querySelector("video");
video2 === null || video2 === void 0 ? void 0 : video2.volume;
// Exemplo 03 - Demais
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
const video5 = document.querySelector(".player"); // + seguro
const video6 = document.querySelector("player");
video6.volume;
