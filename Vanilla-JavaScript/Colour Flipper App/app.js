const colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6", "#34495e", "#1abc9c", "#d35400"];

const colorContainer = document.getElementById("color-container");
const colorText = document.getElementById("color");
const btn = document.getElementById("btn");

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

btn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    colorContainer.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
});
