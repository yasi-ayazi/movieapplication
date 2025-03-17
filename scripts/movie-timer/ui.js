import { startTimer } from "./timer.js";

/**
 * Initialize the UI and append elements to the DOM
 */
function initTimerUI() {
  // Add main heading
  document.body.appendChild(createHeading("Your time in Movie-app page:"));

  // Create dropdowns
  const hourDropdown = createDropdown("hour", [0, 1, 2, 3]);
  const minuteDropdown = createDropdown("minute", [0, 5, 10, 15, 30, 45]);

  // Create submit button
  const submitButton = createButton("submitBtn", "Submit Time", () => {
    const selectedHour = document.getElementById("hour").value;
    const selectedMinute = document.getElementById("minute").value;
    console.log(
      `Submitted Time: ${selectedHour} Hours, ${selectedMinute} Minutes`
    );
    startTimer(selectedHour, selectedMinute);
  });

  // Append elements to body
  document.body.appendChild(hourDropdown);
  document.body.appendChild(minuteDropdown);
  document.body.appendChild(submitButton);
}

/**
 * Create a heading element
 */
function createHeading(text) {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  return h3;
}

/**
 * Create a dropdown (select element)
 */
function createDropdown(id, options) {
  const select = document.createElement("select");
  select.setAttribute("id", id);

  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = `${value} ${id === "hour" ? "Hour" : "Minutes"}`;
    select.appendChild(option);
  });

  return select;
}

/**
 * Create a button element
 */
function createButton(id, text, onClick) {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  button.textContent = text;
  button.addEventListener("click", function (event) {
    event.preventDefault();
    onClick();
  });
  return button;
}

export { initTimerUI };
