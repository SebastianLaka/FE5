"use strict";
// const accordion = document.querySelectorAll('.faq-area');
// console.log(accordion);
// accordion.forEach((showAnswer) => {
//   showAnswer.addEventListener("click", () => {
//     showAnswer.classList.toggle("show-answer");
//     showAnswer.classList.toggle('rotate-arrow')
//   });
// });

const accordions = document.querySelectorAll('.accordion-area');
let timeOut;
accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    timeOut = setTimeout(() => {
    const question = accordion.querySelector('.faq-question__question')
    question.classList.toggle('question-active')
    const answer = accordion.querySelector('.faq-question__answer')
    answer.classList.toggle('show-answer')
    const arrowIcon = accordion.querySelector(".faq-question__arrow-icon")
    arrowIcon.classList.toggle('rotate-arrow')
    }, 300)
});
});

  // faqQuestion.forEach(answer =>{
  //   answer.classList.toggle('show-answer')
  // })
// answer.classList.toggle('show-answer')
// rotate.classList.toggle('rotate-arrow')