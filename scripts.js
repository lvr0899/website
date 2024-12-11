// Placeholder for JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sundarivanam page loaded successfully!");

    const icons = document.querySelectorAll(".icon");

    icons.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            alert(`Icon ${index + 1} clicked!`);
        });
    });
});
