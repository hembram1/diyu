const countdownElement = document.getElementById("countdown");
const birthdayElement = document.getElementById("birthdayTime");
const daysCountdown = document.getElementById("daysCountdown");
const hoursCountdown = document.getElementById("hoursCountdown");
const minutesCountdown = document.getElementById("minutesCountdown");
const secondsCountdown = document.getElementById("secondsCountdown");
const birthdayAudio = document.getElementById("birthdayAudio");
const pauseButton = document.getElementById("pauseButton");

const birthdayDate = new Date("2024-10-28T10:32:00"); // Set  birthday date here
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown display
    daysCountdown.innerText = days;
    hoursCountdown.innerText = hours;
    minutesCountdown.innerText = minutes;
    secondsCountdown.innerText = seconds;

    // Check if countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.style.display = "none";
        birthdayElement.style.display = "block";
        birthdayAudio.play();
        pauseButton.style.display = "block"; // Show the pause button
    }
}

// Pause the audio
pauseButton.addEventListener("click", function() {
    if (birthdayAudio.paused) {
        birthdayAudio.play();
        pauseButton.innerText = "Pause Audio";
    } else {
        birthdayAudio.pause();
        pauseButton.innerText = "Play Audio";
    }
});
