let pecaXadrez = "DAMA";

pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez){
  case "rei":
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez");
    break;

  case "dama":
    console.log("Pode mover-se em qualquer direção e quantas casas quiser, desde que estejam livres")
    break;

  case "torre":
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser, desde que estejam livres");
    break;

  case "bispo":
    console.log("Move-se na diagonal, quantas casas quiser, desde que estejam livres");
    break;
  
  case "cavalo":
    console.log("Move-se em formato de 'L', duas casas na horizontal e uma na vertical ou vice-versa, podendo saltar sobre as peças");
    break;

  case "peao":
  case "peão":
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
    break;

  default:
    console.log("Peça não enontrada, favor, digitar novamente");
    break;
}