// write js code here if required
// Function to format and update the timer
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();

    // Format: <day>/<month>/<year>, <hours>:<minutes>:<seconds>
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    timerElement.textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initialize the timer immediately
updateTimer();
