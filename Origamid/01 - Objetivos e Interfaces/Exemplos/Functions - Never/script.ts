function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

abortar("Deu ruim");
console.log("Tenta novamente parceiro"); // não chegara até aqui
