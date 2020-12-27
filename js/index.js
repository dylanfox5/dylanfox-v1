// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$("#theway").click(function() {
    $('html').animate({
        scrollTop: $("#quote").offset().top},
        'slow');
});

$("#home-btn").click(function() {
    $('html').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

$("#about-btn").click(function() {
    $('html').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#projects-btn").click(function() {
    $('html').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
});



$("#display-btn").click(function () {
    $("body").toggleClass("invert");
});
  