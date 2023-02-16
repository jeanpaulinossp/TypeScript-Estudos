"use strict";
console.log(document.constructor);
class Produto {
    constructor(nomezin, precin) {
        // readonly não deixa modificar mais essa propriedade
        // protected permite acessar através de subclasses
        this.tipo = "produto";
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
