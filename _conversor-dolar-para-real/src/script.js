var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;
var nomeDoUsuario = " Maraisa";

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert(
  "Olá" + nomeDoUsuario + ", o valor em Real é " + "R$" + valorEmReal + "!"
);
