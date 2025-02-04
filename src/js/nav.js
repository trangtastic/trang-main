function isIntroPage() {
    return window.location.pathname === "/trang-demo/";
}

function isPhotosPage() {
    return window.location.pathname === "/trang-demo/photos/";
}

function isVitaPage() {
    return window.location.pathname === "/trang-demo/vita/";
}


$(document).ready(function () {
    let currentUrl = window.location.href;
    const linkUrl = $('.logo').attr('href');
    const resolvedLinkUrl = new URL(linkUrl, window.location.origin).href;
    const isSamePage = currentUrl === resolvedLinkUrl;

    // Initialize Barba.js for smooth page transitions
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

    // Mobile menu toggle
    $('.mobile-toggle').click(function () {
        $('.main_h').toggleClass('open-wide');
        $(this).toggleClass('open-nav');
    });

    function closeNavigation() {
        if ($('.main_h').hasClass('open-wide')) {
            $('.main_h').removeClass('open-wide');
            $('.mobile-toggle').removeClass('open-nav');
        }
    }

    // Prevent reloading same-page links
    $('.logo').click(function (event) {
        currentUrl = window.location.href;
        if (isSamePage) {
            event.preventDefault();
        }
        closeNavigation();
    });

    $('.Photos').click(function (event) {
        currentUrl = window.location.href;
        if (currentUrl.includes("photos")) {
            event.preventDefault();
        }
        closeNavigation();
    });

    $('.Vita').click(function (event) {
        currentUrl = window.location.href;
        if (currentUrl.includes("vita")) {
            event.preventDefault();
        }
        closeNavigation();
    });

    function initializePhotoPage() {
        const photosNav = document.querySelector('nav .Photos');
        if (photosNav) {
            photosNav.style.color = 'blue';
        }

        const vitaNav = document.querySelector('nav .Vita');
        if (vitaNav) {
            vitaNav.style.color = '';
        }

        var grid = document.querySelector(".grid");

        if (grid) {
            imagesLoaded(grid, function () {


                const msnry = new Masonry(grid, {
                    itemSelector: ".grid-item",
                    percentPosition: true
                });

                if (msnry._isLayoutInited) {
                    grid.classList.add("masonry-loaded");
                }
            });
        }

        // Initialize Bootstrap Carousel
        function isMobile() {
            return window.innerWidth < 768;
        }

        const carouselElement = document.getElementById("carouselExampleIndicators");
        if (carouselElement) {
            const carouselInstance = new bootstrap.Carousel(carouselElement, {
                interval: false, // Disable auto-sliding
                keyboard: true,  // Enable keyboard navigation
            });

            document.addEventListener("keydown", function (event) {
                if (document.body.classList.contains("modal-open")) { // Check if modal is open
                    if (event.key === "ArrowLeft") {
                        carouselInstance.prev(); // Move to the previous slide
                    } else if (event.key === "ArrowRight") {
                        carouselInstance.next(); // Move to the next slide
                    }
                }
            });

            const cursor = document.querySelector(".cursor");
            const buttons = [
                { element: document.querySelectorAll(".grid-item .box-img"), className: "cursor-glass" },
                { element: document.querySelector(".modal-close-button"), className: "cursor-close" },
                { element: document.querySelector(".carousel-control-next"), className: "cursor-arrow-right" },
                { element: document.querySelector(".carousel-control-prev"), className: "cursor-arrow-left" }
            ];

            buttons.forEach(({ element, className }) => {
                if (element instanceof NodeList) {
                    element.forEach(el => {
                        el.addEventListener("mouseenter", () => {
                            cursor.classList.add(className);
                            document.body.style.cursor = "none";
                        });
                        el.addEventListener("mouseleave", () => {
                            cursor.classList.remove(className);
                            document.body.style.cursor = "auto";
                        });
                    });
                } else if (element instanceof HTMLElement) {
                    element.addEventListener("mouseenter", () => {
                        cursor.classList.add(className);
                        document.body.style.cursor = "none";
                    });
                    element.addEventListener("mouseleave", () => {
                        cursor.classList.remove(className);
                        document.body.style.cursor = "auto";
                    });
                }
            });



        }

        const images = document.querySelectorAll(".clickable-image");
        const modal = document.getElementById("imageCarouselModal");

        if (modal) {
            const bootstrapModal = new bootstrap.Modal(modal);

            images.forEach((img, index) => {
                img.addEventListener("click", () => {
                    if (!isMobile()) {
                        bootstrapModal.show();

                        const bootstrapCarousel = bootstrap.Carousel.getInstance(carouselElement);
                        bootstrapCarousel.to(index);
                    }
                });
            });
        }
    }



    function initializeVitaPage() {
        const photosNav = document.querySelector('nav .Photos');
        if (photosNav) {
            photosNav.style.color = '';
        }

        const vitaNav = document.querySelector('nav .Vita');
        if (vitaNav) {
            vitaNav.style.color = 'blue';
        }
    }

    function initializeIntroPage() {
        const photosNav = document.querySelector('nav .Photos');
        if (photosNav) {
            photosNav.style.color = '';
        }

        const vitaNav = document.querySelector('nav .Vita');
        if (vitaNav) {
            vitaNav.style.color = '';
        }

        const videoSection = document.querySelector('.video-section');
        const cursor = document.querySelector('.cursor');

        videoSection.addEventListener('mouseenter', () => {
            cursor.classList.add('disable-cursor');
        });

        videoSection.addEventListener('mouseleave', () => {
            cursor.classList.remove('disable-cursor');
        });
    }

    if (isPhotosPage()) {
        initializePhotoPage();
    }

    if (isVitaPage()) {
        initializeVitaPage();
    }

    if (isIntroPage()){
        initializeIntroPage();
    }

    barba.hooks.after(() => {
        if (isIntroPage()){
            initializeIntroPage();
        }

        if (isPhotosPage()) {
            initializePhotoPage();
        }

        if (isVitaPage()) {
            initializeVitaPage();
        }
    });
});