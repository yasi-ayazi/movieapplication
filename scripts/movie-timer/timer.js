let timer;
const alarmSound = new Audio("././assets/alarm.wav");

function formatTime(seconds) {
  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function render(seconds) {
  let countdownDisplay = document.querySelector(".countdown-timer");
  countdownDisplay.textContent = `Remaining Time: ${formatTime(seconds)}`;
}

function startTimer(hour, minute) {
  let totalSeconds = parseInt(hour) * 3600 + parseInt(minute) * 60;
  if (totalSeconds === 0) return;

  if (timer) {
    clearInterval(timer);
  }

  // Get existing countdown display from UI
  let countdownDisplay = document.querySelector(".countdown-timer");
  if (!countdownDisplay) return; // Prevent errors if UI is missing

  render(totalSeconds);

  timer = setInterval(() => {
    totalSeconds--;
    if (totalSeconds <= 0) {
      clearInterval(timer);
      countdownDisplay.textContent = "Time's up!";

      // 🔔 Play alarm sound
      alarmSound.play();

      // ⏳ Reset dropdowns to "0 Hour" and "0 Minute"
      document.querySelector(".hour-select").value = 0;
      document.querySelector(".minute-select").value = 0;
    } else {
      render(totalSeconds);
    }
  }, 1000);
}

export { startTimer, formatTime };
