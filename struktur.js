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

// Fungsi untuk menutup semua pop-up yang terbuka
function closeAllPopups() {
  const popups = document.querySelectorAll(".hidden.show");
  popups.forEach((popup) => {
    popup.classList.remove("show");
  });
}

// Fungsi untuk menampilkan detail Pengurus
function showDetailPengurus(role, name, task, imageSrc) {
  closeAllPopups(); // Tutup semua pop-up yang terbuka
  let detailBox = document.getElementById("detailPengurus");

  // Isi konten pop-up
  document.getElementById("rolePengurus").innerText = role;
  document.getElementById("namePengurus").innerText = name;
  document.getElementById("taskPengurus").innerText = task;
  document.getElementById("imagePengurus").src = imageSrc; // Set gambar

  detailBox.classList.add("show");
  overlay.classList.add("show");
}

// Fungsi untuk menampilkan detail Seksi
function showDetailSeksi(role, ketua, anggota, task, imageSrc) {
  closeAllPopups(); // Tutup semua pop-up yang terbuka
  let detailBox = document.getElementById("detailSeksi");

  // Isi konten pop-up
  document.getElementById("roleSeksi").innerText = role;
  document.getElementById("nameSeksi").innerText = ketua;
  document.getElementById("taskSeksi").innerText = task;
  document.getElementById("imageSeksi").src = imageSrc; // Set gambar

  let anggotaElement = document.getElementById("anggotaSeksi");

  if (anggota) {
    anggotaElement.innerText = anggota;
    anggotaElement.parentElement.classList.remove("hidden");
  } else {
    anggotaElement.parentElement.classList.add("hidden");
  }

  detailBox.classList.add("show");
  overlay.classList.add("show");
}

// Fungsi untuk menutup pop-up tertentu
function closeDetail(id) {
  let detailBox = document.getElementById(id);
  let overlay = document.getElementById("overlay");
  detailBox.style.animation = "fadeOut 0.30s ease-in";
  overlay.classList.remove("show"); // Sembunyikan overlay
  setTimeout(() => {
    detailBox.classList.remove("show");
  }, 50); // Tunggu animasi selesai sebelum menyembunyikan pop-up
}

// Event listener untuk tombol close
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".close-btn").forEach((button) => {
    button.addEventListener("click", function () {
      closeDetail(this.closest(".hidden").id);
    });
  });

  // Tutup popup saat mengklik di luar area popup
  window.addEventListener("click", (event) => {
    const popups = document.querySelectorAll(".hidden.show");
    const overlay = document.getElementById("overlay");

    if (event.target === overlay) {
      popups.forEach((popup) => {
        closeDetail(popup.id);
      });
    }
  });
});
