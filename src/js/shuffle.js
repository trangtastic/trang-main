jQuery(function($){
    // Cycle plugin
    $('.slides').cycle({
        fx:     'fade',
        speed:   350,
        timeout: 5
    }).cycle("pause");

    // Pause &amp; play on hover
    $('.event__link').hover(function(){
        $(this).find('.slides').addClass('active').cycle('resume');
    }, function(){
        $(this).find('.slides').removeClass('active').cycle('pause');
    });
});