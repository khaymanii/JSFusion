const openBtn = document.getElementById("open-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
