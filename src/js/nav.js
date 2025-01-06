document.addEventListener("DOMContentLoaded", function () {
    function shouldSkipTransition(data) {
        const currentNamespace = data.current.container.getAttribute('data-barba-namespace');
        const currentPath = window.location.pathname;
        const pathPrefix = window.pathPrefix || '/';

        return currentPath === pathPrefix && currentNamespace === 'index';
    }

    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                if (shouldSkipTransition(data)) {
                    return Promise.resolve();
                }

                return gsap.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                if (shouldSkipTransition(data)) {
                    return Promise.resolve(); // Skip transition
                }

                return gsap.from(data.next.container, {
                    opacity: 0
                });
            }
        }]
    });
});

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

    $('.logo').click(function () {
        if ($('.main_h').hasClass('open-wide')) {
            $('.main_h').removeClass('open-wide');
            $('.mobile-toggle').removeClass('open-nav');
        }
    });
});