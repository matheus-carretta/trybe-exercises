// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

let number = 5;
let line = '';

for (let index = 0; index < number; index += 1) {
  line = line + '*';
  console.log(line);
}