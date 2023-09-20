"use strict";
const accordions = document.querySelectorAll('.accordion-area');
let timeOut;
accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
    timeOut = setTimeout(() => {
    const question = accordion.querySelector('.faq-question__question');
    question.classList.toggle('question-active');
    const answer = accordion.querySelector('.faq-question__answer');
    answer.classList.toggle('show-answer');
    const arrowIcon = accordion.querySelector(".faq-question__arrow-icon");
    arrowIcon.classList.toggle('rotate-arrow');
    }, 300)
});
});