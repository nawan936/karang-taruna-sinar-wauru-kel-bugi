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

function showDetail(role, name, task) {
    let detailBox = document.getElementById('detailBox');

    // Isi konten detail
    document.getElementById('role').innerText = role;
    document.getElementById('name').innerText = name;
    document.getElementById('task').innerText = task;

    // Tampilkan detailBox dengan animasi
    detailBox.style.display = "flex";
    setTimeout(() => {
        detailBox.style.opacity = "1";
        detailBox.style.transform = "translate(-50%, -50%)";
    }, 10);
}

function closeDetailBox() {
    let detailBox = document.getElementById("detailBox");

    // Animasi keluar sebelum menghilangkan elemen
    detailBox.style.opacity = "0";
    detailBox.style.transform = "translate(-50%, -55%)";
    
    setTimeout(() => {
        detailBox.style.display = "none";
    }, 300); // Waktu sesuai dengan durasi animasi fade-out
}

// Tambahkan event listener untuk tombol close
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".close-btn").addEventListener("click", closeDetailBox);
});