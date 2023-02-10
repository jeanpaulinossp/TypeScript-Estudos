"use strict";
function abortar(mensagem) {
    throw new Error(mensagem);
}
abortar("Deu ruim");
console.log("Tenta novamente parceiro"); // não chegara até aqui
