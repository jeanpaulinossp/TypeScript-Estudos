"use strict";
// => Exemplo 1 --------------------------------------------------------------
// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }
// console.log(retorno<string>("O game"));
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));
// => Exemplo 2 --------------------------------------------------------------
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const frutas = ["Banana", "Pera", "Uva", "Laranja", "Limão", "Maçã"];
// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5);
// }
// console.log(firstFive<number>(numeros));
// firstFive(frutas).map((item) => console.log(item));
// => Exemplo 3 --------------------------------------------------------------
// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }
// console.log(notNull<string>("Jean")?.toLowerCase());
// console.log(notNull<number>(200)?.toFixed());
// => Exemplo 4 --------------------------------------------------------------
function tipoDado(argumento) {
    const resultado = {
        dado: argumento,
        tipo: typeof argumento,
    };
    console.log(resultado);
    return resultado;
}
tipoDado("Teste");
tipoDado(200);
