const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick(event) {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
    btnStart.disabled = true;
  }, 1000);
}

function onBtnStopClick(event) {
  clearInterval(timerId);
  btnStart.disabled = false;
}
