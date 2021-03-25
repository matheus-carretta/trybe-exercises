// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = frase => {
  let palavras = frase.split(' ');
  let maiorPalavra = '';
  let maiorTamanho = 0;

  for(let index = 0; index < palavras.length; index += 1){
    if(palavras[index].length > maiorTamanho){
      maiorTamanho = palavras[index].length;
      maiorPalavra = palavras[index];
    }
  }
  return maiorPalavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))