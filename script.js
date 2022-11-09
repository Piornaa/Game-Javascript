
// numeros aleatorios
var player1 = Math.floor((Math.random()*6)+1);
var player2 = Math.floor((Math.random()*6)+1);

var dado1 = "images/dice" + player1 + ".png";
var dado2 = "images/dice" + player2 + ".png";

// numeros cambian los dados
var img = document.getElementsByTagName("img")[0];
img.setAttribute("src", dado1);
var img2 = document.getElementsByTagName("img")[1];
img2.setAttribute("src", dado2);

// cambio de encabezado
var encabezado = document.querySelector("h2");


if (player1>player2) {
    encabezado.innerHTML="Win Player 1!";
}
else if (player1===player2) {
    encabezado.innerHTML="Empate, cuak!";
}
else {
    encabezado.innerHTML="Win Player 2!";
}

// refresh
var button = document.querySelector(".volver")
button.addEventListener("click",function(){
    encabezado.innerHTML="Refresh Me";
    img.setAttribute("src", "images/dice6.png");
    img2.setAttribute("src", "images/dice6.png");
})





