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

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research Template</title>
    <link rel="stylesheet" href="research-template.css">
</head>
<body>
    <header class="research-header">
        <nav class="research-nav">
            <h1>Research Project Title</h1>
            <p class="subtitle">Subtitle or Brief Description</p>
        </nav>
    </header>

    <main class="research-container">
        <!-- Introduction Section -->
        <section class="research-section">
            <h2>Introduction</h2>
            <p>Provide an overview of the research topic, its importance, and the objectives of the study. This section sets the stage for the rest of the content.</p>
        </section>

        <!-- Objectives Section -->
        <section class="research-section">
            <h2>Objectives</h2>
            <ul class="research-list">
                <li>Objective 1: Clearly defined goal or aim of the research.</li>
                <li>Objective 2: Another focused target for the project.</li>
                <li>Objective 3: Final major goal to achieve.</li>
            </ul>
        </section>

        <!-- Key Findings Section -->
        <section class="research-section">
            <h2>Key Findings</h2>
            <p>Summarize the main discoveries or outcomes of the research here. This section should provide a concise and clear explanation of the results.</p>
            <ul class="research-list">
                <li>Finding 1: Summary of a significant discovery.</li>
                <li>Finding 2: Key data or result worth highlighting.</li>
                <li>Finding 3: Another critical outcome of the research.</li>
            </ul>
        </section>

        <!-- Recommendations Section -->
        <section class="research-section">
            <h2>Recommendations</h2>
            <ul class="research-list">
                <li>Recommendation 1: Practical application or follow-up action.</li>
                <li>Recommendation 2: Another suggestion based on findings.</li>
                <li>Recommendation 3: Final actionable recommendation.</li>
            </ul>
        </section>

        <!-- Acknowledgements Section -->
        <section class="research-section">
            <h2>Acknowledgements</h2>
            <p>Recognize individuals, organizations, or entities that supported the research.</p>
        </section>
    </main>

    <footer class="research-footer">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        <p>Contact: <a href="mailto:example@example.com">example@example.com</a></p>
    </footer>
</body>
</html>
```