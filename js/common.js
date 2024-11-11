$(function () {
    // GNB
    const $header = $("#header");
    const $menu = $(".gnb > li");
    const $subMenu = $(".sub-menu");
    const duration = 300;

    $menu.on("mouseenter", function () {
        $header.addClass("active");
        // $(this).find($subMenu).stop().slideDown(duration);
        $subMenu.stop().fadeIn(duration);
    });
    $menu.on("mouseleave", function () {
        $header.removeClass("active");
        $subMenu.stop().fadeOut(duration);
    });

    // SONY PICK
    const pickSlider = new Swiper(".pick-slider", {
        loop: true,
        autoplay: true,
        slidesPerView: "auto",
        spaceBetween: 45,

        navigation: {
            nextEl: ".pick-slider-wrap .button-next",
            prevEl: ".pick-slider-wrap .button-prev",
        },
    });

    const newsSlider = new Swiper(".news-slider", {
        loop: true,
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 40,

        navigation: {
            nextEl: ".news-slider-wrap .button-next",
            prevEl: ".news-slider-wrap .button-prev",
        },
    });

    // PROMOTION
    const promoSlider = new Swiper(".promo", {
        loop: true,
        // autoplay: true,
        slidesPerView: 1.5,
        spaceBetween: 40,
        centeredSlides: true,

        navigation: {
            nextEl: ".news-slider-wrap .button-next",
            prevEl: ".news-slider-wrap .button-prev",
        },
    });
    // SERVICE
    const serviceSlider = new Swiper(".service-slider", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        // spaceBetween: 40,

        navigation: {
            nextEl: ".service-slider .next",
            prevEl: ".service-slider .prev",
        },
    });
    // MAIN
    const mainSlider = new Swiper(".main", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 40,
    });

    $(".list-title").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });
    $(".sort-list-title").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });

    $(".item-list").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });

    // 탑버튼
    const btnTop = $(".btn-top");
    const $footer = $("#footer");

    $(window).scroll(function () {
        const footerOffset = $footer.offset().top;
        const scrollPos = $(window).scrollTop() + $(window).height();

        if (scrollPos >= footerOffset) {
            btnTop.addClass("white");
        } else {
            btnTop.removeClass("white");
        }
    });

    // 탑버튼 클릭시 부드러운 스크롤
    btnTop.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // top banner
    $(".top-banner a").on("click", function (e) {
        e.preventDefault();
        $(".top-banner").slideUp();
    });

    // 스토리 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    const keywords = document.querySelectorAll(".keywords > div");
    const keywordsCon = document.querySelectorAll(".keywords-con > p");
    const keywordsPics = gsap.utils.toArray(".keywords-pic figure");

    keywordsPics.forEach((pic, index) => {
        gsap.to(pic, {
            scrollTrigger: {
                trigger: pic,
                markers: true,
                start: "top 90%",
                end: "bottom 20%",
                scrub: 1,

                toggleClass: {
                    targets: [keywords[index], keywordsCon[index]],
                    className: "active",
                },
            },
            clipPath: "inset(0 0%)",
            // y: 100,
            // autoAlpha: 0,
        });
    });
    const tl = gsap.timeline();
    //header
    tl.from(".logo", { y: -100, autoAlpha: 0 });
    tl.from(".gnb li > a", { y: -100, autoAlpha: 0, stagger: 0.15 }, "-=0.4");
    tl.from(".util-menu a", { y: -100, autoAlpha: 0, stagger: 0.35 }, "-=0.4");

    // PICK
    tl.from(".pick-title > h2", { y: 100, autoAlpha: 0 });
    tl.from(".pick-title > p", { y: 100, autoAlpha: 0 }, "-=0.4");
});
