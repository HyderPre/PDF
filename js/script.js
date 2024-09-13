// script.js

document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home-button');
    
    homeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent any default behavior
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
    });
});
