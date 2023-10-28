// Exemplo 01 ----------------------------------------------------------
function extractText<T extends HTMLElement>(el: T) {
  return {
    text: el.innerHTML,
    el,
  };
}

const linkSite = document.querySelector("a");

if (linkSite) {
  console.log("linkSite", extractText(linkSite).el.href);
}

// Exemplo 02 ----------------------------------------------------------
function $<T extends Element>(selector: string): T | null {
  return document.querySelector(selector);
}

const linkPark = $<HTMLAnchorElement>("a")?.href;
console.log("LinkPark", linkPark);

// Exemplo 03 ----------------------------------------------------------
const linking = document.querySelector<HTMLVideoElement>(".link");

if (linking instanceof HTMLVideoElement) linking?.volume;

// Exemplo 04 ----------------------------------------------------------
async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleDataExExtends() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook);
}

handleDataExExtends();
