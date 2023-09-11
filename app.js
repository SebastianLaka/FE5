"use strict";
const accordion = document.querySelectorAll("accordion-area");

accordion.forEach((showAnswer) => {
  showAnswer.addEventListener("click", () => {
    showAnswer.classList.toggle("show-answer");
    showAnswer.classList.toggle("rotate-arrow");
  });
});