# Custom message

```html 
<div id="custom-confirm" class="confirm-modal hidden">
    <div class="confirm-content">
        <p id="confirm-message">Do you want to download this file?</p>
        <div class="confirm-actions">
            <button id="confirm-yes" class="confirm-button">Yes</button>
            <button id="confirm-no" class="confirm-button">No</button>
        </div>
    </div>
</div>
```


```css 
/* Base styles for the confirmation modal */
.confirm-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; /* Ensure it appears above other elements */
}

/* Hide the modal by default */
.hidden {
    display: none;
}

/* Content container */
.confirm-content {
    background: var(--mid-grey); /* Matches your theme */
    color: var(--text-color);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    width: 90%; /* Responsive for smaller screens */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* Buttons */
.confirm-button {
    background: var(--accent-color);
    color: var(--background-color);
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.confirm-button:hover {
    background: var(--accent-color-alt);
}

.confirm-button:last-child {
    background: var(--mid-grey); /* A different style for "No" button */
    color: var(--text-color);
}

.confirm-button:last-child:hover {
    background: var(--background-color);
}
```

``` javascript
class DownloadManager {
    constructor(selector) {
        this.links = document.querySelectorAll(selector);
        this.modal = document.getElementById("custom-confirm");
        this.message = document.getElementById("confirm-message");
        this.confirmYes = document.getElementById("confirm-yes");
        this.confirmNo = document.getElementById("confirm-no");
        this.init();
    }

    init() {
        this.links.forEach((link) => {
            link.addEventListener("click", (event) => this.handleClick(event, link));
        });

        this.confirmNo.addEventListener("click", () => this.closeModal());
        this.confirmYes.addEventListener("click", () => this.confirmDownload());
    }

    handleClick(event, link) {
        event.preventDefault(); // Prevent default navigation
        this.filePath = link.getAttribute("data-file") || link.href; // Store file path
        const confirmMessage = link.getAttribute("data-confirm") || "Do you want to download this file?";
        this.message.textContent = confirmMessage; // Set the modal message
        this.openModal();
    }

    openModal() {
        this.modal.classList.remove("hidden");
    }

    closeModal() {
        this.modal.classList.add("hidden");
    }

    confirmDownload() {
        this.closeModal();
        const downloadAnchor = document.createElement("a");
        downloadAnchor.href = this.filePath;
        downloadAnchor.download = ""; // Use default file name
        downloadAnchor.click();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new DownloadManager(".download-link");
});
```