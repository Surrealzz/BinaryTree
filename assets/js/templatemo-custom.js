$(document).ready(function() {
    // Custom script for smooth scrolling
    $("a[href*='#']").on("click", function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Other custom scripts
});
