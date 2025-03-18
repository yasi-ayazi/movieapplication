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
    return ("0" + parseInt(num)).slice(-2);
  }

  function tick() {
    const now = new Date();
    let remain = (now - start) / 1000;
    let hh = pad((remain / 60 / 60) % 60);
    let mm = pad((remain / 60) % 60);
    let ss = pad(remain % 60);
    let diff = `${hh}:${mm}:${ss}`;

    timeSpentLabel.textContent = `You spent time on this page: ${diff}`;
    setTimeout(tick, 1000);
  }

  tick();
}
