import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  buttonEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let timerId = null;
let chosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      refs.buttonEl.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    if (selectedDates[0] > Date.now()) {
      chosenDate = selectedDates[0];

      refs.buttonEl.disabled = false;
    }
  },
};

flatpickr(refs.inputEl, options);
console.log(chosenDate);

refs.buttonEl.addEventListener('click', onButtonElClick);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function onButtonElClick(event) {
  timerId = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      chosenDate - Date.now()
    );
    if (Date.now() >= chosenDate) {
      clearInterval(timerId);
      return;
    }
    refs.daysEl.textContent = addLeadingZero(days);
    refs.hoursEl.textContent = addLeadingZero(hours);
    refs.minutesEl.textContent = addLeadingZero(minutes);
    refs.secondsEl.textContent = addLeadingZero(seconds);
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
