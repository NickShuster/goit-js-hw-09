const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function startColorSwitcher() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startButton.disabled = true;
}

function stopColorSwitcher() {
  clearInterval(intervalId);
  startButton.disabled = false;
}

startButton.addEventListener('click', startColorSwitcher);
stopButton.addEventListener('click', stopColorSwitcher);
