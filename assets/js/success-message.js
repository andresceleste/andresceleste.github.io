document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = this;
    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        document.getElementById('success-message').style.display = 'block';
        form.reset();
    })
    .catch(function(error) {
        console.error('Error submitting form:', error);
    });
});
