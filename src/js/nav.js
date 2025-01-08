$(document).ready(function () {
    const currentUrl = window.location.href;
    const linkUrl = $('.logo').attr('href');
    const resolvedLinkUrl = new URL(linkUrl, window.location.origin).href;
    const isSamePage = currentUrl === resolvedLinkUrl;

    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0
                });
            }
        }]
    });

    $('.mobile-toggle').click(function () {
        $('.main_h').toggleClass('open-wide');
        $(this).toggleClass('open-nav');
    });

    $('.main_h li a').click(function () {
        $('.main_h').removeClass('open-wide');
        $('.mobile-toggle').removeClass('open-nav');
    });

    $('.logo').click(function (event) {
        if (isSamePage){
            event.preventDefault();
        }

        if ($('.main_h').hasClass('open-wide')) {
            $('.main_h').removeClass('open-wide');
            $('.mobile-toggle').removeClass('open-nav');
        }
    });
});
