jQuery(".scroller-animation").click(function() {
    jQuery('html, body').animate({
        scrollTop: (jQuery("#down").offset().top - 140)
    }, 1000);
});
