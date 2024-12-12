document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const img = document.querySelector(".responsive-content img");

    img.addEventListener("click", () => {
        lightbox.classList.remove("hidden");
        lightbox.querySelector("img").src = img.src; // Dynamically set image source
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.add("hidden");
    });
});
