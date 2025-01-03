jQuery(function($) {

    $('.slides').cycle({
        delay: 500,
        fx: 'none',
        speed: 500,
        timeout: 1000,
    }).cycle("pause");

    $('.event__link').hover(function() {
        $(this).find('.slides').addClass('active').cycle('resume');
    }, function() {
        $(this).find('.slides').removeClass('active').cycle('pause');
    });
});
