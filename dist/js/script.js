const  mBar = document.querySelector(".menu-bar");
const mNav = document.querySelector(".menu-navigation");

mBar.addEventListener('click', function() {
    mNav.classList.toggle("menu-active");
});