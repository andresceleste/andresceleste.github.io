document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Display the success message
    document.getElementById('success-message').style.display = 'block';

    // Hide the form
    document.getElementById('contact-form').style.display = 'none';
});
