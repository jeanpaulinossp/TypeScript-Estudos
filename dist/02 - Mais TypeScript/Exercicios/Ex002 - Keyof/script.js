"use strict";
async function fetchDataExKeyof(url) {
    const base = "https://api.origamid.dev/json";
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterfaceExKeyof(obj, key) {
    if (obj && typeof obj === "object" && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function handleDataExKeyof() {
    const jogo = await fetchDataExKeyof("/jogo.json");
    if (checkInterfaceExKeyof(jogo, "desenvolvedora")) {
        console.log(jogo);
    }
    const livro = await fetchDataExKeyof("/livro.json");
    if (checkInterfaceExKeyof(livro, "autor")) {
        console.log(livro);
    }
}
handleDataExKeyof();
//# sourceMappingURL=script.js.map