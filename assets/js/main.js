/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

// Function to fetch and inject header and footer content
function fetchAndInjectContent(url, targetElementId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetElementId).innerHTML = html;
        });
}

// Fetch and inject footer content
fetchAndInjectContent("../includes/footer.html", "footer");

// Function to scroll to the top of the page
function scrollToTop() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    document.body.scrollTop = 0; // For Safari
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}

// Function to show success message after submitting contact form
document.addEventListener('DOMContentLoaded', function() {
    // Fetch footer content from external HTML file
    fetch('../includes/footer.html')
        .then(response => response.text())
        .then(html => {
            // Inject the footer content into the DOM
            document.getElementById('footer').innerHTML = html;

            // Now the contact form element is available in the DOM
            var contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(event) {
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
            } else {
                console.error('Contact form element not found.');
            }
        })
        .catch(error => {
            console.error('Error fetching footer content:', error);
        });
});


