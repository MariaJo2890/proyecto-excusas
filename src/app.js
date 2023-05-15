/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "Britney Spears",
  "El Guarda",
  "Mi Tata",
  "Un mae cualquiera",
  "El Primer Ministro"
];
let action = [" se llevó ", " se le cayó ", " quebró ", " agarró ", " ocultó "];
let what = [
  "una vaca",
  "la escoba",
  "la pantalla",
  "la cena",
  "un yate",
  "la lavadora"
];
let when = [
  " antes de subirse al bus",
  " en la madrugada",
  " de camino al trabajo",
  " en el baño",
  " entrando al cine",
  " en el patio del vecino"
];

function palabraRandom(lista) {
  let pRandom = lista[Math.floor(Math.random() * lista.length)];
  return pRandom;
}

window.onload = function() {
  let excusa = document.querySelector("#excusa");
  excusa.innerHTML =
    palabraRandom(who) +
    palabraRandom(action) +
    palabraRandom(what) +
    palabraRandom(when);
};
