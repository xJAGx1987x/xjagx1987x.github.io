class DownloadManager {
    constructor(selector) {
        this.links = document.querySelectorAll(selector);
        this.init();
    }

    init() {
        this.links.forEach((link) => {
            link.addEventListener("click", (event) => this.handleClick(event, link));
        });
    }

    handleClick(event, link) {
        event.preventDefault(); // Prevent default navigation and download
        console.log("Download link clicked:", link); // Debugging

        const filePath = link.getAttribute("data-file") || link.href; // Get file path
        const confirmMessage = link.getAttribute("data-confirm") || "Do you want to download this file?";

        const confirmDownload = confirm(confirmMessage);

        if (confirmDownload) {
            this.downloadFile(filePath);
        }
    }

    downloadFile(filePath) {
        console.log("Downloading file:", filePath); // Debugging
        const downloadAnchor = document.createElement("a");
        downloadAnchor.href = filePath;
        downloadAnchor.setAttribute("download", ""); // Set download dynamically
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor); // Clean up
    }
}

// Initialize the DownloadManager after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    new DownloadManager(".download-link");
});
