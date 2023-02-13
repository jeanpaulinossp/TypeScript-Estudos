// Exemplo 01 - Type Assertion

const video = document.querySelector("#video") as HTMLVideoElement;

video.volume;

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto = await fetchProduto();
  console.log(produto.nome);
}

handleProduto();

// Exemplo 02 - Non-Null Operator

const video2 = document.querySelector("video")!;

video2?.volume;

// Exemplo 03 - Demais

const video3 = document.querySelector(".player") as HTMLVideoElement;
const video4 = <HTMLVideoElement>document.querySelector(".player");
const video5 = document.querySelector<HTMLVideoElement>(".player"); // + seguro
const video6 = document.querySelector("player");
(video6 as HTMLVideoElement).volume;
