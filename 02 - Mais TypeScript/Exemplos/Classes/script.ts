console.log(document.constructor);

class Produto {
  // readonly não deixa modificar mais essa propriedade
  // protected permite acessar através de subclasses
  readonly tipo = "produto";

  public nomezin: string;

  protected precin: number;

  constructor(nomezin: string, precin: number) {
    this.nomezin = nomezin;
    this.precin = precin;
  }
  getPreco() {
    return Produto.transformarPreco(this.precin);
  }
  static transformarPreco(precoTransformado: number) {
    return `R$ ${precoTransformado}`;
  }
}

const livro = new Produto("O Senhor dos Anéis", 300);

console.log(livro.getPreco());
console.log(livro.nomezin);
