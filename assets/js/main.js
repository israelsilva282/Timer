const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const zero = document.querySelector(".zero");
let seconds = 0;
let timer;

function changeSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}
function startClock() {
  timer = setInterval(function () {
    seconds++;
    clock.innerHTML = changeSeconds(seconds);
  }, 1000);
}

document.addEventListener("click", function (e) {
  const element = e.target;

  if (element.classList.contains("start")) {
    clock.classList.remove("paused");
    clearInterval(timer);
    startClock();
  }
  if (element.classList.contains("pause")) {
    clock.classList.add("paused");
    clearInterval(timer);
  }
  if (element.classList.contains("zero")) {
    clock.classList.remove("paused");
    clearInterval(timer);
    clock.innerHTML = "00:00:00";
    seconds = 0;
  }
});
