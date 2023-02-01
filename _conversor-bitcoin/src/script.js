var valorEmBitcoin = 50;
var cotacaoDoBitcoin = 117608.3;
var nomeDoUsuario = " Maraisa";

var valorEmReal = valorEmBitcoin * cotacaoDoBitcoin;
valorEmReal = valorEmReal.toFixed(2);
alert(
  "Olá" + nomeDoUsuario + ", o valor em Bitcoin é " + "R$ " + valorEmReal + "!"
);
