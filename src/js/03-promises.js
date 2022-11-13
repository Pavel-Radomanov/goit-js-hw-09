import Notiflix from 'notiflix';

import 'notiflix/dist/notiflix-3.2.5.min.css'

const form = document.querySelector(".form");

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Success! Value passed to resolve function");
        Notiflix.Notify.success(`Fulfilled promise ${position+1} in ${delay}ms`);
      } else {
        reject("Error! Error passed to reject function");
        Notiflix.Notify.failure(`Rejected promise  ${position+1} in ${delay}ms`);
      }
    }, delay);
  })
  };

function handleSubmit(event) {

  event.preventDefault();
  let delayFirst = Number(form.delay.value);
  const delayStep = Number(form.step.value);
  const promisesAmount = Number(form.amount.value);

  for (let position = 0; position <= promisesAmount-1; position += 1) 
{
  const delay =  delayFirst + (position * delayStep);
  console.log(delay);
  console.log(position);

createPromise(position, delay); 
// .then(({position,delay}) => {
//   // console.log("234");
//     Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
//   })
// .catch(({position,delay}) => {
//     Notiflix.Notify.failure(`Rejected promise  ${position} in ${delay}ms`);})
}
  };


// const delayFirst = document.querySelector('input[name="delay"]');
// const step = document.querySelector('input[name="step"]');
// const amount = document.querySelector('input[name="amount"]');
// // const buttonCreatePromise = document.querySelector('button[name="submit"]');







  // then(position,delay);
  // catch(position,delay);

// }
// };


// let delay = 1000;
// let position = 4;
// console.log(delay);



// createPromise(position, delay) ;
// // buttonCreatePromise.addEventListener("submit", (event) => {
  
// submit.preventDefault();

// let stepD = Number(step.value);
// let amountD = Number(amount.value)
// let delay = Number(delayFirst.value);

// for (let position = 1; position <= amountD; position += 1) {
//   delay = delay + (position * stepD);
// createPromise(position, delay) =>
// .then(({position, delay}) => {

//   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})
// .catch(({position, delay}) => {
//   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// })};
// )};






 
// delay.addEventListener("input", (event) => {
//   delay = event.Number(delay.value);
//   console.log(delayForStep);
// });





//   if (shouldResolve) {
//     .then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//   } else {
//     .catch(({ position, delay }) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);}
  
// }



// submit.preventDefault();

// for (let i = 1; i <= amount; i += 1) {
// createPromise(i, delay)} => 

// .then(({position, delay}) => {
//   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})
// .catch(({position, delay}) => {
//   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// })







// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
  




//   const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { delay, step, amount}
//   } = event.currentTarget;}
//   console.log(`delay: ${delay.value}, step: ${step.value}, amount: ${amount.value}`);

// const textInput = document.querySelector("#name-input");
// const textOutput = document.querySelector("#name-output");




// textInput.addEventListener("input", (event) => {

//   textOutput.textContent = event.currentTarget.value;

//   if (textInput.value === "") {

//     textOutput.textContent = "Anonymous";

// };
// });

// let stepNumber = null;
// // 

// delayFirst.addEventListener("input", (event) => {
//   delayFirst.textContent = event.currentTarget.value;
//   const delayFirstNumber = Number(delayFirst.value);
// console.log(delayFirstNumber);
// });

// step.addEventListener("input", (event) => {
//   step.textContent = event.currentTarget.value;
//   stepNumber = Number(step.value);
//   // console.log(stepNumber);
// });
// console.log(stepNumber);


// amount.addEventListener("input", (event) => {
//   amount.textContent = event.currentTarget.value;
  
//   // console.log(amountNumber);
// });
// const amountNumber = Number(amount.value);

