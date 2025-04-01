feather.replace();
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

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gambar img");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupDesc = document.getElementById("popup-desc");
  const closePopup = document.getElementById("close-popup");

  // Buka popup saat gambar diklik
  images.forEach((img) => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = img.src;
      popupImg.alt = img.alt;
      popupDesc.textContent = img.getAttribute("data-desc");
    });
  });

  // Tutup popup saat tombol close diklik
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Tutup popup saat mengklik di luar area popup
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
