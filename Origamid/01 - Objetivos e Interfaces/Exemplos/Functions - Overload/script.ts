// ao passar o overload é possível acessar os métodos de cada tipo conforme a chamada da função
function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

console.log(normalizar(" Produto").toUpperCase());
console.log(normalizar([" Banana", "UVA    "]));

function seletor(seletor: "a"): HTMLAnchorElement | null;
function seletor(seletor: "video"): HTMLVideoElement | null;
function seletor(seletor: string): Element | null;
function seletor(seletor: string): Element | null {
  return document.querySelector(seletor);
}

seletor("a");
