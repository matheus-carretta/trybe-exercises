let number = 5;
let symbol = '*';
let space = '-';
let line = '';

for(let index = 0; index < number; index += 1){
  for(let secondIndex = 1; secondIndex <= number; secondIndex +=1){
    if(index < (number - secondIndex)){
      line = line + space;
    }else{
      line = line + symbol;
    }
  }
  console.log(line);
  line = '';
}