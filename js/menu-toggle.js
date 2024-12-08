document.addEventListener("DOMContentLoaded", function () {
  // Select the menu toggle button and the navigation menu
  const toggleButton = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  // Ensure both elements exist before proceeding
  if (!toggleButton || !mobileNav) {
    console.error("Menu toggle button or navigation menu not found!");
    return;
  }

  // Add event listener to the button to toggle the hidden class
  toggleButton.addEventListener("click", function () {
    console.log("Menu button clicked!");
    mobileNav.classList.toggle("hidden");
  });
});
