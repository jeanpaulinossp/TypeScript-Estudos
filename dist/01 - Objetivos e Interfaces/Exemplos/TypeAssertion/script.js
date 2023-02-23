"use strict";
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
const video2 = document.querySelector("video");
video2?.volume;
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
const video5 = document.querySelector(".player");
const video6 = document.querySelector("player");
video6.volume;
//# sourceMappingURL=script.js.map