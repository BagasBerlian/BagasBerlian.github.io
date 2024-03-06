document.addEventListener("DOMContentLoaded", function () {
  var scrollIcon = document.getElementById("scroll-icon");

  // Tampilkan scroll-icon ketika halaman di-scroll ke bawah
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollIcon.style.display = "block";
    } else {
      scrollIcon.style.display = "none";
    }
  });
});
