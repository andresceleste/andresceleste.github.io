function scrollToTop() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    document.body.scrollTop = 0; // For Safari
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}
