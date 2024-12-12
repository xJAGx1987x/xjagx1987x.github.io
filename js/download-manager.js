class DownloadManager {
    constructor(selector) {
        this.links = document.querySelectorAll(selector); // Select elements matching the selector
        this.init();
    }

    init() {
        this.links.forEach((link) => {
            link.addEventListener("click", (event) => this.handleClick(event, link));
        });
    }

    handleClick(event, link) {
        event.preventDefault(); // Prevent default navigation

        const filePath = link.getAttribute("data-file") || link.href; // Get file path from data-file or fallback to href
        const confirmMessage = link.getAttribute("data-confirm") || "Do you want to download this file?";

        const confirmDownload = confirm(confirmMessage); // Show confirmation dialog

        if (confirmDownload) {
            this.downloadFile(filePath);
        }
    }

    downloadFile(filePath) {
        const downloadAnchor = document.createElement("a");
        downloadAnchor.href = filePath;
        downloadAnchor.download = ""; // Use default file name
        downloadAnchor.click();
    }
}

// Initialize the download manager
document.addEventListener("DOMContentLoaded", () => {
    new DownloadManager(".download-link"); // Pass the class or selector to manage downloads
});
