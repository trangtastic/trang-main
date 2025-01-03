$(document).ready(function () {
    // Mobile Navigation Toggle
    $('.mobile-toggle').click(function () {
        $('.main_h').toggleClass('open-wide');
        $(this).toggleClass('open-nav');
    });

    $('.main_h li a').click(function () {
        $('.main_h').removeClass('open-wide');
        $('.mobile-toggle').removeClass('open-nav');
    });

    // Navigation Scroll
    // $('nav a').click(function (event) {
    //     event.preventDefault();
    //     var target = $($(this).attr("href")).offset().top - 70; // Adjust offset as needed
    //     $('html, body').animate({ scrollTop: target }, 500);
    // });
});
