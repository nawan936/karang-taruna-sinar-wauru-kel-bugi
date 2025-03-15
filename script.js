feather.replace();

var slideIndex = 1;
var slides = document.getElementsByClassName("slide");
var totalSlides = slides.length;

function showSlides() {
    // Sembunyikan semua slide
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Tampilkan slide saat ini
    slides[slideIndex].style.display = "block";

    // Geser ke slide berikutnya
    slideIndex = (slideIndex + 1) % totalSlides;
    slideIndex = (slideIndex - 1) % totalSlides;
}

function plusSlides(n) {
    // Geser slide berdasarkan nilai n (1 untuk next, -1 untuk prev)
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlides();
}

// Fungsi untuk auto slide
function autoSlide() {
    plusSlides(1);
}

// Jalankan auto slide setiap 5 detik
setInterval(autoSlide, 5000);

// Tampilkan slide pertama saat halaman dimuat
showSlides();

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