"use strict";
function tipoDado(argumento) {
    const resultado = {
        dado: argumento,
        tipo: typeof argumento,
    };
    console.log(resultado);
    return resultado;
}
tipoDado("Teste");
tipoDado(200);
//# sourceMappingURL=script.js.map