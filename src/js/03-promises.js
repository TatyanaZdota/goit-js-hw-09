import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
};

refs.formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;
  let delayNumber = Number(delay.value);
  let stepNumber = Number(step.value);
  let amountNumber = Number(amount.value);

  for (let i = 1; i <= amountNumber; i++) {
    createPromise(i, (delayNumber += stepNumber))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({
          position,
          delay,
        });
      } else {
        reject({
          position,
          delay,
        });
      }
    }, Number(refs.delay.value));
  });
}
console.log('hello');
