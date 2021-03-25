// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

//método tradicional
const fatorial = (numero) => {
  let fat = 1;
  for(let index = 1; index <= numero; index += 1) {
    fat = fat * index;
  }
  return fat;
}

console.log(fatorial(4));

//recursivo
const fatorial = (numero) => {
  if(numero <= 1){
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorial(4));

//uma linha
const fatorial = numero => (numero <=1) ? 1 : numero * fatorial(numero - 1);
console.log(fatorial(4));