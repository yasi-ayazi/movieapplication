let timer; // Store the timer interval
let countdownDisplay; // Store the countdown display element

export function startTimer(hour, minute) {
    let totalSeconds = (parseInt(hour) * 3600) + (parseInt(minute) * 60);
    if (totalSeconds === 0) return; // Prevent starting an empty timer

    // Reset previous timer if it exists
    if (timer) {
        clearInterval(timer);
    }

    // Remove previous countdown display if it exists
    if (countdownDisplay) {
        countdownDisplay.remove();
    }

    // Create new countdown display
    countdownDisplay = document.createElement("h3");
    document.body.appendChild(countdownDisplay);

    function formatTime(seconds) {
        const hh = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const ss = String(seconds % 60).padStart(2, '0');
        return `${hh}:${mm}:${ss}`;
    }

    function render(seconds) {
        countdownDisplay.textContent = `Remaining Time: ${formatTime(seconds)}`;
    }

    render(totalSeconds);

    timer = setInterval(() => {
        totalSeconds--;
        if (totalSeconds <= 0) {
            clearInterval(timer);
            countdownDisplay.textContent = "Time's up!";
        } else {
            render(totalSeconds);
        }
    }, 1000);
}
