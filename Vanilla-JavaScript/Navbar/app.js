const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");

menuIcon.addEventListener("click", function () {
    navList.classList.toggle("active");
});
