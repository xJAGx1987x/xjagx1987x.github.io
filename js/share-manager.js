document.getElementById('share-button').addEventListener('click', async () => {
if (navigator.share) {
    try {
    await navigator.share({
        title: 'Check out this page!',
        url: window.location.href, // Use current page URL
    });
    alert('Page shared successfully!');
    } catch (err) {
    console.error('Error sharing the page:', err);
    }
} else {
    // Fallback for browsers that don't support Web Share API
    alert('Sharing is not supported on this browser. Please copy the URL manually.');
}
});
