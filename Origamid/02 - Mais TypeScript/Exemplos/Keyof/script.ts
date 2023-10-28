// => Keyof

interface ProdutoKeyof {
  nomeKeyof: string;
  precoKeyof: number;
  novoKeyof: boolean;
}

let chave: keyof ProdutoKeyof;
chave = "novoKeyof";

// => Typeof

function coordenadasTypeof(xType: number, yType: number) {
  return { xType, yType };
}

let coordTypeof: typeof coordenadasTypeof;

coordTypeof = (xType: number, yType: number) => {
  return {
    xType,
    yType,
  };
};
