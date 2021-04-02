const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index, array) => {
  names[index] = name.toUpperCase();
  console.log(array)
};

names.forEach(convertToUpperCase);
