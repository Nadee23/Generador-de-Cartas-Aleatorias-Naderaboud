import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let shapes = [
  "♥",
  "♠",
  "♣",
  "♦"]

window.onload =
  window.onload = function () {
    GenerateCard();

    const button = document.querySelector("#generateCardButton");
    button.addEventListener("click", function () {
      GenerateCard();
    });

  }

document.addEventListener('DOMContentLoaded', () => {
  let segundos = 0;

  setInterval(() => {
    segundos++;
    document.getElementById('counter').textContent = segundos;
    if (segundos >= 10) {
      segundos = 0;
      GenerateCard();
    }
  }, 1000); // se ejecuta cada 1000 ms (1 segundo)
});

function GenerateCard() {
  let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  let randomNumber = Math.floor(Math.random() * 12) + 1;

  if (randomShape === "♥" || randomShape === "♦") {
    document.querySelector(".top-card").style.color = "red";
    document.querySelector(".bot-card").style.color = "red";

  } else {
    document.querySelector(".top-card").style.color = "black";
    document.querySelector(".bot-card").style.color = "black";

  }

  if (randomNumber === 10) {
    document.querySelector(".mid-card").innerHTML = "J";
  } else if (randomNumber === 11) {
    document.querySelector(".mid-card").innerHTML = "Q";
  } else if (randomNumber === 12) {
    document.querySelector(".mid-card").innerHTML = "K";
  } else if (randomNumber === 1) {
    document.querySelector(".mid-card").innerHTML = "A";
  } else {
    document.querySelector(".mid-card").innerHTML = randomNumber;
  }

  document.querySelector(".top-card").innerHTML = randomShape;
  document.querySelector(".bot-card").innerHTML = randomShape;

};
