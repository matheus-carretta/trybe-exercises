// 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// n = 5

// *****
// *****
// *****
// *****
// *****

let squareSize = 5;
let square = '';

if (squareSize <= 1) {
  console.log("Não tem como fazer um quadrado com 1 asterisco ou menos");
} else {
  for (let index = 0; index < squareSize; index += 1) {
    square = square + '*';
  }

  for (index = 0; index < squareSize; index += 1) {
    console.log(square);
  }
}