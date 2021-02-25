let valorCusto = 50;
let valorVenda = 100;
let qtProdutosVendidos = 1000;
let impostoCusto = valorCusto*0.2;
let valorCustoTotal = valorCusto + impostoCusto;
let lucro = valorVenda - valorCustoTotal;

if(valorCusto < 0 || valorVenda < 0){
  console.log("Erro ao executar");
}else{
  console.log("Custo do produto: " + valorCusto);
  console.log("O imposto do custo do produto é de 20%, logo: " + impostoCusto);
  console.log("O custo total do produto é: " + valorCustoTotal);
  console.log("O valor de Venda do produto é: " + valorVenda);
  console.log("O lucro de cada venda é de: " + lucro);
  console.log("Caso sejam vendidos 1000 produtos, o lucro total é de: " + lucro * 1000);
}