let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
  for (let jindex = 0; jindex < numbers.length - index; jindex += 1){
    if(numbers[jindex] < numbers[jindex+1]){
      let aux = numbers[jindex];
      numbers[jindex] = numbers[jindex+1];
      numbers[jindex+1] = aux;
    }
  }
}

console.log(numbers);