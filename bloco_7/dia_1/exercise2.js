// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.
// Copiar
//       const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//       // Seu código aqui.

//       console.log(oddsAndEvens);


//método padrão
const oddsAndEvens = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        const aux = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = aux;
      }
    }
  }
  console.log(`Os números ${array} se encontram ordenados de forma crescente!`);
}

oddsAndEvens([13, 3, 4, 10, 7, 2]);


//usando sort
const oddsAndEvens = (array) => {
  array.sort((a, b) => a - b);
  console.log(`Os números ${array} se encontram ordenados de forma crescente!`);
}

oddsAndEvens([13, 3, 4, 10, 7, 2]);

//em uma linha
const oddsAndEvens = (array) => array.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens([13, 3, 4, 10, 7, 2])} se encontram ordenados de forma crescente!`);