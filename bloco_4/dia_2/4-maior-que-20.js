let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let plus = 0;

for(let index = 0; index < numbers.length; index +=1){
  plus = plus + numbers[index];
}

average = plus / numbers.length;

console.log("Soma dos valores: " + plus);
console.log("Quantidade de valores: "  + numbers.length);
console.log("Média aritmética é: " + average);
console.log("----------------------------")
if(average > 20){
  console.log("Valor maior que 20");
}else{
  console.log("Valor menor que 20");
}