import { startTimer } from "./timer.js";
import { trackElapsedTime } from "./elapsedTime.js";

//UI initialization along with sidebar element addition
export function initTimerUI() {
  if (document.querySelector(".timer-sidebar")) return;

  const sidebar = document.createElement("div");
  sidebar.classList.add("timer-sidebar");

  const title = document.createElement("h3");
  title.classList.add("sidebar-title");
  title.textContent = "Session Tracking";
  sidebar.appendChild(title);

  // Create time spent tracker
  const timeSpent = document.createElement("label");
  timeSpent.classList.add("time-spent");
  sidebar.appendChild(timeSpent);

  trackElapsedTime(timeSpent);

  const timerControls = document.createElement("div");
  timerControls.classList.add("timer-controls");

  const countdownTitle = document.createElement("h3");
  countdownTitle.textContent = "Custom Countdown Timer";
  timerControls.appendChild(countdownTitle);

  const hourDropdown = createDropdown("hour", [0, 1, 2, 3]);
  const minuteDropdown = createDropdown("minute", [0, 1, 5, 10, 15, 30, 45]);

  // Countdown display
  const countdownDisplay = document.createElement("div");
  countdownDisplay.classList.add("countdown-timer");

  const startButton = createButton("start-countdown", "Start Countdown", () => {
    const selectedHour = document.querySelector(".hour-select").value;
    const selectedMinute = document.querySelector(".minute-select").value;

    startTimer(selectedHour, selectedMinute);

    countdownDisplay.textContent = `${selectedHour.padStart(
      2,
      "0"
    )}:${selectedMinute.padStart(2, "0")}:00`;
  });

  timerControls.append(
    hourDropdown,
    minuteDropdown,
    countdownDisplay,
    startButton
  );
  sidebar.appendChild(timerControls);
  document.body.appendChild(sidebar);
  initSidebarToggle();
}

function createDropdown(className, options) {
  const select = document.createElement("select");
  select.classList.add(`${className}-select`);

  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = `${value} ${
      className === "hour" ? "Hour" : "Minutes"
    }`;
    select.appendChild(option);
  });

  return select;
}

function createButton(className, text, onClick) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

// Hamburger button on mobile

export function initSidebarToggle() {
  const sidebar = document.querySelector(".timer-sidebar");

  if (!sidebar) {
    console.error("Sidebar not found in the DOM.");
    return;
  }
  document.body.appendChild(sidebar);
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("sidebar-toggle");
  toggleButton.innerHTML = "Timer";
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      sidebar.style.transform = "translateX(0)";
    } else {
      sidebar.style.transform = "translateX(-100%)";
    }
  });
}

// Dark mode toggle

export function createDarkModeToggle() {
  const sidebar = document.querySelector(".timer-sidebar");
  if (!sidebar) return;

  const toggleWrapper = document.createElement("div");
  toggleWrapper.className = "theme-toggle-wrapper";

  toggleWrapper.innerHTML = `
    <label class="theme-switch">
      <input type="checkbox" id="theme-toggle">
      <span class="slider"></span>
    </label>
  `;

  sidebar.insertBefore(toggleWrapper, sidebar.firstChild);

  const toggle = toggleWrapper.querySelector("#theme-toggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
}
