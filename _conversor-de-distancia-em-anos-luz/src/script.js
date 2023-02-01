var distanciaEmAnosLuz = 2;
var valorDoAnoLuz = 299792458;
var nomeDoUsuario = " Maraisa";

var distanciaEmMetros = distanciaEmAnosLuz * valorDoAnoLuz;
distanciaEmMetros = distanciaEmMetros.toFixed(2);
alert(
  "Olá" + nomeDoUsuario + ", a distância é " + distanciaEmMetros + " metros"
);
