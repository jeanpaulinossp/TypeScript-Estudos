// Exemplo 01

const { body }: { body: HTMLElement } = document;

interface Produto {
  nome: string;
  preco: number;
}

function handleData1({ nome, preco }: Produto) {
  nome.includes("books");
  preco.toFixed();
}

// handleData1({
//   nome: "Notebook",
//   preco: 500,
// });

// Exemplo 02

function handleClick5({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX} </h1>`;
  }
}

document.documentElement.addEventListener("click", handleClick5);

// Exemplo 03
function handleClick6({ currentTarget, pageX }: MouseEvent) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX} </h1>`;
  }
}

document.documentElement.addEventListener("click", handleClick6);

// Exemplo 04

function handleClick7({
  currentTarget,
}: {
  currentTarget: EventTarget | null;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse click em x: 1 </h1>`;
  }
}

document.documentElement.addEventListener("click", handleClick7);
document.documentElement.addEventListener("touchstart", handleClick7);

// Exemplo 05 - REST

function comparar(tipo: "menor" | "maior", ...numeros: number[]) {
  if (tipo === "menor") {
    return Math.min(...numeros);
  }
  if (tipo === "maior") {
    return Math.max(...numeros);
  }
}

console.log(comparar("menor", 1, 2, 3, 4, 15, 6, 7, 20, 30, 5));
console.log(comparar("maior", 1, 2, 3, 4, 15, 6, 7, 20, 30, 5));
