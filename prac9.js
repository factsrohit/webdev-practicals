let count = 0;

const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

// Increase
incBtn.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

// Decrease
decBtn.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});

// Reset
resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});