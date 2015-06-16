$(document).ready(function() {
    $("#menu-icon").click(function() {
        $(".site-nav").toggleClass('is-visible');
        $(".site-nav a.button").toggleClass('small');
    })

    // media query change
    function WidthChange(mq) {
        if (mq.matches) {
            $(".site-nav").removeClass('is-visible');
        $(".site-nav a.button").addClass('small');
        }
    }

    if (matchMedia) {
        var medium_mq = window.matchMedia("(min-width: 640px)");
        medium_mq.addListener(WidthChange);
        WidthChange(medium_mq);
    }

    // Full Page sections
    $(".full").height($(window).height());

    $( window ).resize(function() {
        if($(document).scrollTop() == 0) {
            $(".full").height($(window).height());
        }
    });
});
