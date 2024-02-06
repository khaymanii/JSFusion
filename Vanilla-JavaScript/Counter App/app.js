const countElement = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateCount() {
    countElement.textContent = count;
}

increaseBtn.addEventListener("click", function () {
    count++;
    updateCount();
});

decreaseBtn.addEventListener("click", function () {
    count--;
    updateCount();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCount();
});
