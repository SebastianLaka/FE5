"use strict";
const accordion = document.querySelectorAll(".accordion-area");
console.log(accordion);
accordion.forEach((showAnswer) => {
  showAnswer.addEventListener("click", () => {
    showAnswer.classList.toggle("show-answer");
  });
});
