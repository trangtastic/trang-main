
(function($) { "use strict";


    const t = document.getElementById("cursor");

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px";
        t.style.top = n.clientY + "px";
        e.style.left = n.clientX + "px";
        e.style.top = n.clientY + "px";
        i.style.left = n.clientX + "px";
        i.style.top = n.clientY + "px";
    });
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    $('.video-section').on('mouseover', function(event) {
        $('body').addClass('video-cursor');
    });
    $('.video-section').on('mouseout', function(event) {
        $('body').removeClass('video-cursor');
    });

    $('.link-to-portfolio').on('mouseover', function(event) {
        $('body').addClass('logo-cursor');
    });
    $('.link-to-portfolio').on('mouseout', function(event) {
        $('body').removeClass('logo-cursor');
    });


    $(document).ready(function() {

        /* Video */

        $(".container").fitVids();

        $('.vimeo a,.youtube a').on('click', function (e) {
            e.preventDefault();
            var videoLink = $(this).attr('href');
            var classeV = $(this).parent();
            var PlaceV = $(this).parent();
            if ($(this).parent().hasClass('youtube')) {
                $(this).parent().wrapAll('<div class="video-wrapper">');
                $(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
            } else {
                $(this).parent().wrapAll('<div class="video-wrapper">');
                $(PlaceV).html('<iframe src="' + videoLink + '?autoplay=1&loop=1&autopause=0&muted=1&color=8c6acc" width="500" height="281" frameborder="0" allow="autoplay"></iframe>');
            }
        });

        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const cursorElement = document.querySelector('.cursor');
        if (isTouchDevice) {
            if (cursorElement) {
                cursorElement.classList.add('disable-cursor');
            }
        }

        $(document).mouseleave(function () {
            cursorElement.classList.add('disable-cursor');
        });

        $(document).mouseenter(function () {
            cursorElement.classList.remove('disable-cursor');
        });


    });

})(jQuery);