document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const sideMenu = document.querySelector(".side-menu");

    hamburger.addEventListener("click", function() {
        sideMenu.classList.toggle("open");
    });
});
