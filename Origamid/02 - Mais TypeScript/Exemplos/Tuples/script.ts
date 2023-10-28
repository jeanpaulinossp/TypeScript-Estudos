// => Exemplo 01
const produto01 = ["Notebook", 2500];

if (typeof produto01[0] === "string") {
  console.log(produto01[0].toLocaleLowerCase());
} else if (typeof produto01[1] === "number") {
  console.log(produto01[1].toFixed());
}

const produto02: [string, number] = ["Notebook", 2500];
console.log(produto02[0].toLocaleLowerCase());
console.log(produto02[1].toFixed());

const [nome, preco] = produto02; // destructuring

// => Exemplo 02
function getText(selector01: string) /* : null | [HTMLElement, string] */ {
  const element01 = document.querySelector<HTMLElement>(selector01);
  if (element01) {
    return [element01, element01.innerHTML] as const; // faz a mesma coisa que acima comentado
  } else {
    return null;
  }
}

const button01 = getText("button");

if (button01) {
  button01[0].classList;
}
console.log(button01);
