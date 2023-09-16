"use strict";
const accordions = document.querySelectorAll('.faq-area');
console.log(accordions);
accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
  const faqQuestion = document.querySelectorAll(".faq-question")
  faqQuestion.forEach((showAnswer, rotateArrow) =>{
    showAnswer = document.querySelector('.faq-question__answer')
    showAnswer.classList.toggle('show-answer')
    rotateArrow = document.querySelector(".faq-question__arrow-icon")
    rotateArrow.classList.toggle('rotate-arrow')
  })
  
});
});
  // const arrowIconPlace = document.querySelector(".faq-question__arrow-icon")
  // console.log(faqQuestion, arrowIconPlace);
  // faqQuestion.forEach(answer =>{
  //   answer.classList.toggle('show-answer')
  // })
// answer.classList.toggle('show-answer')
// rotate.classList.toggle('rotate-arrow')