"use strict";
console.log(document.constructor);
class Produto {
    tipo = "produto";
    nomezin;
    precin;
    constructor(nomezin, precin) {
        this.nomezin = nomezin;
        this.precin = precin;
    }
    getPreco() {
        return Produto.transformarPreco(this.precin);
    }
    static transformarPreco(precoTransformado) {
        return `R$ ${precoTransformado}`;
    }
}
const livro = new Produto("O Senhor dos Anéis", 300);
console.log(livro.getPreco());
console.log(livro.nomezin);
//# sourceMappingURL=script.js.map