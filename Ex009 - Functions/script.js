"use strict";
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredValor(num) {
    if (typeof num === "number") {
        return Math.ceil(num);
    }
    else {
        return Math.ceil(Number(num)).toString();
    }
}
console.log(arredValor(200.98));
console.log(arredValor("203.32"));
