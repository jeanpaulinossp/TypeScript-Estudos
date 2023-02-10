function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard(200);
typeGuard("333");
typeGuard(document.body);

const obj = {
  nome: "Origamid",
};

if ("nome" in obj) {
  console.log("Existe");
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(data: Produto) {
  console.log(data);
  if ("preco" in data) {
    document.body.innerHTML += `
  <p>Nome: ${data.nome}</p>
  <p>Preço: ${data.preco + 100}</p>
  `;
  } else {
    document.body.innerHTML += `
  <p>Entre em contato com o suporte</p>`;
  }
}

fetchProduto();
