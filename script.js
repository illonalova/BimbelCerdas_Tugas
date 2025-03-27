document.addEventListener("DOMContentLoaded", function () {
    // Toggle Menu untuk Mobile
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Slider Welcome Image
    const welcomeImage = document.getElementById("welcomeImage");
    const images = ["gambar/kelas1.jpg", "gambar/kelas2.jpg", "gambar/kelas3.jpg"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        welcomeImage.src = images[index];
    }, 3000);
});
