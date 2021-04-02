let number = 5;
let symbol = '*';
let space = ' ';
let line = '';
let middle = (number + 1) / 2;
let left = middle;
let right = middle;

for (let index = 1; index <= middle; index += 1) {
  for (let secondIndex = 1; secondIndex <= number; secondIndex += 1) {
    if (secondIndex >= left && secondIndex <= right) {
      line += symbol;
    } else {
      line += space;
    }
  }
  console.log(line);
  line = '';
  left--;
  right++;
}