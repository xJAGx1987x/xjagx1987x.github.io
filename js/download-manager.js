document.addEventListener("DOMContentLoaded", () => {
  const downloadLinks = document.querySelectorAll(".download-link");

  downloadLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const confirmMessage = link.getAttribute("data-confirm"); // Get the custom message
      const confirmDownload = confirm(confirmMessage);
      if (!confirmDownload) {
        event.preventDefault(); // Stop the download if canceled
      }
    });
  });
});
