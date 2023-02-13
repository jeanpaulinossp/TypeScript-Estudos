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
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const json = yield response.json();
        handleCursos(json);
    });
}
fetchCursos();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log("É uma instância de Array");
    }
    if (Array.isArray(data)) {
        console.log("É array");
    }
}
function isString(value) {
    return typeof value === "string";
}
function handleData(data) {
    if (isString(data)) {
        data.toLowerCase;
    }
}
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const json = yield response.json();
        handleProduto(json);
    });
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        if (typeof data.nome === "string") {
            console.log("é uma string");
        }
    }
}
