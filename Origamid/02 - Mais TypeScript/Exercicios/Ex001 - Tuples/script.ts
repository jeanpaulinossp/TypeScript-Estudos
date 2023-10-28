async function fetchVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  console.log(data);
  somarVendas(data);
}

fetchVendas();

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, ProdutoDetalhes];

function somarVendas(vendas: Venda[]) {
  let totalVendas = 0;
  for (let i = 0; i < vendas.length; i++) {
    totalVendas += vendas[i][1];
  }
  document.body.innerHTML += `<p>Total: R$${totalVendas}</p>`;

  const totalVendas2 = vendas.reduce((anterior, atual) => {
    return anterior + atual[1];
  }, 0);

  document.body.innerHTML += `<p>Total: R$${totalVendas2}</p>`;
}
