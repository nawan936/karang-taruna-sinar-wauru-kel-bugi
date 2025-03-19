feather.replace();

var slideIndex = 1;
var slides = document.getElementsByClassName("slide");
var totalSlides = slides.length;

// Toggle class active untuk navbar
const navbarNav = document.querySelector(".nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah halaman reload ke home
    navbarNav.classList.toggle("active");
});

// Klik di luar sidebar untuk menutup navbar
document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});
