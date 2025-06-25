document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle the visibility of a popup
    function togglePopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    }

    // Make the togglePopup function available globally
    window.togglePopup = togglePopup;

    // Hide popups when clicking anywhere else on the document
    document.addEventListener("click", function (event) {
        if (!event.target.closest('.popup') && !event.target.closest('button')) {
            document.querySelectorAll('.popup').forEach(popup => popup.style.display = "none");
        }
    });
});
