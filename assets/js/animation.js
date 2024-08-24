$(document).ready(function() {
    $(".animate-on-scroll").each(function() {
        $(this).waypoint(function() {
            $(this.element).addClass("animate__animated animate__fadeInUp");
        }, { offset: '75%' });
    });
});
