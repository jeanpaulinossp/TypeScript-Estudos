type Products = {
  preco: number;
};

type Car = {
  rodas: number;
  portas: number;
};

type Livro = {
  paginas: number;
};

function handleProductCar(dados: Products & Car) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProductCar({ rodas: 4, portas: 5, preco: 300000 });

// Exemplo com Type
type typeCar = {
  rodas: number;
  portas: number;
};

type typeCarWithPrice = typeCar & {
  preco: number;
};

// Exemplo com Interface
interface InterfaceCar {
  rodas: number;
  portas: number;
}

interface InterfaceCar {
  preco: number;
}

function handleInterfaceCar(carro: InterfaceCar) {
  carro.portas;
  carro.preco;
  carro.rodas;
}
