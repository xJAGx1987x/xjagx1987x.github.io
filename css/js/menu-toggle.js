document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
  
    toggleButton.addEventListener("click", function () {
      mobileNav.classList.toggle("hidden");
    });
  });
  