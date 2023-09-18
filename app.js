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

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const question = accordion.querySelector('.faq-question__question')
    question.style.color = 'black';
    const answer = accordion.querySelector('.faq-question__answer')
    answer.classList.toggle('show-answer')
    
    const arrowIcon = accordion.querySelector(".faq-question__arrow-icon")
    arrowIcon.classList.toggle('rotate-arrow')

});
});

  // faqQuestion.forEach(answer =>{
  //   answer.classList.toggle('show-answer')
  // })
// answer.classList.toggle('show-answer')
// rotate.classList.toggle('rotate-arrow')