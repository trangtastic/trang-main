window.pathPrefix = "{{ pathPrefix }}";
document.addEventListener("DOMContentLoaded", function () {
    // Helper function to check if the transition should be skipped
    function shouldSkipTransition(data) {
        const currentNamespace = data.current.container.getAttribute('data-barba-namespace');
        const currentPath = window.location.pathname;
        const pathPrefix = window.pathPrefix || '/'; // Default to root if not defined

        // Check if current path matches the homepage path
        return currentPath === pathPrefix && currentNamespace === 'intro';
    }

    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                if (shouldSkipTransition(data)) {
                    console.log("Skipping transition: URL is the homepage and namespace is 'intro'.");
                    return Promise.resolve(); // Skip transition
                }

                console.log("Executing 'leave' transition.");
                return gsap.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                if (shouldSkipTransition(data)) {
                    console.log("Skipping transition: URL is the homepage and namespace is 'intro'.");
                    return Promise.resolve(); // Skip transition
                }

                console.log("Executing 'enter' transition.");
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

    // If click on .logo and main_h has open-wide, remove open-wide and open-nav
    $('.logo').click(function () {
        if ($('.main_h').hasClass('open-wide')) {
            $('.main_h').removeClass('open-wide');
            $('.mobile-toggle').removeClass('open-nav');
        }
    });
});
