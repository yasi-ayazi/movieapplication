import { formatTime } from "./timer.js";
export function trackElapsedTime() {
  const start = new Date();
  let timeSpentLabel = document.getElementById("time-spent");

  if (!timeSpentLabel) {
    timeSpentLabel = document.createElement("label");
    timeSpentLabel.setAttribute("id", "time-spent");
    timeSpentLabel.textContent = "You spent time on this page: 00:00";

    // Append the label
    const sidebar = document.querySelector(".timer-sidebar");
    if (sidebar) {
      sidebar.insertBefore(timeSpentLabel, sidebar.firstChild);
    }
  }

  function pad(num) {
    return num.toString().padStart(-2, '0') 
  }

  function tick() {
    const now = new Date();
    let remain = Math.round((now - start) / 1000);
    let diff = formatTime(remain);

    timeSpentLabel.textContent = `You spent time on this page: ${diff}`;
    setTimeout(tick, 1000);
  }

  tick();
}
