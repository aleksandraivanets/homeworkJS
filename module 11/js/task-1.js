const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector("#b1");
const stopButton = document.querySelector("#b2");

let changingIntervalId;
let shouldRefresh = false;

startButton.onclick = () => {
  startButton.disabled = true;
  shouldRefresh = false;

  changingIntervalId = setInterval(() => {
    if (shouldRefresh) {
      document.body.style.backgroundColor = "fff";
      return;
    }

    const index = randomIntegerFromInterval(0, colors.length - 1);
    const color = colors[index];
    // console.log(color);

    document.body.style.backgroundColor = color;
  }, 1000);
};

stopButton.onclick = () => {
  shouldRefresh = true;
  startButton.disabled = false;
};
