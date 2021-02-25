let aliquotaINSS;
let aliquotaIR;
let deducaoIR;
let salarioBruto = 3000;
let salarioPosINSS;
let salarioFinal;

if(salarioBruto <=1556.94){
  console.log("Aliquota de 8%");
  aliquotaINSS = salarioBruto * 0.08;
}else if(salarioBruto >=1556.95 && salarioBruto <=2594.92){
  console.log("Aliquota de 9%");
  aliquotaINSS = salarioBruto * 0.09;
}else if(salarioBruto >=2594.93 && salarioBruto <=5189.82){
  console.log("Aliquota de 11%");
  aliquotaINSS = salarioBruto * 0.11;
}else{
  console.log("Aliquota de R$570,88");
  aliquotaINSS = 570.88;
}

salarioPosINSS = salarioBruto - aliquotaINSS;
console.log("Seu salário base (após a redução do INSS), é de: " + salarioBruto + " - " + aliquotaINSS + " = " + salarioPosINSS);

if(salarioPosINSS <=1903.98){
  console.log("Isento de imposto");
  aliquotaIR = 0;
  deducaoIR = 0;
}else if(salarioPosINSS >=1903.99 && salarioPosINSS <=2826.65){
  console.log("Alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto");
  aliquotaIR = salarioPosINSS * 0.075;
  deducaoIR = 142.80;
}else if(salarioPosINSS >=2826.66 && salarioPosINSS <= 3751.05){
  console.log("Alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto");
  aliquotaIR = salarioPosINSS * 0.15;
  deducaoIR = 354.80;
}else if(salarioPosINSS >=3751.06 && salarioPosINSS <=4664.68){
  console.log("Alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto");
  aliquotaIR = salarioPosINSS * 0.225;
  deducaoIR = 636.13;
}else{
  console.log("Alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.");
  aliquotaIR = salarioPosINSS * 0.275;
  deducaoIR = 869.36;
}

salarioFinal = salarioPosINSS - (aliquotaIR - deducaoIR);

console.log("Salário final é: " + salarioPosINSS + " - (" + aliquotaIR + " - " + deducaoIR + ") = " + salarioFinal);