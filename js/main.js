const selecione = document.querySelector(".select");
const incremento = document.querySelector(".chave-container");
const btn = document.querySelector("button");
const radiobtn = document.querySelector(".radio-button");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");

// Incremento da Cifra de César
selecione.addEventListener("click", function () {
    if (selecione.value == "cifra") {
      incremento.style.display = "block";
    } else {
      incremento.style.display = "none";
    }
});

// Base64

function base64()
