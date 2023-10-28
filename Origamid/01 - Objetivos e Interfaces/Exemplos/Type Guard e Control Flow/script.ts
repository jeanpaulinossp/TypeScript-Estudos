function typeGuardExTypeGuard(value: any) {
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

typeGuardExTypeGuard(200);
typeGuardExTypeGuard("333");
typeGuardExTypeGuard(document.body);

const obj = {
  nome: "Origamid",
};

if ("nome" in obj) {
  console.log("Existe");
}

async function fetchProdutoExTypeGuard() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProdutoExTypeGuard(json);
}

interface Produto {
  nome: string;
  preco: number;
}

function handleProdutoExTypeGuard(data: Produto) {
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

fetchProdutoExTypeGuard();
